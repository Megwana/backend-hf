# Generated by Django 3.2.20 on 2023-11-02 17:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0002_alter_profile_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='image',
            field=models.ImageField(default='logo192.png', upload_to='images'),
        ),
    ]