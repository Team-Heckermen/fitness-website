from rest_framework import serializers
from api.models import Post,  UserAccount
from django.shortcuts import render
from django.http import JsonResponse, response
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import PostSerializer,  UserCreateSerializer

from .models import Post


@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'List': '/post-list/',
        'Detail': '/detail-view/<str:pk>/',
        'Create': '/create-post/',
        'Update': '/update-post/<str:pk>/',
        'Delete': '/delete-post/<str:pk>/',
    }
    return Response(api_urls)


@api_view(['GET'])
def postList(request):
    posts = Post.objects.all()
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)
