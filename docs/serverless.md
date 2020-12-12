### Vercel

Para la conexión se han seguido los pasos de este archivo ---> [Pasos](/docs/pasosVer.md)

Para concretar más, uso el método `module.exports = async (req, res)` para tratar las peticiones como bien está documentado en el código, por lo que cada vez se llamará a esta función que servirá los contenidos en el 'res.send()' y devolverá un código de que todo ha ido bien '200' en caso de que así sea y un error personalizado en caso contrario.

Como archivo de configuración 'vercel.json' que se puede ver [aquí](/vercel.json) simplemente tengo que no envíe notificaciones cada vez ya que la carpeta donde se publica y donde se ejecutan las funciones ya se ha definido en la propia web como se ha mostrado en los pasos.

La función en vercel básicamente lo que hace es trabajar con ciertos datos que le pasamos, que son varios videojuegos diferentes con diferentes notas, y devolver el que tiene más nota, siendo este nuestro favorito personal objetivamente, esto solo será válido para los videojuegos que hayamos terminado. Ver [aquí](/api/index.js) el código comentado si queda alguna duda y [aquí](/api/datos.js) para ver los datos que se pasan.

Para ver Vercel ya desplegado ---> [Vercel](https://video-game-tracker.javizzyv.vercel.app/api)

Aquí para ver los despliegues ---> [Despliegues](https://github.com/javizzyv/VideoGameTracker/deployments/activity_log?environment=Production)

Se han creado ciertos issues y HU de acorde a esta parte que son:
- [HU6](https://github.com/javizzyv/VideoGameTracker/issues/19).
- [Issue](https://github.com/javizzyv/VideoGameTracker/issues/20).

### Netlify

Para la conexión se han seguido los pasos de este archivo ---> [Pasos](/docs/pasosNet.md)

Para concretar más, uso el método `exports.handler = async function(event, context)` para tratar las peticiones como bien está documentado en el código, por lo que cada vez se llamará a esta función que servirá los contenidos en el 'body' y devolverá un código de que todo ha ido bien '200' en caso de que así sea y error personalizado en caso contrario.

En el archivo de configuración 'netlify.toml' que se puede ver [aquí](/netlify.toml) se ha definido en el apartado 'build' donde se publicará el despliegue y donde están las funciones, en el apartado 'redirects' a qué función redirigirá en caso de poner '/index' que es para lo que está preparado. En cualquier caso el archivo está comentado.

La función de netlify básicamente usa ciertos videojuegos como datos de entrada, entre ellos devolverá los videojuegos que tengan un género común, este género se pasará por query string, en el caso que pongo el género es RPG. Ver [aquí](/netlify/index.js) el código comentado si queda alguna duda y [aquí](/netlify/datos.js) para ver los datos que se pasan que son, aunque pueda parecer que no, diferentes a los de Vercel, en este caso añado algunos videojuegos de otros géneros a los que ya se usaban en Vercel para poder usar esta otra funcionalidad. La función no sirve un json, sirve los títulos de los juegos que cumplan las condiciones que ya he mencionado.

Para ver Netlify ya desplegado ---> [![Netlify](https://www.netlify.com/img/deploy/button.svg)](https://video-game-tracker.netlify.app/index?genero=RPG)

Se han creado ciertos issues y HU de acorde a esta parte que son:
- [HU7](https://github.com/javizzyv/VideoGameTracker/issues/21).