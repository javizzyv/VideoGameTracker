
### IC

Para empezar, he configurado travis, primero porque era el que había que hacer obligatoriamente, pero también por estos motivos:
- Es gratuíto y más gracias al plan PRO de GitHub que te da la UGR que hace que no se gasten créditos.
- Detecta los push de GitHub sin necesidad de configurar nada extra.
- Se hacen las builds para cada versión del lenguaje en paralelo y, por lo tanto, tarda mucho menos.
- La sintaxis es sencilla y se puede usar el contenedor de Docker Hub sin mucho problema.

En segundo lugar he optado por Shippable (siendo CircleCi mi tercera opción) principalmente por:
- Detecta los push de GitHub sin necesidad de configurar nada extra.
- La sintaxis es sencilla.
- El plan gratuíto no va por créditos limitados.
En el resto de cosas Circle parecía mucho más prometedor (mejor interfaz y muchas más opciones), pero no me la quería jugar a gastar los créditos y tener algún problema.

Builds funcionando en cada una:
- [Travis](https://travis-ci.com/github/javizzyv/VideoGameTracker/builds/198692949)
- [Shippable](https://app.shippable.com/github/javizzyv/VideoGameTracker/runs/5/summary/console)

En caso de que no funcionen los links se pueden ver capturas aquí:

- [Travis](docs/img/build-travis-cd.png)
- [Shippable](docs/img/build-shippable-sd.png)

Los archivos de configuración están aquí:
- [Travis](/travis.yml)
- [Shippable](/shippable.yml)

La justificación de los archivos de configuración está aquí:
- [Travis](/docs/travisConf.md)
- [Shippable](/docs/shippableConf.md)

Se usan esas versiones del lenguaje por:
- Ver justificación de cada archivo de configuración arriba.


### Herramienta de construcción

En Travis se usa el contenedor de Docker que ya usaba el gestor de tareas así que lo cubre automáticamente.

En cuanto a Shippable, se instala y usa Gulp para ejecutar los test's como se puede ver haciendo click [aquí](/shippable.yml).

### Docker

Se ha optado por usar el contenedor de Docker en Travis debido a su accesibilidad y se puede ver aquí:
- [Travis](/docs/img/travis-sin-docker.png) antes sin docker.
- [Travis](/travis.yml) ahora con docker.

En principio lo iba a usar en ambos, pero ciertos errores usando la directiva ```pre_ci``` en Shippable hizo que optase finalmente por solo Travis.

### HUs relacionadas

Se han avanzado la HU3, la HU2 y la HU5 y se han realizado los test's pertinentes.
- [HU3](https://github.com/javizzyv/VideoGameTracker/issues/6)
- [HU2](https://github.com/javizzyv/VideoGameTracker/issues/5)
- [HU5](https://github.com/javizzyv/VideoGameTracker/issues/15)

