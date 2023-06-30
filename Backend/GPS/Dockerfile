# Imagen base para Python y Django
FROM python:3.8

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar archivos requerimientos del proyecto
COPY requirements.txt .

# Instalar dependencias
RUN pip install -r requirements.txt

# Copiar archivos del proyecto
COPY . .

# Variables de entorno para la conexión a la base de datos
ENV DB_ENGINE django.db.backends.postgresql
ENV DB_NAME pruebaGPS
ENV DB_USER postgres
ENV DB_PASSWORD PruebaGPS123
ENV DB_HOST db
ENV DB_PORT 5432

# Puerto en el que se ejecutará la aplicación Django
EXPOSE 8000

# Comando de inicio para ejecutar la aplicación Django
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
