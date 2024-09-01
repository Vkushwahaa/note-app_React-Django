from django.urls import path
from . import views

urlpatterns = [
    path('',views.note,name="checkin"),
    path('notes/',views.getNotes,name="note-list"),
    path('notes/create/',views.createNote,name="create-note"),

    path('notes/<str:pk>/',views.getNote,name="get-singelnote"),
    path('notes/<str:pk>/update/',views.updateNote,name="update-note"),
    path('notes/<str:pk>/delete/',views.deleteNote,name="delete-note"),

]
