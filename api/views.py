from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.shortcuts import render
from .models import Note
from .serializers import NoteSerializers

@api_view(['GET'])
def note(request):
    
    
    
    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]
    return Response(routes)

@api_view(["GET"])
def getNotes(request):
    note = Note.objects.all()
    serializer = NoteSerializers(note,many=True)
    return Response(serializer.data)

@api_view(["GET"])
def getNote(request,pk):
    note = Note.objects.get(id=pk)
    serializer = NoteSerializers(note,many=False)
    return Response(serializer.data) 

@api_view(["PUT"])
def updateNote(request,pk):
    note = Note.objects.get(id=pk)
    serializer = NoteSerializers(instance=note,data = request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data) 

@api_view(["POST"])
def createNote(request):
    serializer = NoteSerializers(data = request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data) 

@api_view(['DELETE'])
def deleteNote(request,pk):
    note = Note.objects.get(id=pk)
    note.delete()
    return Response("note has been deleted hureeeeeeey") 

