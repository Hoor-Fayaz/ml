import os
import json

import torch
import torch.nn as nn
import torchvision.models as models
import torchvision.transforms as transforms
import torchvision.transforms.functional as F


BASE_DIR = os.path.dirname(__file__)
RESNET_FILES_DIR = os.path.join(BASE_DIR, "resnet50_animal64_files")
MODEL_PATH = os.path.join(RESNET_FILES_DIR, "resnet50_animal64_checkpoint.pth")
CLASS_NAMES_PATH = os.path.join(RESNET_FILES_DIR, "class_names.json")

IMAGENET_MEAN = [0.485, 0.456, 0.406]
IMAGENET_STD = [0.229, 0.224, 0.225]


def build_model(model_name="resnet50", num_classes=64):
    model_name = model_name.lower()

    if model_name == "resnet50":
        model = models.resnet50(weights=None)
        model.fc = nn.Linear(model.fc.in_features, num_classes)
        return model

    if model_name == "mobilenet_v2":
        model = models.mobilenet_v2(weights=None)
        model.classifier[1] = nn.Linear(model.classifier[1].in_features, num_classes)
        return model

    raise ValueError(f"Unsupported model architecture: {model_name}")


def load_class_names(path=CLASS_NAMES_PATH):
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def format_class_name(class_name):
    return class_name.replace("_", " ").title()


def load_checkpoint(path=MODEL_PATH, device="cpu"):
    checkpoint = torch.load(path, map_location=device)

    if isinstance(checkpoint, dict) and "state_dict" in checkpoint:
        return checkpoint

    return {
        "model_name": "resnet50",
        "num_classes": 64,
        "class_names": load_class_names(),
        "state_dict": checkpoint,
    }


def load_model(model_path=MODEL_PATH, device="cpu"):
    checkpoint = load_checkpoint(model_path, device)
    class_names = checkpoint.get("class_names") or load_class_names()
    model_name = checkpoint.get("model_name", "resnet50")
    num_classes = checkpoint.get("num_classes", len(class_names))

    model = build_model(model_name, num_classes)
    model.load_state_dict(checkpoint["state_dict"])
    model.to(device)
    model.eval()
    return model


def load_model_bundle(model_path=MODEL_PATH, device="cpu"):
    checkpoint = load_checkpoint(model_path, device)
    class_names = checkpoint.get("class_names") or load_class_names()
    model_name = checkpoint.get("model_name", "resnet50")
    num_classes = checkpoint.get("num_classes", len(class_names))

    model = build_model(model_name, num_classes)
    model.load_state_dict(checkpoint["state_dict"])
    model.to(device)
    model.eval()

    return {
        "model": model,
        "model_name": model_name,
        "class_names": class_names,
        "num_classes": num_classes,
        "best_val_acc": checkpoint.get("best_val_acc"),
        "test_acc": checkpoint.get("test_acc"),
    }


def inference_transform():
    return transforms.Compose([
        transforms.Resize((256, 256)),
        transforms.CenterCrop(224),
        transforms.ToTensor(),
        transforms.Normalize(mean=IMAGENET_MEAN, std=IMAGENET_STD),
    ])


def normalize_tensor(tensor):
    return F.normalize(tensor, mean=IMAGENET_MEAN, std=IMAGENET_STD)


def image_to_tensor(image):
    return normalize_tensor(F.to_tensor(image))


def center_crop_square(image):
    width, height = image.size
    size = min(width, height)
    left = (width - size) // 2
    top = (height - size) // 2
    return image.crop((left, top, left + size, top + size))


def inference_batch(image):
    """Build test-time augmented views without changing model weights."""
    views = []

    square_resized = F.resize(image, [256, 256])
    views.append(F.center_crop(square_resized, [224, 224]))
    views.append(F.hflip(views[-1]))

    aspect_resized = F.resize(image, 256)
    views.append(F.center_crop(aspect_resized, [224, 224]))
    views.append(F.hflip(views[-1]))

    cropped_square = center_crop_square(image)
    cropped_square = F.resize(cropped_square, [224, 224])
    views.append(cropped_square)
    views.append(F.hflip(cropped_square))

    tensors = [image_to_tensor(view) for view in views]
    return torch.stack(tensors)
