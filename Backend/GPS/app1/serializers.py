from rest_framework import serializers
from .models import Coordenadas

class CoordenadasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coordenadas
        fields = '__all__'
