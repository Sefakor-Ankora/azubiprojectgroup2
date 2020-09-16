from django.urls import path
from .views import Signup, Login, Logout
from django.conf.urls import url
from rest_framework.authtoken.views import ObtainAuthToken
from signup import views

urlpatterns = [
    path('signup/', Signup.as_view(), name="signup"),
    path('login/', Login.as_view(), name="login"),
    path('logout/', Logout.as_view(), name="logout"),
   # url(r'^api-token-auth/', views.obtain_auth_token)
]








#
#from django.conf.urls import url
#from signup import views
#from django.urls import path
#from .views import  Login, Logout
#
#urlpatterns = [
#    url(r'^api/signup$', views.user_list),
#    url(r'^api/signup/(?P<pk>[0-9]+)$', views.user_details)
    
    
#]