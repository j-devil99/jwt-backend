from django.urls import path, include
from .views import UserProfileView

urlpatterns = [
    path('profile/<uuid:pk>/', UserProfileView.as_view()),
]
