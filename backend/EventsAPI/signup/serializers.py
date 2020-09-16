from rest_framework import serializers 
from signup.models import user
from django.db.models import Q
from rest_framework.validators import UniqueValidator
from django.core.exceptions import ValidationError
#import re



#regex = '^[a-z0-9]+[\._]]?[a-z0-9]+[@]\w+[.]\w{2,3}$'



class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = user
        fields = ('id', 'firstname', 'lastname', 'address', 'city', 'phonenumber', 'email', 'password', 'confirmpassword')

        

class UserLoginSerializer(serializers.ModelSerializer):
    # to accept either username or email
    email = serializers.CharField()
    password = serializers.CharField()
    token = serializers.CharField(required=False, read_only=True)

    

    class Meta:
        model = user
        fields = ['email', 'password', 'token' ]

        read_only_fields = [
            'token',
       ]

    #def validate_email(self, value):
        #if not value:
            #raise serializers.ValidationError({"email": "Email is required"})
        #if not re.search(regex, value):
            #raise serializers.ValidationError({"email":"Invalid"})




class UserLogoutSerializer(serializers.ModelSerializer):
    token = serializers.CharField()
    status = serializers.CharField(required=False, read_only=True)

    
    class Meta:
        model = user
        fields = ['token', 'status' ]


