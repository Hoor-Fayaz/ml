import os
import torch
import sys

PROJECT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
sys.path.append(PROJECT_ROOT)

from model_utils import load_model

output_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), 'model'))
os.makedirs(output_dir, exist_ok=True)

model = load_model(device='cpu')
example_input = torch.rand(1, 3, 224, 224)
traced = torch.jit.trace(model, example_input)

output_path = os.path.join(output_dir, 'resnet50_animal64_ts.pt')
traced.save(output_path)
print(f'TorchScript model saved to {output_path}')

