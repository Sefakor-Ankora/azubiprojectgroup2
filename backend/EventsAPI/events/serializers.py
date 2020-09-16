from rest_framework import serializers
from events.models import Events



class EventsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Events
        fields = ('id', 
        'event_name',
         'speaker_name', 
         'topic', 
         'time_scheduled',
          'schedule', 
          'room_capacity', 
          'description', 
          'date')