#!/bin/bash
echo "Running collectstatic..."
/usr/bin/python manage.py collectstatic --noinput
