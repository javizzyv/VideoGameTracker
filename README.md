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


## Integración continua

### Rúbrica 1 y 2

Para empezar, he configurado travis, primero porque era el que había que hacer obligatoriamente, pero también por estos motivos:
- Es gratuíto y más gracias al plan PRO que te da la UGR que hace que no se gasten créditos.
- Detecta los push de GitHub sin necesidad de configurar nada extra.
- Se hacen las builds para cada versión del lenguaje en paralelo y, por lo tanto, tarda mucho menos.
- La sintaxis es sencilla y se puede usar el contenedor de Docker Hub sin mucho problema.

En segundo lugar he optado por Shippable (siendo CircleCi mi tercera opción) principalmente por:
- Detecta los push de GitHub sin necesidad de configurar nada extra.
- La sintaxis es sencilla.
- El plan gratuíto no te va por créditos limitados.
En el resto de cosas Circle parecía mucho más prometedor (mejor interfaz y muchas más opciones), pero no me la quería jugar a gastar los créditos y tener algún problema.

Builds funcionando en cada una:
- [Travis](https://travis-ci.com/github/javizzyv/VideoGameTracker/builds/198692949)
- [Shippable](https://app.shippable.com/github/javizzyv/VideoGameTracker/runs/5/summary/console)
En caso de que no funcionen los links se pueden ver capturas aquí:
- [Travis](docs/img/build-travis-cd.png)
- [Shippable](docs/img/build-shippable-sd.png)

Los archivos están aquí:
- [Travis](.travis.yml)
- [Shippable](shippable.yml)


### Rúbrica 3

En Travis se usa el contenedor de Docker que ya usaba el gestor de tareas así que lo cubre automáticamente.

En cuanto a Shippable, se instala y usa Gulp para ejecutar los test's como se puede ver haciendo click [aquí](shippable.yml).

### Rúbrica 4

Se ha optado por usar el contenedor de Docker en Travis debido a su accesibilidad y se puede ver aquí:
- [Travis](docs/img/travis-sin-docker.png) antes sin docker.
- [Travis](.travis.yml) ahora con docker.

En principio lo iba a usar en ambos, pero ciertos errores usando la directiva ```pre_ci``` en Shippable hizo que optase finalmente por solo Travis.

### Rúbrica 5

Se han avanzado tanto la HU3 como la HU5 y se han realizado los test's pertinentes.
- [HU3](https://github.com/javizzyv/VideoGameTracker/issues/6)
- [HU5](https://github.com/javizzyv/VideoGameTracker/issues/15)


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
