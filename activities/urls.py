from django.urls import path, include
from .views import ActivityListCreateView

urlpatterns = [
    path('activities/', ActivityListCreateView.as_view()),
    path('activities/<int:days>', ActivityListCreateView.as_view())
]