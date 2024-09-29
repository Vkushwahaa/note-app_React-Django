echo "BUILD START"
pip install -r requirements.txt
pyhton manage.py collectstatic --noinput --clear
echo "BUILD END"