
from django.contrib import admin
from django.urls import path, include  # Importa include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('app1.urls')),  # Agrega esta línea
]
