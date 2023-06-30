from geopy.geocoders import Nominatim
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Coordenadas
from .serializers import CoordenadasSerializer
import random
from datetime import datetime


geolocator = Nominatim(user_agent="pruebaGPS")

def get_location_by_coordinates(lat, long):
    try:
        location = geolocator.reverse([lat, long], exactly_one=True)
        address = location.raw['address']
        City = address.get('city', '')
        state = address.get('state', '')  # Cambia 'suburb' por 'state'
        return City, state  # Devuelve la ciudad y el estado
    except Exception as e:
        print(f"Error al obtener la ubicación: {e}")
        return '', ''


@api_view(['GET'])
def generar_coordenada(request):
    latitud = random.uniform(1.4, 11.5)  # Rango de latitud para Colombia
    longitud = random.uniform(-77.5, -71.5)  # Rango de longitud para Colombia
    city, suburb = get_location_by_coordinates(latitud, longitud)
    timespan = datetime.now().isoformat()  # Asume la fecha y hora actuales
    coordenada = Coordenadas(latitude=latitud, longitude=longitud, site=city, subsite=suburb, timespan=timespan, temp=22)
    coordenada.save()
    serializer = CoordenadasSerializer(coordenada)
    return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['POST'])
def guardar_coordenada(request):
    serializer = CoordenadasSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def obtener_coordenadas(request):
    coordenadas = Coordenadas.objects.all()
    serializer = CoordenadasSerializer(coordenadas, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
