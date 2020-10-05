## Pasos a seguir para la ejecución de la aplicación

Primero, tener en cuenta de que tenemos que tener el puerto 3000 libre, así que comprobar si hay algún proceso usándolo con `fuser -n tcp 3000` y hacer `kill pidProcesoEnUso` si hubiese alguno. Si no queremos hacer esto podemos cambiar el puerto manualmente.

Una vez comprobado esto podemos hacer uno de las siguientes comandos:

* `npm start` que en este caso funciona porque he añadido el *start* en [package.json](../package.json).
* Si no funcionase podemos ejecutar directamente la aplicación mediante `node app.js`.
* Si nada de esto funciona hacer `DEBUG=app:* npm start`.

Una vez hecho esto vamos a 'http://localhost:3000/' mediante el navegador y nos tendría que salir algo así:

![](img/pwPorDefecto.png)