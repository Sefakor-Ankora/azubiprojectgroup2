from django.db import models
from signup.models import User
from events.models import Events


# Create your models here.

class Register(models.Model):
    
    pro = models.CharField(max_length=50, blank=False, default='')
    user = models.CharField(max_length=50, blank=False, default='')
   
   
   # events = models.ForeignKey(Events, on_delete=models.CASCADE, null=True)
    #user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    

    class Meta:
        ordering = ('id',)
