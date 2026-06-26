import torch
from PIL import Image
import os
import sys

# Ensure project root is in sys.path for absolute imports
PROJECT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
sys.path.append(PROJECT_ROOT)

from config import get_threshold
from model_utils import format_class_name, inference_transform, load_class_names

# Load TorchScript model (relative to this file)
MODEL_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'model', 'resnet50_animal64_ts.pt'))
model = torch.jit.load(MODEL_PATH, map_location='cpu')
model.eval()

class_names = load_class_names()
preprocess = inference_transform()

def predict(image_path: str):
    """Run inference on an image file and apply confidence threshold.
    Returns a dict with 'class' and 'confidence' (0‑1).
    """
    img = Image.open(image_path).convert('RGB')
    tensor = preprocess(img).unsqueeze(0)
    with torch.no_grad():
        out = model(tensor)
        probs = torch.nn.functional.softmax(out[0], dim=0)
    top_prob, top_idx = torch.max(probs, dim=0)
    confidence = top_prob.item()
    threshold = get_threshold()
    if confidence < threshold:
        return {"class": "Uncertain", "confidence": confidence}
    idx = top_idx.item()
    raw_class_name = class_names[idx] if idx < len(class_names) else "unknown"
    class_name = format_class_name(raw_class_name)
    return {"class": class_name, "confidence": confidence}
