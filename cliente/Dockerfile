# Usa la imagen de Node.js para construir la aplicación
FROM node:18 AS build

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia archivos de configuración e instala dependencias
COPY package*.json ./
RUN npm install

# Copia el resto de los archivos y construye la app
COPY . .
RUN npm install

# Copiar el resto de los archivos
COPY . .

# Exponer el puerto en el que corre Vite
EXPOSE 5173

# Iniciar Vite en modo desarrollo
CMD ["npm", "run", "dev", "--", "--host"]
