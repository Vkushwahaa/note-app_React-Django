echo "BUILD START"
pyhton -m pip install -r requirements.txt
pyhton manage.py collectstatic --noinput --clear
echo "BUILD END"