# Generated by Django 3.0.6 on 2020-09-23 09:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('signup', '0003_auto_20200921_1848'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='address',
        ),
        migrations.RemoveField(
            model_name='user',
            name='city',
        ),
        migrations.RemoveField(
            model_name='user',
            name='first_name',
        ),
        migrations.RemoveField(
            model_name='user',
            name='last_name',
        ),
    ]
