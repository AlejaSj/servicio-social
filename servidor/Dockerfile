# Usa Node.js 19 para la construcción
FROM node:19-bullseye

WORKDIR /app

# Copia archivos de configuración e instala dependencias
COPY package.json package-lock.json ./
RUN npm install

# Copia el código fuente
COPY . .

# Expone el puerto de Vite
EXPOSE 5174

# Ejecuta el servidor de desarrollo de Vite
CMD ["npm", "run", "dev", "--", "--host"]
