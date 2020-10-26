FROM node:12.18.4-alpine

WORKDIR /vgt

COPY package*.json ./

RUN npm install

RUN npm install --global gulp-cli

COPY src ./src
COPY test ./test
COPY gulpfile.js ./

RUN adduser -D -g '' usuarioIV
USER usuarioIV

CMD gulp