from django.urls import path, include
from django.http import HttpResponseRedirect

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("your_app_name.urls")),  # Replace with your app name
    path("", lambda request: HttpResponseRedirect("/api/")),  # Redirect to /api/
]
