#!/bin/bash

echo "Starting collectstatic process..."

# Navigate to the Django project directory
cd note_app || { echo "Failed to navigate to note_app directory"; exit 1; }

# Run the collectstatic command
python manage.py collectstatic --noinput

if [ $? -eq 0 ]; then
    echo "collectstatic completed successfully."
else
    echo "collectstatic failed."
    exit 1
fi
