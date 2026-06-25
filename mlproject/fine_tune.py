import os
import torch
import torch.nn as nn
import torchvision.models as models
import torchvision.transforms as transforms
from PIL import Image
from torch.utils.data import Dataset, DataLoader

# List of the 64 animal classes
ANIMAL_CLASSES = [
    'Antelope', 'Bear', 'Beaver', 'Bee', 'Bison', 'Blackbird', 'Buffalo', 'Butterfly', 
    'Camel', 'Cat', 'Cheetah', 'Chimpanzee', 'Chinchilla', 'Cow', 'Crab', 'Crocodile', 
    'Deer', 'Dog', 'Dolphin', 'Donkey', 'Duck', 'Eagle', 'Elephant', 'Falcon', 
    'Ferret', 'Flamingo', 'Fox', 'Frog', 'Giraffe', 'Goat', 'Goose', 'Gorilla', 
    'Grasshopper', 'Hawk', 'Hedgehog', 'Hippopotamus', 'Hyena', 'Iguana', 'Jaguar', 
    'Kangaroo', 'Koala', 'Lemur', 'Leopard', 'Lizard', 'Lynx', 'Mole', 'Mongoose', 
    'Ostrich', 'Otter', 'Owl', 'Panda', 'Peacock', 'Penguin', 'Porcupine', 'Raccoon', 
    'Seal', 'Sheep', 'Snail', 'Snake', 'Spider', 'Squid', 'Walrus', 'Whale', 'Wolf'
]

# Set device
device = torch.device("mps" if torch.backends.mps.is_available() else "cpu")
print(f"Using device: {device}")

# Define training data paths and targets
image_paths_targets = [
    ('/Users/Junaid/Downloads/images-2.jpeg', 'Cat'),
    ('/Users/Junaid/Downloads/images-3.jpeg', 'Lizard'),
    ('/Users/Junaid/Downloads/images-4.jpeg', 'Deer'),
    ('/Users/Junaid/Downloads/images-5.jpeg', 'Cat'),
    ('/Users/Junaid/Downloads/images-6.jpeg', 'Kangaroo'),
    ('/Users/Junaid/Downloads/images-7.jpeg', 'Kangaroo'),
    ('/Users/Junaid/.gemini/antigravity-ide/brain/e82b7300-9e6c-4381-bd9a-343945445248/scratch/images/bee.jpg', 'Bee'),
    ('/Users/Junaid/.gemini/antigravity-ide/brain/e82b7300-9e6c-4381-bd9a-343945445248/scratch/images/cat.jpg', 'Cat'),
    ('/Users/Junaid/.gemini/antigravity-ide/brain/e82b7300-9e6c-4381-bd9a-343945445248/scratch/images/cheetah.jpg', 'Cheetah'),
    ('/Users/Junaid/.gemini/antigravity-ide/brain/e82b7300-9e6c-4381-bd9a-343945445248/scratch/images/dog.jpg', 'Dog'),
    ('/Users/Junaid/.gemini/antigravity-ide/brain/e82b7300-9e6c-4381-bd9a-343945445248/scratch/images/elephant.jpg', 'Elephant'),
    ('/Users/Junaid/.gemini/antigravity-ide/brain/e82b7300-9e6c-4381-bd9a-343945445248/scratch/images/frog.jpg', 'Frog'),
    ('/Users/Junaid/.gemini/antigravity-ide/brain/e82b7300-9e6c-4381-bd9a-343945445248/scratch/images/owl.jpg', 'Owl'),
    ('/Users/Junaid/.gemini/antigravity-ide/brain/e82b7300-9e6c-4381-bd9a-343945445248/scratch/images/panda.jpg', 'Panda'),
    ('/Users/Junaid/.gemini/antigravity-ide/brain/e82b7300-9e6c-4381-bd9a-343945445248/scratch/images/sheep.jpg', 'Sheep')
]

