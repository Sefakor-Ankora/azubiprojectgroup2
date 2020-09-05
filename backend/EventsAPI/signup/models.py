from django.db import models
from django.core.validators import MinLengthValidator

# Create your models here.

class user(models.Model):
    firstname = models.CharField(max_length=50, blank = False, default = "")
    lastname = models.CharField(max_length=50, blank = False, default = "")
    email = models.EmailField(blank=False, default = "")
    username = models.CharField(max_length=50, blank=False, default = "")
    Password = models.CharField(max_length=32, validators=[MinLengthValidator(8)],)
    ifLogged = models.BooleanField(default=False)
    token = models.CharField(max_length=500, null=True, default="")



    def _str_(self):
        return self.name

            
            
            
            
    class Meta:
        ordering = ('id',)