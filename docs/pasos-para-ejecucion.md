## Pasos a seguir para la ejecución de la aplicación

Primero, debemos situarnos en el directorio principal, a continuación:

Seguimos estos pasos:

* `npm start` que en este caso funciona porque he añadido el *start* en [package.json](../package.json).
* Si no funcionase o queramos otro método podemos ejecutar directamente la aplicación mediante `node src/VGT.js`.
* Si nada de esto funciona hacer `npm clean --force` y `npm install`.

Para ejecutar los test (Mocha):
* Simplemente `npm test`.

Para ejecutar Gulp (herramienta de construcción):
* Ejecutamos `npm install --global gulp-cli` para tener la orden `gulp` en la línea de órdenes.
* Ahora sí, ejecutamos `gulp`.