from rest_framework import serializers
from register.models import Register
from signup.models import User



class RegisterSerializer(serializers.ModelSerializer):

    class Meta:
        model = Register
        fields = ('id', 'user', 'events')