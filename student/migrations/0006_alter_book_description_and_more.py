# Generated by Django 4.1.6 on 2023-03-02 23:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student', '0005_studentinformation'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='description',
            field=models.CharField(max_length=500),
        ),
        migrations.AlterField(
            model_name='studentinformation',
            name='studentID',
            field=models.CharField(max_length=20),
        ),
    ]
