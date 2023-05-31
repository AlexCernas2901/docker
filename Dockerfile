# Usa la imagen base de Node.js
FROM node:latest

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json a la carpeta de trabajo del contenedor
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos del proyecto al contenedor
COPY . .

# Expone el puerto en el que se ejecutará el servidor HTTP
EXPOSE 3000

# Comando para ejecutar el servidor HTTP al iniciar el contenedor
CMD ["node", "app.js"]