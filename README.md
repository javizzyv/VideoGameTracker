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


## Microservicio

Aquí irá todo lo relacionado con el microservicio.

### Justificación

He elegido Fastify.

El principal motivo es la ligereza y rapidez del mismo, para poder llegar a escalar esta aplicación en un futuro necesitaría la mayor relación de respuestas a peticiones/s. Mi aplicación se supone que simula una pseudo-biblioteca de steam, solo que sin jugar a los videojuegos. Esto supondría un alto tráfico de peticiones y carga de trabajo debido a que se trabajaría con mucha información y usuarios.

Además, al tener un montón de plugins ya encapsulados de base; Pino, React, el uso nativo de .json, hace que a la hora de añadir funcionalidades no haya conflictos ni haya que preocuparse por buscar plugins adecuados o compatibles.

Su uso es parecido a otros como Express y Hapi, declaras una variable a la que le asignas un puerto del localhost, acto seguido configuras las rutas y los verbos que atenderá y devuelves códigos según lo que pase.

Primero se declara la variable `const fastify = require('fastify')({logger: true})`, el logger es para usar log, y Fastify usa Pino.
Para ejecutar la aplicación y escuchar peticiones por el puerto 3000 usamos `fastify.listen(3000)`.
Para cerrar la conexión `fastify.close()`.
Para configurar las rutas y sus verbos `fastify.verbo('ruta', async (request, reply))` donde `request` nos proporciona los parámetros y la query string de la URL, y con `reply` podemos responder multitud de cosas, como el código http que creamos oportuno.


Para probarlo se puede ejecutar `npm start` o `gulp start` y usar curl o httpie como dice el código comentado.
Para ver el código comentado:

Código ---> [App](/src/index.js)

### Diseño

Aquí detallaré el todo lo relacionado con rutas y Fastify en general, también voy a poner antes de nada el código debidamente comentado para poder verlo en conjunto con la explicación.

Código ---> [App](/src/index.js)

Para empezar, declaro la variable fastify que será la que controle las peticiones como tal, y activos los logs. Fastify usa por defecto Pino para los logs debido a su rapidez y ligereza.

Antes de nada, llamo a `start` que hará que se ejecute la aplicación en localhost y el puerto 3000. También hay un método para cerrar la conexión.

Un inciso, no se usa ningún tipo de base de datos por no ser necesario aún, así que se trabaja con datos locales, así que los cambios no se mantenienen entre sesiones pero sí que se mantienen mientras la aplicación se esté ejecutando.

Por lo general se devuelve todo en formato json, Fastify facilita mucho el proceso de trabajar en este formato.

Ahora sí, en cuanto las rutas tengo lo siguiente:

- Un método GET que se llama con la ruta `/videojuegos` y que listará todos los videojuegos siguiendo la [HU8](https://github.com/javizzyv/VideoGameTracker/issues/24). Hacer click [aquí](/docs/img/getLista-fastify.png) para ver un ejemplo de ejecución.
- Un método GET que se llama con la ruta `/videojuegos/:videojuego` y que mostrará el juego que se especifique siguiendo la [HU8](https://github.com/javizzyv/VideoGameTracker/issues/24), en caso de no existir se devolverá el código `404`. Hacer click [aquí](/docs/img/get1-fastify.png) para ver un ejemplo de ejecución.
- Un método DELETE que se llama con la ruta `/videojuegos/:videojuego` y que borrará el juego que se especifique siguiendo la [HU1](https://github.com/javizzyv/VideoGameTracker/issues/4), en caso de no existir se devolverá el código `404`. Hacer click [aquí](/docs/img/delete-fastify.png) para ver un ejemplo de ejecución.
- Un método PUT que se llama con la ruta `/videojuegos/:videojuego?atributo=nuevo` y que actualizará el videojuego especificado y el atributo especificado con el valor que digamos siguiendo la [HU2](https://github.com/javizzyv/VideoGameTracker/issues/5) y la [HU3](https://github.com/javizzyv/VideoGameTracker/issues/6), de ser un atributo que no existe o que no se pueda cambiar devolverá el código `400`. Hacer click [aquí](/docs/img/put-fastify.png) para ver un ejemplo de ejecución.
- Un método POST que se llama con la ruta `/videojuegos/:videojuego` que añadirá un nuevo videojuego, el que especifiquemos siguiendo la [HU1](https://github.com/javizzyv/VideoGameTracker/issues/4), de existir ya devolverá el código `409`. Hacer click [aquí](/docs/img/post-fastify.png) para ver un ejemplo de ejecución.

Para probar todo esto se puede usar curl, aunque yo he usado httpie.

### Test's y HU's

Aquí detallaré el todo lo relacionado con los test de Fastify, también voy a poner antes de nada el código debidamente comentado para poder verlo en conjunto con la explicación.

Código ---> [Test](/test/index-test.js)

Para empezar, he optado por usar `chai` con el plugin `chaiHttp`, esto es debido a que era la forma más compatible de testear las petiones con mi implementación. Como tengo un método `start` y `close` y no tengo una variable ligada al puerto como tal, librerías como supertest e inyecciones de peticiones no terminaban de funcionar.

Los distintos test comprueban que se devuelva el código `200`, esto significa que todo ha ido bien, y muestran en resultado de cada orden. Por lo general se devuelve todo en formato json, Fastify facilita mucho el proceso de trabajar en este formato.

Los test ligados a HU son:

- Test de GET individual que está relacionado con la [HU8](https://github.com/javizzyv/VideoGameTracker/issues/24).
- Test de GET múltiple que está relacionado con la [HU8](https://github.com/javizzyv/VideoGameTracker/issues/24).
- Test de PUT que está relacionado con la [HU3](https://github.com/javizzyv/VideoGameTracker/issues/6) y [HU2](https://github.com/javizzyv/VideoGameTracker/issues/5).
- Test de POST que está relacionado con la [HU1](https://github.com/javizzyv/VideoGameTracker/issues/4).
- Test de DELETE que está relacionado con la [HU1](https://github.com/javizzyv/VideoGameTracker/issues/4).

### Middleware y logs

Para los logs, Fastify usa Pino, es bastante rápido y liviano y viene ya por defecto, abajo un ejemplo.

Logs ---> [Logs](/docs/img/log-Pino.png)
### Gestor y cambios a las clases

Para esta parte he tenido que cambiar la clase `VGT` de forma que si `index.js` sirve de clase controladora, `VGT` me sirve de clase modelo y controla un poco las estructuras de datos con las que se trabaja. No hay clase Dator porque no es necesaria aún, y menos con mi implementación. En un futuro cuando se trabaje con datos más complejos, haya persistencia y la necesite la implementaré.

El gestor de tareas, gulp, tiene los targets `start` que inicia la aplicación, `test` que ejecuta todos los test, `install` y `build` que no hacen nada especial porque no ha sido necesario.

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
