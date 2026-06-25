import os
import json

CONFIG_PATH = os.path.join(os.path.expanduser('~'), '.wildai_config.json')
DEFAULT_THRESHOLD = 0.80

def load_config():
    if os.path.exists(CONFIG_PATH):
        with open(CONFIG_PATH, 'r') as f:
            return json.load(f)
    return {'threshold': DEFAULT_THRESHOLD}

def save_config(cfg):
    with open(CONFIG_PATH, 'w') as f:
        json.dump(cfg, f)

def get_threshold():
    return load_config().get('threshold', DEFAULT_THRESHOLD)

def set_threshold(value: float):
    cfg = load_config()
    cfg['threshold'] = value
    save_config(cfg)
