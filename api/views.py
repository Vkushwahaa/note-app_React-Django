from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes
from .models import Note
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
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
@permission_classes([IsAuthenticated])
def getNotes(request):
    user = request.user
    note = user.note_set.all()
    serializer = NoteSerializers(note,many=True)
    return Response(serializer.data)

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def getNote(request,pk):
    user = request.user
    note = get_object_or_404(Note, id=pk, user=user)
    serializer = NoteSerializers(note,many=False)
    return Response(serializer.data) 

@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def updateNote(request,pk):
    user = request.user
    note = get_object_or_404(Note, id=pk, user=user)
    serializer = NoteSerializers(instance=note,data = request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data) 

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def createNote(request):
    serializer = NoteSerializers(data = request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)
    return Response(serializer.data) 

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteNote(request,pk):
    user = request.user
    note = get_object_or_404(Note, id=pk, user=user)
    note.delete()
    return Response("note has been deleted hureeeeeeey") 

