# Herramientas

Se ha optado por node.js por las siguientes razones:
* Por su popularidad en empresas y de cara a aprender un nuevo lenguaje muy usado en el ámbito laboral.
* Por la existencia de múltiples herramientas que ayudan en el desarrollo con node.js.

* Como framework aún no se ha decidido que usar (no implementado).
* Como controlador de versiones se usará ***nvm***.
* Para los test se usará [Mocha](https://mochajs.org) debido a su sencillez tanto en la sintaxis como en la funciones (cosa que casa muy bien con mi aplicación ya que no es muy ambiciosa) y por su popularidad.
Los test que se han realizado hasta ahora sirven para:
  - El primero comprueba que la sintaxis y el funcionamiento de la clase [Generos](src/Generos.js) es correcta y se puede usar como enumerado sin problema.
  - El segundo comprueba que se puede crear un objeto de la clase [Videojuego](src/Videojuego.js) correctamente (para añadir videojuegos en un futuro [HU1](https://github.com/javizzyv/VideoGameTracker/issues/4)).
  - El tercero simplemente comprueba que todo esto se puede utilizar desde la clase [VGT](src/VGT.js) para ampliaciones futuras y para modularizar el código.
* Como biblioteca de aserciones no se ha usado ninguna en concreto, simplemente el módulo Assert de Node.js. En un futuro me replantearé usar Chai (por que casa muy bien con Mocha) si alguna funcionalidad lo requiere.
* Como herramienta de construcción usaré [Gulp](https://gulpjs.com) debido a su compatibilidad con Mocha y a la sencilla interfaz del cli.