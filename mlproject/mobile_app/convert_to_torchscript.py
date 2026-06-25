import os
import os
import torch
import torchvision.models as models
import torch.nn as nn

# Ensure output directory exists
output_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), 'model'))
os.makedirs(output_dir, exist_ok=True)

# Path to the original checkpoint (relative to project root)
checkpoint_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', 'wild_animal_model-2.pth'))

# Load the original checkpoint
state = torch.load(checkpoint_path, map_location='cpu')

# Build the model architecture
model = models.mobilenet_v2()
model.classifier[1] = nn.Linear(1280, 64)
model.load_state_dict(state)
model.eval()

# Example dummy input for tracing (batch size 1, 3 channels, 224x224)
example_input = torch.rand(1, 3, 224, 224)
traced = torch.jit.trace(model, example_input)

# Save the TorchScript model for mobile app
output_path = os.path.join(output_dir, 'wild_animal_ts.pt')
traced.save(output_path)
print(f'TorchScript model saved to {output_path}')

# Ensure output directory exists
output_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), 'model'))
os.makedirs(output_dir, exist_ok=True)

# Path to the original checkpoint (relative to project root)
checkpoint_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'wild_animal_model-2.pth'))

# Load the original checkpoint
state = torch.load(checkpoint_path, map_location='cpu')

# Build the model architecture
model = models.mobilenet_v2()
model.classifier[1] = nn.Linear(1280, 64)
model.load_state_dict(state)
model.eval()

# Example dummy input for tracing (batch size 1, 3 channels, 224x224)
example_input = torch.rand(1, 3, 224, 224)
traced = torch.jit.trace(model, example_input)

# Save the TorchScript model for mobile app
output_path = os.path.join(output_dir, 'wild_animal_ts.pt')
traced.save(output_path)
print(f'TorchScript model saved to {output_path}')

