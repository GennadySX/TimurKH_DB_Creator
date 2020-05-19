from django.urls import path
from .views import *
urlpatterns = [
    path('project', ApiDBView.as_view()),
    path('project/<int:id>/', ApiDBView.as_view()),
    ]