#!/bin/bash

echo "Installing dependencies"
env/scripts/activate

echo "Installing dependencies"
python3 -m pip install -r requirements.txt

echo "Making migrations"
python3 manage.py migrate