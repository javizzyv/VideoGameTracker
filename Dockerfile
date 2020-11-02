# Indica la versión del contenedor
FROM node:12.18.4-alpine

# Copia el archivo de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Instala el cliente de gulp, necesario para pasar los test's
RUN npm install --global gulp-cli

# Borro archivos que no necesito ya
RUN rm ./package*.json

# Uso el usuario por defecto de node para permisos de no superusuario
USER node

# Indica el directorio donde se montará todo
WORKDIR /test

# Ejecuto gulp para ejecutar los test's
CMD ["gulp","test"]