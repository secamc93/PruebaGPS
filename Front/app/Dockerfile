# Establecer la imagen base
FROM node:16

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos del proyecto al directorio de trabajo
COPY . .

# Compilar la aplicación de ReactJS
RUN npm run build

# Exponer el puerto en el que se ejecutará la aplicación (en este caso, 3000)
EXPOSE 3000

# Comando de inicio para ejecutar la aplicación
CMD ["npm", "start"]
