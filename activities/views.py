from rest_framework import status
from datetime import timedelta
from django.utils.timezone import now
from rest_framework.generics import ListCreateAPIView
from rest_framework.response import Response
from .serialzers import ActivitySerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from .models import Activity
from accounts.models import User

class ActivityListCreateView(ListCreateAPIView):
    permission_classes = (IsAuthenticated,)
    authentication_class = JSONWebTokenAuthentication

    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer

    def post(self, request):
        user_id = request.user.get_id()
        request.data['user'] = user_id
        print(request.data)
        serializer = self.serializer_class(data=request.data)
        print(request.data)

        serializer.is_valid(raise_exception=True)
        serializer.save()
        status_code = status.HTTP_201_CREATED
        response = {
            'success': 'True',
            'status code': status_code,
            'exercise': serializer.data['exercise'],
            'performed_on': serializer.data['performed_on'],
            'reps': serializer.data['reps'],
            'duration': serializer.data['duration'],
            'message': 'Activity created succesfully',
        }
        return Response(response, status=status_code)

    def get(self, request, days=2):
        last_n_days = now() - timedelta(days=days)
        activities = Activity.objects.filter(performed_on__gt=last_n_days, user=request.user)
        # print(activities)
        response = []
        for activity in activities:
            activityData = {
                'id': activity.id,
                'exercise': activity.exercise, 
                'performed_on': activity.performed_on, 
                'reps': activity.reps, 
                'duration': activity.duration, 
                'user': activity.user.get_id()
            }
            response.append(activityData)
        return Response(response)




#         {
#     "exercise": [
#         "This field is required."
#     ],
#     "user": [
#         "This field is required."
#     ]
# }