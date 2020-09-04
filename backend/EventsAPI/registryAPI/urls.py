from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from signup.views import index

urlpatterns = [
        path('admin/', admin.site.urls),
        url(r'^', include('signup.urls')),
        path('', index, name="index"),
]
