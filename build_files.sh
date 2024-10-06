#!/bin/bash

echo "Installing dependencies"
env/bin/activate

echo "Installing dependencies"
pip install -r requirements.txt

echo "Making migrations"
python3 manage.py migrate