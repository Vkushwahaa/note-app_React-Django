"""
WSGI config for note_app project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/howto/deployment/wsgi/
"""

import os
import logging

from django.core.wsgi import get_wsgi_application
from django.core.management import call_command

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "note_app.settings")

try:
    from django import setup
    setup()
    logger.info("Django setup completed successfully.")
    
    # Log that we are about to run migrations
    logger.info("Running migrations...")
    
    call_command('migrate')  # Run migrations
    logger.info("Migrations ran successfully")
except Exception as e:
    logger.error(f"Error running migrations: {e}")

    
application = get_wsgi_application()

app = application
