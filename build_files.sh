#!/bin/bash
echo "Checking Python installation..."
which python
echo "Running collectstatic..."
python manage.py collectstatic --noinput
