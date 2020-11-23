import uuid
from django.db import models
from accounts.models import User
from datetime import datetime

class Activity(models.Model):
    CHOICES = [(i,i) for i in range(15)]
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='activity')
    exercise = models.IntegerField(choices=CHOICES)
    performed_on = models.DateField(default=datetime.now, blank=True)
    reps = models.IntegerField(blank=True)
    duration = models.IntegerField(blank=True)

    def __str__(self):
        return self.id.urn[9:]

    class Meta:
        db_table = 'activity'