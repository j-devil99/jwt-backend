import uuid
from django.db import models
from accounts.models import User

class UserProfile(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    first_name = models.CharField(max_length=50, unique=False)
    last_name = models.CharField(max_length=50, unique=False)
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
        ('T', 'Transgender'),
        ('X', 'Prefer not to say'),
    )
    dob =  models.DateField(unique=False, blank=False, null=False)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    weight = models.IntegerField(null=True)
    height = models.IntegerField(null=True)
    BMI = models.FloatField(null=True)
    class Meta:
        '''
        to set table name in database
        '''
        db_table = "profile"