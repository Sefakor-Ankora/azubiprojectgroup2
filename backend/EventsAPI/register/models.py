from django.db import models
from signup.models import User


# Create your models here.

class Register(models.Model):
    User = models.ForeignKey('signup.User', on_delete=models.CASCADE, null=True)
    Events = models.ForeignKey('events.Events', on_delete=models.CASCADE, null=True)
    

    def _str_(self):
        return self.name

    class Meta:
        ordering = ('id',)
