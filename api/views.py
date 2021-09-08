from rest_framework import serializers
from api.models import Post,  UserAccount
from django.shortcuts import render
from django.http import JsonResponse, response
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import PostSerializer,  UserCreateSerializer

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

@api_view(['GET'])
def List_post(request):
  Posts = Post.objects.all()
  return Response(Posts)

@api_view(['GET'])
def User_details(request):
  Users = UserAccount.objects.all()
  serializer = UserCreateSerializer(Users, many=True)
  return Response(serializer.data) 