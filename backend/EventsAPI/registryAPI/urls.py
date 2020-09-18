from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include, static
#from signup.views import index
from signup import views
from rest_framework.authtoken.views import ObtainAuthToken
#from signup.views import CustomAuthToken
from django.conf import settings



urlpatterns = [
        path('admin/', admin.site.urls),
        path('api/', include('signup.urls')),
        path('api/', include('events.urls')),
        path('api/', include('register.urls')),
        #path('', index, name="index"),
        path('ckeditor/', include('ckeditor_uploader.urls')),
        #url(r'^api-token-auth/', views.obtain_auth_token)
        #url(r'^api-token-auth/', CustomAuthToken.as_view())


        
        #url(r'^', include('signup.urls')),
]
