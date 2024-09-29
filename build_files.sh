echo "BUILD START"
  
python manage.py collectstatic --noinput

python manage.py migrate

echo "BUILD END"