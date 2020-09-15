from rest_framework import serializers
from register.models import Register



class RegisterSerializer(serializers.ModelSerializer):

    class Meta:
        model = Register
        fields = ('id', 'fullname', 'email', 'phonenumber', 'ticketnumber', 'time_scheduled', 'time')