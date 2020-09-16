from django.contrib import admin
from .models import Events

# Register your models here.
#admin.site.register(Events)


@admin.register(Events)
class eventsAdmin(admin.ModelAdmin):
      list_display = ('speaker_name', 'topic', 'time', 'room_capacity', 'description', 'date')
      ordering = ('speaker_name',)
      search_fields = ('speaker_name',)


