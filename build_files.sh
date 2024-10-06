#!/bin/bash


echo "Installing dependencies"
pip install -r requirements.txt
python3 manage.py collectstatic --noinput


echo "Making migrations"
python3 manage.py makemigrations

echo  "run migratuins"
python3 manage.py migrate