#!/bin/bash
echo "Checking Python installation..."
which python3
echo "Running collectstatic..."
python3 manage.py collectstatic --noinput
