# Generated by Django 3.2.20 on 2023-08-30 19:03

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('posts', '0002_auto_20230830_1838'),
        ('bookmarks', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='bookmark',
            old_name='user',
            new_name='owner',
        ),
        migrations.AlterUniqueTogether(
            name='bookmark',
            unique_together={('owner', 'post')},
        ),
    ]
