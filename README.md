# VideoGameTracker (VGT)
API desarrollada para la asignatura IV en la ETSIIT

* Licencia: [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
* Version: ![version](https://img.shields.io/badge/version-0.2.0-red)
* Lenguaje: [![Powered by: JavaScript](https://img.shields.io/badge/powered%20by-javascript-yellow)](https://www.javascript.com)

## Descripción
La idea es solucionar el problema que tenemos cuando queremos llevar la cuenta de los videojuegos que nos pasamos, organizarlos según queramos y anotar que nos ha parecido sobre la marcha y no tener que recurrir al cutre bloc de notas ni tener que tener los juegos comprados en steam para poder organizarlos (con esto me refiero a otras plataformas de juego, no piratería ~~eso nunca~~).

## Lenguaje de programación y herramientas
Se ha optado por node.js por las siguientes razones:
- Por su popularidad en empresas y de cara a aprender un nuevo lenguaje muy usado en el ámbito laboral.
- Por la existencia de múltiples herramientas que ayudan en el desarrollo con node.js.

Además [aquí](./docs/herramientas.md) se irán detallando las diferentes herramientas que se vayan usando.

* Como controlador de versiones se usará ***nvm***.
* Para los test se usará [Mocha](https://mochajs.org) debido a su sencillez tanto en la sintaxis como en la funciones (cosa que casa muy bien con mi aplicación ya que no es muy ambiciosa) y por su popularidad.
* Como herramienta de construcción usaré [Gulp](https://gulpjs.com) debido a su compatibilidad con Mocha y a la sencilla interfaz del cli.

## Archivos importantes

* La clase principal como bien se indica en el archivo [iv.yaml](https://github.com/javizzyv/VideoGameTracker/blob/master/iv.yaml) es [esta](https://github.com/javizzyv/VideoGameTracker/blob/master/src/VGT.js). Todos los códigos fuentes están ubicados [aquí](https://github.com/javizzyv/VideoGameTracker/tree/master/src).
* La herramienta de construcción, en este caso un gulpfile, está [aquí](gulpfile.js).
* Para realizar los test's tenemos [este](test/test.js) archivo.

## Para ejecutar

### Para test

* Ejecutamos `npm install --global gulp-cli` para tener la orden `gulp` en la línea de órdenes.
* Ejecutamos `gulp` (Esto hará que se instalen las dependencias y se pasen los test's).

### En general

* En caso de que queramos hacerlo a mano tendremos que hacer `npm install` para instalar las dependencias, `npm test` para pasar los test's, y `npm start` si queremos ejecutar la aplicación.

Los test que se han realizado hasta ahora sirven para:
- El primero comprueba que la sintaxis y el funcionamiento de la clase [Generos](src/Generos.js) es correcta y se puede usar como enumerado sin problema.
- El segundo comprueba que se puede crear un objeto de la clase [Videojuego](src/Videojuego.js) sin problema (para añadir videojuegos en un futuro [HU1](https://github.com/javizzyv/VideoGameTracker/issues/4)).
- El tercero simplemente comprueba que todo esto se puede utilizar desde la clase [VGT](src/VGT.js) para ampliaciones futuras y para modularizar el código.
  
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
