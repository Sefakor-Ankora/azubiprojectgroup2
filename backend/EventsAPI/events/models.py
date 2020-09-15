from django.db import models
from django.db.models import Model
from ckeditor_uploader.fields import RichTextUploadingField
from ckeditor.fields import RichTextField


# Create your models here.

class Events(models.Model):
    speaker_name = models.CharField(max_length=50, blank=False, default='')
    topic = RichTextField()
    time_scheduled = (
        ('morning', 'Morning'),
        ('afternoon', 'Afternoon'),
        ('afternoon', 'Afternoon')
    )
    time = models.CharField(max_length=25, choices=time_scheduled)
    room_capacity = models.CharField(max_length=50, blank=False, default='')
    description = RichTextUploadingField()
    #date = models.DateField(null=True, blank=True)




def _str_(self):
        return self.name

            
            
class Meta:
        ordering = ('id',)
