from rest_framework import status
from rest_framework.generics import RetrieveUpdateAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from accounts.serializers import UserSerializer
from .models import UserProfile, User


class UserProfileView(RetrieveUpdateAPIView):

    permission_classes = (IsAuthenticated,)
    authentication_class = JSONWebTokenAuthentication
    serializer_class = UserSerializer
    queryset = UserProfile.objects.all()
    # lookup_url_kwarg = 'pk'

    def get(self, request, *args, **kwargs):
        try:
            user_profile = UserProfile.objects.get(user=request.user)
            print(type(user_profile))
            status_code = status.HTTP_200_OK
            response = {
                'success': 'true',
                'status code': status_code,
                'message': 'User profile fetched successfully',
                'data': [{
                    'first_name': user_profile.first_name,
                    'last_name': user_profile.last_name,
                    'dob': user_profile.dob,
                    'gender': user_profile.gender,
                    'weight': user_profile.weight,
                    'height': user_profile.height,
                    'BMI': user_profile.BMI
                    }]
                }

        except Exception as e:
            status_code = status.HTTP_400_BAD_REQUEST
            response = {
                'success': 'false',
                'status code': status.HTTP_400_BAD_REQUEST,
                'message': 'User does not exists',
                'error': str(e)
                }
        return Response(response, status=status_code)

    def patch(self, request, *args, **kwargs):
        try:
            user_profile = UserProfile.objects.get(user=request.user)
            print(request)
            serializer = self.serializer_class(user_profile, data=request.data, partial=True)
            print(serializer)
            # print(serializer.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            response = {
                'id': serializer.data['id'],
                'success' : 'True',
                'status code' : status.HTTP_200_OK,
                'message': 'User data updated successfully',
            }
            status_code = status.HTTP_200_OK

        except Exception as e:
            status_code = status.HTTP_400_BAD_REQUEST
            response = {
                'success': 'False',
                'status code': status.HTTP_400_BAD_REQUEST,
                'message': 'User does not exist',
                'error': str(e)
                }
        return Response(response, status=status_code)