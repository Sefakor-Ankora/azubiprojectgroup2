# Generated by Django 3.0.6 on 2020-09-22 17:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0010_auto_20200922_1643'),
    ]

    operations = [
        migrations.RenameField(
            model_name='events',
            old_name='event_name',
            new_name='event',
        ),
    ]
