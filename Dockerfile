# Indica la versión del contenedor
FROM node:12.18.4-alpine

# Indica el directorio donde se montará todo
WORKDIR /vgt

# Copia el archivo de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Instala el cliente de gulp, necesario para pasar los test's
RUN npm install --global gulp-cli

# Copio los archivos necesarios
#COPY src ./src
#COPY test ./test
COPY gulpfile.js ./

# Añado un usuario sin contraseña y lo ponga para ejecutar lo siguiente
RUN adduser -D -g '' usuarioIV
USER usuarioIV

# Ejecuto gulp para ejecutar los test's
CMD ["gulp", "test"]