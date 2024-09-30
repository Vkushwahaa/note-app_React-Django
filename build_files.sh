#!/bin/bash
echo "Checking Python installation..."
which python3

echo "Setting up virtual environment..."
python3 -m venv venv
source venv/bin/activate

echo "Installing Python dependencies..."
pip install -r requirements.txt

echo "Running collectstatic..."
python3 manage.py collectstatic --noinput
