from django.test import TestCase
from factory import DjangoModelFactory, Faker

from ..models import Events


# Create your tests here.
class EventsFactory(DjangoModelFactory):
    speaker_name = Faker('name')
    topic = Faker('topic')
    time_scheduled = Faker('time_scheduled')
    time = Faker('time')
    room_capacity = Faker('room_capacity')
    description = Faker('description')

    

    class Meta:
        model = Events




# tests/test_models.py
from django.test import TestCase

from ..models import Events
from .factories import EventsFactory


class CompanyTestCase(TestCase):
    def test_str(self):
        """Test for string representation."""
        events = EventsFactory()
        self.assertEqual(str(events), events.name)



# tests/test_serializers.py
from django.test import TestCase

from ..serializers import CompanySerializer
from .factories import CompanyFactory


class EventsSerializer(TestCase):
    def test_model_fields(self):
        """Serializer data matches the Company object for each field."""
        events = EventsFactory()
        for field_name in [
            'id', 'speaker_name', 'topic', 'time_scheduled', 'time', 'room_capacity',
            'description'
        ]:
            self.assertEqual(
                serializer.data[field_name],
                getattr(events, field_name)