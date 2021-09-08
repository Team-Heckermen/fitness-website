from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from api.views import apiOverview, List_post, User_details

urlpatterns = [
    path('', apiOverview ,name="api-overview"),
    path('list_post/', List_post, name="list_post"),
    path('user_details/', User_details, name="user_details"),
]