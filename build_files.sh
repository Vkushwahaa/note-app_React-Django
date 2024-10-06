#!/bin/bash


echo "Installing dependencies"
python3 -m pip install -r requirements.txt

echo "collect static"
python3 manage.py collectstatic

echo "Making migrations"
python3 manage.py makemigrations
python3 manage.py migrate