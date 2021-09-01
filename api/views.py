from rest_framework import serializers
from api.models import Post
from django.shortcuts import render
from django.http import JsonResponse, response
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import PostSerializer

@api_view(['GET'])
def apiOverview(request):
  api_urls = {
    'user_details' : '/user_details/',

    'List_Post' : '/list_post/',
    'Detail_view_Post' : '/detail_view/<str:pk>/',
    'Create_Post' : '/create_post/',
    'Update_Post' : '/update_post/<str:pk>/',
    'delete_Post' : '/delete_post/<str:pk>/',
  }
  return Response(api_urls)

def List_post(request):
  Posts = Post.objects.all()
  serializer = PostSerializer(Posts, many=True)
  return Response(serializer.data)