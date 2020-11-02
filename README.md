# VideoGameTracker (VGT)
API desarrollada para la asignatura IV en la ETSIIT

* Licencia: [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
* Version: ![version](https://img.shields.io/badge/version-0.3.0-red)
* Lenguaje: [![Powered by: JavaScript](https://img.shields.io/badge/powered%20by-javascript-yellow)](https://www.javascript.com)

## Descripción
La idea es solucionar el problema que tenemos cuando queremos llevar la cuenta de los videojuegos que nos pasamos, organizarlos según queramos y anotar que nos ha parecido sobre la marcha y no tener que recurrir al cutre bloc de notas ni tener que tener los juegos comprados en steam para poder organizarlos (con esto me refiero a otras plataformas de juego, no piratería ~~eso nunca~~).

## Lenguaje de programación y herramientas
Se ha optado por node.js por las siguientes razones:
- Por su popularidad en empresas y de cara a aprender un nuevo lenguaje muy usado en el ámbito laboral.
- Por la existencia de múltiples herramientas que ayudan en el desarrollo con node.js.

Además [aquí](./docs/herramientas.md) se irán detallando las diferentes herramientas que se vayan usando.

## Docker

Aquí se pondrá todo lo referente a Docker (Dockerfile, Docker Hub, ...)

* El Dockerfile está [aquí](/Dockerfile)
* Este es el repositorio en [Docker Hub](https://hub.docker.com/repository/docker/javizzyv/videogametracker/general)

### Explicación del contenedor base elegido

Para empezar, me he documentado de cuales son los más populares para node y cuales los más eficientes, he probado estos debido principalmente a ahorrarme problemas de compatibilidad y no he probado más porque en varios sitios recomentaban estos dos para node.

Los dos que se han probado son:

- '-slim': El contenedor base de node pero con menos herramientas y más liviano y comprimido. En este caso al principio no había problemas de compatibilidad pero al implementar el cambio de usuario de la forma en que está me hacía falta un contenedor con busybox para añadir el '-g'(gecos). Esto realmente no es un problema porque podría haber implementado el cambio de usuario de otra forma pero me gustaba esa en concreto. A parte de todo esto, el tiempo que tarda el build en esta imagen es [2 minutos](docs/img/slim-tiempo.png) y pesa unos [60 MB](docs/img/slim-tamanio.png).

- '-alpine': En este caso no tenía el problema de compatibilidad ni ningún otro y el tiempo de build es [1 minuto](docs/img/alpine-tiempo.png) y el tamaño es de unos [40 MB](docs/img/alpine-tamanio.png).

Así que mi decisión es clara, me he quedado con alpine por ser mas eficiente, liviano y tener menos problemas de compatibilidad en mi caso.

Todas las capturas haciendo click [aquí](docs/img).

### Automatización del push GitHub-DockerHub

El proceso de automatización era simplemente un opción de Docker Hub como se ve [aquí](docs/img/auto-Docker.png) y aún no se ha probado a usar el registro de repositorios de GitHub o Docker Hub.

Todas las capturas haciendo click [aquí](docs/img).

## Archivos importantes

* La clase principal como bien se indica en el archivo [iv.yaml](https://github.com/javizzyv/VideoGameTracker/blob/master/iv.yaml) es [esta](https://github.com/javizzyv/VideoGameTracker/blob/master/src/VGT.js). Todos los códigos fuentes están ubicados [aquí](https://github.com/javizzyv/VideoGameTracker/tree/master/src).
* La herramienta de construcción, en este caso un gulpfile, está [aquí](gulpfile.js).
* Para realizar los test's tenemos [este](test/test.js) archivo.
* El Dockerfile está [aquí](/Dockerfile)
* Este es el repositorio en [Docker Hub](https://hub.docker.com/repository/docker/javizzyv/videogametracker/general) 

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
