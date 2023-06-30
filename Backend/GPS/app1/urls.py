from django.urls import path
from . import views

urlpatterns = [
    path('generar/', views.generar_coordenada, name='generar_coordenada'),
    path('guardar/', views.guardar_coordenada, name='guardar_coordenada'),
    path('consultar/', views.obtener_coordenadas, name='obtener_coordenada'),
]
