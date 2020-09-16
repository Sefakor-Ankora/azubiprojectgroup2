from django.contrib import admin
from .models import Events

# Register your models here.
#admin.site.register(Events)


@admin.register(Events)
class eventsAdmin(admin.ModelAdmin):
      list_display = ( 'event_name', 'date', 'speaker_name', 'topic', 'schedule', 'room_capacity', 'description', )
      ordering = ('speaker_name',)
      search_fields = ('speaker_name',)


