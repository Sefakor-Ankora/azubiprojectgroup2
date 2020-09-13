from django.conf.urls import url
from django.urls import path
from events import views
from .views import Events


urlpatterns = [
    
    path('events/', Events.as_view(), name="events")
]