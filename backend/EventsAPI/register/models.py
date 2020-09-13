from django.db import models

# Create your models here.

class Register(models.Model):
    fullname = models.CharField(max_length=50, blank=False, default='')
    email = models.EmailField(blank=False, default = "")
    phonenumber = models.CharField(max_length=50, blank = False, default = "")
    ticketnumber = models.CharField(max_length=50, blank = False, default = "")


    def _str_(self):
        return self.name

    class Meta:
        ordering = ('id',)
