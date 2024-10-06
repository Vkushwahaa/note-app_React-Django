"""
WSGI config for note_app project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application
from django.core.management import call_command

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "note_app.settings")

try:
    from django import setup
    setup()
    call_command('migrate')  # Run migrations
except Exception as e:
    print(f"Error running migrations: {e}")
    
application = get_wsgi_application()

app = application
