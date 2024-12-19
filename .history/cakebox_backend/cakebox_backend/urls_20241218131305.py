from django.contrib import admin
from django.urls import path, include
from cakebox_backend.views import home_view  # Replace 'your_app_name'

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("your_app_name.urls")),  # Replace with your app name
    path("", home_view),  # Root view
]
