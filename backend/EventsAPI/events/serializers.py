from rest_framework import serializers
from events.models import Events



class EventsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Events
        fields = ('id', 'speaker_name', 'topic', 'time_scheduled', 'time', 'room_capacity', 'description', 'date')