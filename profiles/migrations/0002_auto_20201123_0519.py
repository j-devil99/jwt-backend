# Generated by Django 3.0.8 on 2020-11-23 05:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='BMI',
            field=models.FloatField(null=True),
        ),
        migrations.AddField(
            model_name='userprofile',
            name='height',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='userprofile',
            name='weight',
            field=models.IntegerField(null=True),
        ),
    ]