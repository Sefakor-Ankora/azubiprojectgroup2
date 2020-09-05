from django.urls import path
from .views import signup, Login, Logout

urlpatterns = [
    path('signup/', signup.as_view(), name="register"),
    path('login/', Login.as_view(), name="login"),
    path('logout/', Logout.as_view(), name="logout"),
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