from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status

from signup.models import user
from signup.serializers import user
from rest_framework.decorators import api_view
from .serializers import UserSerializer, UserLoginSerializer, UserLogoutSerializer
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from rest_framework.response import Response
from django.shortcuts import redirect
from rest_framework import generics

from rest_framework.authtoken.models import Token
# Create your views here.


class Signup(generics.ListCreateAPIView):
    # get method handler
    queryset = user.objects.all()
    serializer_class = UserSerializer

@api_view(['GET','POST'])
def user_list(request):
    if request.method == 'GET':
        user = User.objects.all()

        name = request.GET.get('name', None)
        if name is not None:
            user = user.filter(name_icontains=name)

        user_serializer = UserSerializer(user, many=true)
        return JsonResponse(user_serializer.data, safe=False)
        #safe=false for object serialization

    elif request.method == 'POST':
            user_data = JSONParser().parse(request)
            user_serializer = UserSerializer(data=user_data)
            if user_serializer.is_valid():
                user_serializer.save()
                return JsonResponse(user_serializer.data, status=status.HTTP_201_CREATED)
            return JsonResponse(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)






@api_view(['GET', 'PUT', 'DELETE'])
def user_details(request, pk):
    try:
        user = User.objects.get(pk=pk)
    except User.DoesNotExist:
        return JsonResponse({'message': 'The USER does not exist'},status=status.HTTP_404_NOT_FOUND)

    if request.method =='GET':
        user_serializer = UserSerializers(User)
        return JsonResponse(user_serializer.data)
    
    elif request.method == "PUT":
        user_data = JSONParser().parse(request)
        user_serializer = UserSerializer(user, data=user_data)
        if user_serializer.is_valid():
                user_serializer.save()
                return JsonResponse(user_serializer.data)
                return JsonResponse(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        user.delete()
        return JsonResponse({'message': 'User was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)

#class CustomAuthToken(ObtainAuthToken):
    
    #def post(self, request, *args, **kwargs):
        #serializer = self.serializer_class(data=request.data,
                                           #context={'request': request})
        #serializer.is_valid(raise_exception=True)
        #user = serializer.validated_data['user']
        #token, created = Token.objects.get_or_create(user=user)
        #return Response({
           # 'token': token.key,
           # 'user_id': user.pk,
            #'email': user.email
       # })


class Login(generics.GenericAPIView):
     #get method handler
    queryset = user.objects.all()
    serializer_class = UserLoginSerializer

    def post(self, request, *args, **kwargs):
        serializer_class = UserLoginSerializer(data=request.data)
        if serializer_class.is_valid(raise_exception=True):
            return Response(serializer_class.data, status=HTTP_200_OK)
        return Response(serializer_class.errors, status=HTTP_400_BAD_REQUEST)


class Logout(generics.GenericAPIView):
    queryset = user.objects.all()
    serializer_class = UserLogoutSerializer

    def post(self, request, *args, **kwargs):
        serializer_class = UserLogoutSerializer(data=request.data)
        if serializer_class.is_valid(raise_exception=True):
            return Response(serializer_class.data, status=HTTP_200_OK)
        return Response(serializer_class.errors, status=HTTP_400_BAD_REQUEST)


def index(request):
    return redirect('/api/login')

