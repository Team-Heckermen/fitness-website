from django.urls import path, include, re_path
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    path('', views.apiOverview, name="api-overview"),
    path('post-list/', views.postList, name="post-list"),
    path('post-detail/<str:pk>/', views.postDetail, name="post-detail"),
    path('post-create/', views.postCreate, name="post-create"),
]
