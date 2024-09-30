#!/bin/bash

# Navigate to the Django project directory
cd note_app

# Run the collectstatic command
python manage.py collectstatic --noinput
