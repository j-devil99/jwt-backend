# Generated by Django 3.0.8 on 2020-11-23 13:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('activities', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='activity',
            name='exercise',
            field=models.IntegerField(choices=[(0, 0), (1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (6, 6), (7, 7), (8, 8), (9, 9), (10, 10), (11, 11), (12, 12), (13, 13), (14, 14)]),
        ),
    ]
