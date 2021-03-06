# Generated by Django 3.0.8 on 2020-11-23 14:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0002_auto_20201123_0519'),
        ('activities', '0002_auto_20201123_1322'),
    ]

    operations = [
        migrations.AlterField(
            model_name='activity',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='activity', to='profiles.UserProfile'),
        ),
    ]
