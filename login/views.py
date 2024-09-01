from django.shortcuts import render
from django.http import JsonResponse


def notelogin():
    return JsonResponse('this is new login',safe=True)

# Create your views here.
