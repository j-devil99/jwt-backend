from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    # path('', include('frontend.urls')),
    path('api/', include('accounts.urls')),
    path('api/', include('profiles.urls')),
]