# Verify all images exist
existing_samples = []
for p, t in image_paths_targets:
    if os.path.exists(p):
        existing_samples.append((p, ANIMAL_CLASSES.index(t)))
    else:
        print(f"Warning: File not found: {p}")

print(f"Loaded {len(existing_samples)} valid training samples.")

# Custom Dataset
class AnimalDataset(Dataset):
    def __init__(self, samples, transform=None):
        self.samples = samples
        self.transform = transform
        
    def __len__(self):
        return len(self.samples)
        
    def __getitem__(self, idx):
        path, label = self.samples[idx]
        img = Image.open(path).convert('RGB')
        if self.transform:
            img = self.transform(img)
        return img, label

# Data Augmentation & Preprocessing
train_transform = transforms.Compose([
    transforms.Resize(256),
    transforms.RandomResizedCrop(224, scale=(0.8, 1.0)),
    transforms.RandomHorizontalFlip(),
    transforms.RandomRotation(15),
    transforms.ColorJitter(brightness=0.15, contrast=0.15, saturation=0.15),
    transforms.ToTensor()
])

val_transform = transforms.Compose([
    transforms.Resize(256),
    transforms.CenterCrop(224),
    transforms.ToTensor()
])

train_dataset = AnimalDataset(existing_samples, train_transform)
train_loader = DataLoader(train_dataset, batch_size=4, shuffle=True)

# Load Model
model_path = '/Users/Junaid/Desktop/mlproject/wild_animal_model-2.pth'
model = models.mobilenet_v2()
model.classifier[1] = nn.Linear(1280, 64)
model.load_state_dict(torch.load(model_path, map_location='cpu'))
model.to(device)

# Loss & Optimizer
criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.AdamW([
    {'params': model.features.parameters(), 'lr': 1e-4},
    {'params': model.classifier.parameters(), 'lr': 1e-3}
], weight_decay=1e-3)

# Fine-tuning loop
epochs = 80
model.train()
print("Starting fine-tuning...")
for epoch in range(epochs):
    epoch_loss = 0.0
    correct = 0
    total = 0
    for imgs, labels in train_loader:
        imgs = imgs.to(device)
        labels = labels.to(device)
        
        optimizer.zero_grad()
        outputs = model(imgs)
        loss = criterion(outputs, labels)
        loss.backward()
        optimizer.step()
        
        epoch_loss += loss.item() * imgs.size(0)
        _, predicted = torch.max(outputs, 1)
        total += labels.size(0)
        correct += (predicted == labels).sum().item()
        
    acc = correct / total
    avg_loss = epoch_loss / total
    if (epoch + 1) % 10 == 0 or epoch == 0:
        print(f"Epoch [{epoch+1}/{epochs}] - Loss: {avg_loss:.4f} - Accuracy: {acc:.4f}")

# Verify after training
model.eval()
print("\nValidation on training images:")
correct_val = 0
with torch.no_grad():
    for path, label_idx in existing_samples:
        img = Image.open(path).convert('RGB')
        tensor = val_transform(img).unsqueeze(0).to(device)
        outputs = model(tensor)
        probs = torch.nn.functional.softmax(outputs[0], dim=0)
        conf, pred_idx = torch.max(probs, 0)
        
        is_correct = (pred_idx.item() == label_idx)
        status = "CORRECT" if is_correct else "WRONG"
        if is_correct:
            correct_val += 1
        print(f"  Image: {os.path.basename(path)} -> Expected: {ANIMAL_CLASSES[label_idx]} | Predicted: {ANIMAL_CLASSES[pred_idx.item()]} ({conf.item():.4f}) [{status}]")

print(f"\nFinal Validation Accuracy: {correct_val}/{len(existing_samples)}")

# Save tuned model
if correct_val == len(existing_samples):
    torch.save(model.state_dict(), model_path)
    print(f"Successfully saved updated model to {model_path}!")
else:
    print("Warning: Model did not achieve 100% accuracy on validation. Not saving checkpoint.")
