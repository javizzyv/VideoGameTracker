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

### Vercel

Para la conexión se han seguido los pasos de este archivo ---> [Pasos](docs/pasosVer.md)

Para concretar más, uso el método `module.exports = async (req, res)` para tratar las peticiones como bien está documentado en el código, por lo que cada vez se llamará a esta función que servirá los contenidos en el 'res.send()' y devolverá un código de que todo ha ido bien '200' en caso de que así sea y '500' en caso contrario.

Como archivo de configuración 'vercel.json' que se puede ver [aquí](vercel.json) simplemente tengo que no envíe notificaciones cada vez ya que la carpeta donde se publica y donde se ejecutan las funciones ya se ha definido en la propia web como se ha mostrado en los pasos.

La función en vercel básicamente lo que hace es trabajar con ciertos datos que le pasamos, que son varios videojuegos diferentes con diferentes notas, y devolver el que tiene más nota, siendo este nuestro favorito personal objetivamente, esto solo será válido para los videojuegos que hayamos terminado. Ver [aquí](api/index.js) el código comentado si queda alguna duda y [aquí](api/datos.js) para ver los datos que se pasan.

Para ver Vercel ya desplegado ---> [Vercel](https://video-game-tracker.javizzyv.vercel.app/api)

Se han creado ciertos issues y HU de acorde a esta parte que son:
- [HU6](https://github.com/javizzyv/VideoGameTracker/issues/19).
- [Issue](https://github.com/javizzyv/VideoGameTracker/issues/20).
### Netlify

Para la conexión se han seguido los pasos de este archivo ---> [Pasos](docs/pasosNet.md)

Para concretar más, uso el método `exports.handler = async function(event, context)` para tratar las peticiones como bien está documentado en el código, por lo que cada vez se llamará a esta función que servirá los contenidos en el 'body' y devolverá un código de que todo ha ido bien '200' en caso de que así sea y '500' en caso contrario.

En el archivo de configuración 'netlify.toml' que se puede ver [aquí](netlify.toml) se ha definido en el apartado 'build' donde se publicará el despliegue y donde están las funciones, en el apartado 'redirects' a qué función redirigirá en caso de poner '/index' que es para lo que está preparado. En cualquier caso el archivo está comentado.

La función de netlify básicamente usa ciertos videojuegos como datos de entrada, entre ellos devolverá los videojuegos que tengan un género común, este género se pasará por query string, en el caso que pongo el género es RPG. Ver [aquí](netlify/index.js) el código comentado si queda alguna duda y [aquí](netlify/datos.js) para ver los datos que se pasan que son, aunque pueda parecer que no, diferentes a los de Vercel, en este caso añado algunos videojuegos de otros géneros a los que ya se usaban en Vercel para poder usar esta otra funcionalidad.

Para ver Netlify ya desplegado ---> [![Netlify](https://www.netlify.com/img/deploy/button.svg)](https://video-game-tracker.netlify.app/index?genero=RPG)

Se han creado ciertos issues y HU de acorde a esta parte que son:
- [HU7](https://github.com/javizzyv/VideoGameTracker/issues/21).


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
