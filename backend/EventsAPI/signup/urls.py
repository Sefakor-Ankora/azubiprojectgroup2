from django.conf.urls import url
from signup import views
from django.urls import path
from .views import  Login, Logout


urlpatterns = [
    url(r'^api/signup$', views.user_list),
    url(r'^api/signup/(?P<pk>[0-9]+)$', views.user_details)
    #url(r'^api/signup$', views.Login_list),
    #url(r'^api/signup/(?P<pk>[0-9]+)$', views.login_details)
    #url(r'^api/signup$', views.Logout_list),
    #url(r'^api/signup/(?P<pk>[0-9]+)$', views.logout_details)
    
]