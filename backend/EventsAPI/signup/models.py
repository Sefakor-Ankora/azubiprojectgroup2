from django.db import models
from django.core.validators import MinLengthValidator
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.conf import settings



#@receiver(post_save, sender=settings.AUTH_USER_MODEL)
#def create_auth_token(sender, instance=None, created=False, **kwargs):
    #if created:
        #Token.objects.create(user=instance)



# Create your models here.

class user(models.Model):
    firstname = models.CharField(max_length=50, blank = False, default = "")
    lastname = models.CharField(max_length=50, blank = False, default = "")
    address = models.CharField(max_length=50, blank = False, default = "")
    city = models.CharField(max_length=50, blank = False, default = "")
    phonenumber = models.CharField(max_length=50, blank = False, default = "")
    email = models.EmailField(blank=False, default = "")
    password = models.CharField(max_length=32, validators=[MinLengthValidator(8)])
    confirmpassword = models.CharField(max_length=32, validators=[MinLengthValidator(8)],)
    ifLogged = models.BooleanField(default=False)
    token = models.CharField(max_length=500, null=True, default="")



    def _str_(self):
        return self.name

            
            
            
            
    class Meta:
        ordering = ('id',)