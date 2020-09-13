from django.test import TestCase
from factory import DjangoModelFactory, Faker

from ..models import Register

# Create your tests here.
class RegisterFactory(DjangoModelFactory):
    fullname = Faker('fullname')
    email = Faker('email')
    phonenumber = Faker('phonenumber')
    ticketnumber = Faker('ticketnumber')
    

    class Meta:
        model = Register




# tests/test_models.py
from django.test import TestCase

from ..models import Register
from .factories import RegisterFactory


class CompanyTestCase(TestCase):
    def test_str(self):
        """Test for string representation."""
        register = RegisterFactory()
        self.assertEqual(str(register), register.name)





# tests/test_serializers.py
from django.test import TestCase

from ..serializers import RegisterSerializer
from .factories import RegisterFactory


class RegisterSerializer(TestCase):
    def test_model_fields(self):
        """Serializer data matches the Company object for each field."""
        register = RegisterFactory()
        for field_name in [
            'id', 'fullname', 'email', 'phonenumber', 'ticketnumber'
        ]:
            self.assertEqual(
                serializer.data[field_name],
                getattr(register, field_name)