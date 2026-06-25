import torch
from PIL import Image
from torchvision import transforms
import os
import sys
# Ensure project root is in sys.path for absolute imports
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
from utils.config import get_threshold
from animal_db import ANIMAL_CLASSES

# Load TorchScript model (relative to this file)
MODEL_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'model', 'wild_animal_ts.pt'))
model = torch.jit.load(MODEL_PATH, map_location='cpu')
model.eval()

preprocess = transforms.Compose([
    transforms.Resize(256),
    transforms.CenterCrop(224),
    transforms.ToTensor()
])

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
    class_name = ANIMAL_CLASSES[idx] if idx < len(ANIMAL_CLASSES) else "Unknown"
    return {"class": class_name, "confidence": confidence}
