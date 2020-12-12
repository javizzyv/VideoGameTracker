# VideoGameTracker (VGT)
API desarrollada para la asignatura IV en la ETSIIT

* Licencia: [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
* Version: ![version](https://img.shields.io/badge/version-0.3.0-red)
* Lenguaje: [![Powered by: JavaScript](https://img.shields.io/badge/powered%20by-javascript-yellow)](https://www.javascript.com)

[![Netlify](https://www.netlify.com/img/deploy/button.svg)](https://video-game-tracker.netlify.app/index?genero=RPG)

## Descripción
La idea es solucionar el problema que tenemos cuando queremos llevar la cuenta de los videojuegos que nos pasamos, organizarlos según queramos y anotar que nos ha parecido sobre la marcha y no tener que recurrir al cutre bloc de notas ni tener que tener los juegos comprados en steam para poder organizarlos (con esto me refiero a otras plataformas de juego, no piratería ~~eso nunca~~).

En principio no lo había pensado teniendo distintos usuarios/jugadores en mente sino más como una aplicación local para cada uno de forma individual, si hiciese falta cambiar el enfoque así se hará.

## Lenguaje de programación y herramientas

[Aquí](/docs/herramientas.md) se irán detallando las diferentes herramientas que se vayan usando.


## Serverless

En [este](docs/serverless.md) enlace está todo lo relacionado con serverless.


### Archivos de interés
Links que pueden ser de interés:

- [El archivo 5.json](5.json)
- [Archivo de configuración de Netlify](netlify.toml)
- [Carpeta de funciones de Netlify](/netlify)
- [Carpeta con funciones de Vercel](/api)

## Integración continua

Haciendo click [aquí](docs/ic.md) se podrá ver todo lo referente a IC.

## Docker

Haciando click [aquí](docs/docker.md) se podrá ver todo lo referente a Docker (Dockerfile, Docker Hub, ...). 

## Archivos importantes

* La clase principal como bien se indica en el archivo [iv.yaml](https://github.com/javizzyv/VideoGameTracker/blob/master/iv.yaml) es [esta](https://github.com/javizzyv/VideoGameTracker/blob/master/src/VGT.js). Todos los códigos fuentes están ubicados [aquí](https://github.com/javizzyv/VideoGameTracker/tree/master/src).
* La herramienta de construcción, en este caso un gulpfile, está [aquí](gulpfile.js).
* Para realizar los test's tenemos [este](test/test.js) archivo.
* El Dockerfile está [aquí](/Dockerfile)
* Este es el repositorio en [Docker Hub](https://hub.docker.com/repository/docker/javizzyv/videogametracker/general) 
* Este es el fichero de travis. [Travis](.travis.yml).
* Este es el fichero de shippable. [Shippable](shippable.yml).

## Para ejecutar

### Para test

* Ejecutamos `npm install --global gulp-cli` para tener la orden `gulp` en la línea de órdenes.
* Ejecutamos `gulp` (Esto hará que se instalen las dependencias y se pasen los test's).

### En general

* En caso de que queramos hacerlo a mano tendremos que hacer `npm install` para instalar las dependencias, `npm test` para pasar los test's, y `npm start` si queremos ejecutar la aplicación.
  
### Extra

* [Aquí](docs/pasos-para-ejecucion.md) los pasos de ejecución en caso de que algo falle.

## Issues
### Abiertos
[Estos](https://github.com/javizzyv/VideoGameTracker/issues) son los issues que aún no se han cerrado.
### Cerrados
[Estos](https://github.com/javizzyv/VideoGameTracker/issues?q=is%3Aissue+is%3Aclosed) son los issue que se han ido cerrando.

## Milestones
### Abiertos
[Estos](https://github.com/javizzyv/VideoGameTracker/milestones) son los milestones que aún no se han cerrado.
### Cerrados
[Estos](https://github.com/javizzyv/VideoGameTracker/milestones?state=closed) son los milestones que se han ido cerrando.

## Desarrollo

Para ver como ha ido el desarrollo se puede ver [aquí](docs/desarrollo.md).

### Historias de usuario

La idea es centrarme en estos requisitos e ir construyendo a partir de estos objetivos:

- [Mejorar constantemente el ámbito visual del proyecto](https://github.com/javizzyv/VideoGameTracker/issues/3).
- [Permitir añadir videojuegos predeterminados o nuevos para realizar su seguimiento](https://github.com/javizzyv/VideoGameTracker/issues/4).
- [Permitir añadir que nos ha parecido un juego en concreto](https://github.com/javizzyv/VideoGameTracker/issues/5).
- [Poner nota si así lo queremos a un juego en concreto](https://github.com/javizzyv/VideoGameTracker/issues/6).

## Configuración de git
Para configurar git y hacer clone mediante SSH se ha hecho de la siguiente [forma](docs/ssh.md).

## Autor

*Javier Victoria Mohamed*
