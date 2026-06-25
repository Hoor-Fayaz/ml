import http.server
import json
import base64
import time
import os
import urllib.parse
from io import BytesIO
from PIL import Image

import torch
import torchvision.models as models
import torch.nn as nn
import torchvision.transforms as transforms

# Import classes and facts
from animal_db import ANIMAL_CLASSES, ANIMAL_FACTS

PORT = 8001
STATIC_DIR = os.path.join(os.path.dirname(__file__), 'static')

# Initialize models globally
print("Loading PyTorch models into memory...")
device = torch.device("cpu")

# Load MobileNetV2 Wild Animal Model
mobilenet_model = None
try:
    print("-> Loading wild_animal_model-2.pth (9MB)...")
    t0 = time.time()
    mobilenet_model = models.mobilenet_v2()
    mobilenet_model.classifier[1] = nn.Linear(1280, 64)
    mobilenet_model.load_state_dict(torch.load('wild_animal_model-2.pth', map_location=device))
    mobilenet_model.to(device)
    mobilenet_model.eval()
    print(f"MobileNetV2 loaded successfully in {time.time() - t0:.2f} seconds!")
except Exception as e:
    print(f"Error loading MobileNetV2: {e}")

# Preprocessing transforms
preprocess = transforms.Compose([
    transforms.Resize(256),
    transforms.CenterCrop(224),
    transforms.ToTensor()
])

def run_inference(model, image):
    """Run inference on the model and return top 5 classes and scores"""
    if model is None:
        raise ValueError("Model is not loaded.")
    
    t_start = time.time()
    # Preprocess image
    img_tensor = preprocess(image).unsqueeze(0).to(device)
    
    with torch.no_grad():
        outputs = model(img_tensor)
        probabilities = torch.nn.functional.softmax(outputs[0], dim=0)
        
    latency_ms = (time.time() - t_start) * 1000
    
    # Get top 5 classes
    top5_prob, top5_catid = torch.topk(probabilities, 5)
    
    predictions = []
    for i in range(top5_prob.size(0)):
        idx = top5_catid[i].item()
        prob = top5_prob[i].item()
        # Bound safety
        class_name = ANIMAL_CLASSES[idx] if idx < len(ANIMAL_CLASSES) else f"Unknown ({idx})"
        predictions.append({
            "class": class_name,
            "confidence": prob,
            "index": idx
        })
        
    return predictions, latency_ms

class WildAIRequestHandler(http.server.BaseHTTPRequestHandler):
    
    def log_message(self, format, *args):
        # Silence default request logging to keep output clean,
        # but feel free to print custom debug info
        pass

    def send_cors_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_cors_headers()
        self.end_headers()

    def do_GET(self):
        # Serve frontend files
        url_path = urllib.parse.urlparse(self.path).path
        if url_path == '/' or url_path == '/index.html':
            filepath = os.path.join(STATIC_DIR, 'index.html')
            content_type = 'text/html'
        elif url_path.endswith('.css'):
            filepath = os.path.join(STATIC_DIR, os.path.basename(url_path))
            content_type = 'text/css'
        elif url_path.endswith('.js'):
            filepath = os.path.join(STATIC_DIR, os.path.basename(url_path))
            content_type = 'application/javascript'
        else:
            # Fallback/Security Check (only serve from static folder)
            basename = os.path.basename(url_path)
            filepath = os.path.join(STATIC_DIR, basename)
            content_type = 'application/octet-stream'
            if filepath.endswith('.png'):
                content_type = 'image/png'
            elif filepath.endswith('.jpg') or filepath.endswith('.jpeg'):
                content_type = 'image/jpeg'
            elif filepath.endswith('.svg'):
                content_type = 'image/svg+xml'
            elif filepath.endswith('.json'):
                content_type = 'application/json'

        if os.path.exists(filepath) and os.path.isfile(filepath):
            try:
                with open(filepath, 'rb') as f:
                    content = f.read()
                self.send_response(200)
                self.send_header('Content-Type', content_type)
                self.send_header('Content-Length', len(content))
                self.send_cors_headers()
                self.end_headers()
                self.wfile.write(content)
            except Exception as e:
                self.send_error_response(500, f"Error reading file: {e}")
        else:
            self.send_response(404)
            self.send_cors_headers()
            self.end_headers()
            self.wfile.write(b"404 Not Found")

    def do_POST(self):
        url_path = urllib.parse.urlparse(self.path).path

        if url_path == '/api/classify':
            try:
                # Read content body
                content_length = int(self.headers.get('Content-Length', 0))
                post_data = self.rfile.read(content_length)
                payload = json.loads(post_data.decode('utf-8'))

                # Extract image data
                image_data = payload.get('image', '')
                if not image_data:
                    self.send_error_response(400, "Missing 'image' parameter.")
                    return

                # Decode base64 image
                if "," in image_data:
                    image_data = image_data.split(",")[1]

                image_bytes = base64.b64decode(image_data)
                image = Image.open(BytesIO(image_bytes)).convert("RGB")

                # Ensure MobileNetV2 model is loaded
                if mobilenet_model is None:
                    self.send_error_response(500, "MobileNetV2 model not loaded.")
                    return

                predictions, latency_ms = run_inference(mobilenet_model, image)
                top_class = predictions[0]['class']
                facts = ANIMAL_FACTS.get(top_class, {
                    "scientific_name": "N/A",
                    "habitat": "N/A",
                    "diet": "N/A",
                    "status": "N/A",
                    "description": "No additional details available for this animal."
                })

                response_data = {
                    "success": True,
                    "model": "wild_animal",
                    "model_name": "Wild Animal Model (MobileNetV2)",
                    "latency_ms": latency_ms,
                    "predictions": predictions,
                    "facts": facts
                }
                self.send_json_response(200, response_data)
            except Exception as e:
                self.send_error_response(500, f"Server error: {e}")
        else:
            self.send_error_response(404, "Endpoint not found.")

    def send_json_response(self, status_code, data):
        response_bytes = json.dumps(data).encode('utf-8')
        self.send_response(status_code)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Content-Length', len(response_bytes))
        self.send_cors_headers()
        self.end_headers()
        self.wfile.write(response_bytes)

    def send_error_response(self, status_code, message):
        print(f"Server Error ({status_code}): {message}")
        self.send_json_response(status_code, {
            "success": False,
            "error": message
        })

def start_server():
    # Make sure static directory exists
    os.makedirs(STATIC_DIR, exist_ok=True)
    
    server_address = ('', PORT)
    httpd = http.server.HTTPServer(server_address, WildAIRequestHandler)
    print(f"Starting server on port {PORT}...")
    print(f"Open http://localhost:{PORT} in your web browser to use the app.")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping server.")
        httpd.server_close()

if __name__ == '__main__':
    start_server()
