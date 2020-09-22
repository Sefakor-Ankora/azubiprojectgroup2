from django.contrib import admin
from .models import Events

# Register your models here.
#admin.site.register(Events)


@admin.register(Events)
class eventsAdmin(admin.ModelAdmin):
      fields = (('event', 'speaker_name'), ('topic', 'description'), ('date', 'schedule', 'room_capacity'), 'image')
      list_display = ( 'event', 'date', 'speaker_name', 'topic', 'schedule', 'room_capacity', 'description', )
      ordering = ('speaker_name',)
      search_fields = ('speaker_name',)


