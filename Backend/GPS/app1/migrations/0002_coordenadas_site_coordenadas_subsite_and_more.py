# Generated by Django 4.2.2 on 2023-06-30 03:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='coordenadas',
            name='site',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='coordenadas',
            name='subsite',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='coordenadas',
            name='temp',
            field=models.CharField(max_length=10, null=True),
        ),
        migrations.AddField(
            model_name='coordenadas',
            name='timespan',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
