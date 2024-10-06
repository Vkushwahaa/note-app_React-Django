#!/bin/bash


echo "Installing dependencies"
python3 -m pip install -r requirements.txt

echo "collect static"
python3 manage.py collectstatic --noinput


echo "Making migrations"
python3 manage.py makemigrations

echo  "run migratuins"
python3 manage.py migrate