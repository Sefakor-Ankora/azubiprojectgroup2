from django.db import models
from signup.models import User
from events.models import Events


# Create your models here.

class Register(models.Model):
    
    events = models.ForeignKey(Events, on_delete=models.CASCADE, null=True)
    User = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    

    class Meta:
        ordering = ('id',)
