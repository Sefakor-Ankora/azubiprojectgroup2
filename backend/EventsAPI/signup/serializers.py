from rest_framework import serializers 
from signup.models import user
from django.db.models import Q
from rest_framework.validators import UniqueValidator
from django.core.exceptions import ValidationError
from uuid import uuid4




class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = user
        fields = ('id', 'firstname', 'lastname', 'address', 'city', 'phonenumber', 'email', 'password', 'confirmpassword')



class UserLoginSerializer(serializers.ModelSerializer):
    # to accept either username or email
    user_id = serializers.CharField()
    password = serializers.CharField()
    token = serializers.CharField(required=False, read_only=True)

    def validate(self, data):
        # user,email,password validator
        user_id = data.get("user_id")
        password = data.get("password")
        if not user_id and not password:
            raise ValidationError("Details not entered.")
        user = None
        # if the email has been passed
        if '@' in user_id:
            user = user.objects.filter(
                Q(email=user_id) &
                Q(password=password)
                ).distinct()
            if not user.exists():
                raise ValidationError("User credentials are not correct.")
            user = user.objects.get(email=user_id)
        else:
            user = user.objects.filter(
                Q(username=user_id) &
                Q(password=password)
            ).distinct()
            if not user.exists():
                raise ValidationError("User credentials are not correct.")
            user = user.objects.get(username=user_id)
        if user.ifLogged:
            raise ValidationError("User already logged in.")
        user.ifLogged = True
        data['token'] = uuid4()
        user.token = data['token']
        user.save()
        return data

    class Meta:
        model = user
        fields = (
            'user_id',
            'password',
            'token',
        )

        read_only_fields = (
            'token',
        )


class UserLogoutSerializer(serializers.ModelSerializer):
    token = serializers.CharField()
    status = serializers.CharField(required=False, read_only=True)

    def validate(self, data):
        token = data.get("token", None)
        print(token)
        user = None
        try:
            user = user.objects.get(token=token)
            if not user.ifLogged:
                raise ValidationError("User is not logged in.")
        except Exception as e:
            raise ValidationError(str(e))
        user.ifLogged = False
        user.token = ""
        user.save()
        data['status'] = "User is logged out."
        return data

    class Meta:
        model = user
        fields = (
            'token',
            'status',
        )


