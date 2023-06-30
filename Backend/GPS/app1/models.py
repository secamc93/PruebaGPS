from django.db import models

class Coordenadas(models.Model):
    latitude = models.FloatField()
    longitude = models.FloatField()
    site = models.CharField(max_length=255, null=True)  # Para guardar la ciudad
    subsite = models.CharField(max_length=255,null=True)  # Para guardar el barrio
    timespan = models.CharField(max_length=255, null=True)  # Para guardar el timestamp
    temp = models.CharField(max_length=10, null=True)  # Para guardar la temperatura
    created_at = models.DateTimeField(auto_now_add=True)
