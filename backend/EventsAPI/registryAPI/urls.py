from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from signup.views import index

urlpatterns = [
        path('admin/', admin.site.urls),
        path('api/', include('signup.urls')),
        path('api/', include('events.urls')),
        path('api/', include('register.urls')),
        path('', index, name="index"),
        path('ckeditor/', include('ckeditor_uploader.urls')),


        
        #url(r'^', include('signup.urls')),
]
