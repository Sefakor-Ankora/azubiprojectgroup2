from django.db import models


# Create your models here.

class Register(models.Model):
    fullname = models.CharField(max_length=50, blank=False, default='')
    email = models.EmailField(blank=False, default = "")
    phonenumber = models.CharField(max_length=50, blank = False, default = "")
    ticketnumber = models.CharField(max_length=50, blank = False, default = "")
    time_scheduled = (
        ('morning', 'Morning'),
        ('midmorning', 'Midmorning'),
        ('afternoon', 'Afternoon')
    )
    time = models.CharField(max_length=25, choices=time_scheduled)


    def _str_(self):
        return self.name

    class Meta:
        ordering = ('id',)
