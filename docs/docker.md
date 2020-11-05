## Docker

Aquí se pondrá todo lo referente a Docker (Dockerfile, Docker Hub, ...)

* El Dockerfile está [aquí](/Dockerfile)
* Este es el repositorio en [Docker Hub](https://hub.docker.com/repository/docker/javizzyv/videogametracker/general)

### Explicación del contenedor base elegido

Para empezar, me he documentado de cuales son los más populares para node y cuales los más eficientes, he probado estos debido principalmente a ahorrarme problemas de compatibilidad y no he probado más porque en varios sitios recomentaban estos dos para node.

Los dos que se han probado son:

- '-slim': El contenedor base de node pero con menos herramientas y más liviano y comprimido. En este caso al principio no había problemas de compatibilidad pero al implementar el cambio de usuario de la forma en que está me hacía falta un contenedor con busybox para añadir el '-g'(gecos). Esto realmente no es un problema porque podría haber implementado el cambio de usuario de otra forma pero me gustaba esa en concreto. A parte de todo esto, el tiempo que tarda el build en esta imagen es [2 minutos](/docs/img/slim-tiempo.png) y pesa unos [60 MB](/docs/img/slim-tamanio.png).

- '-alpine': En este caso no tenía el problema de compatibilidad ni ningún otro y el tiempo de build es [1 minuto](/docs/img/alpine-tiempo.png) y el tamaño es de unos [40 MB](/docs/img/alpine-tamanio.png).

Así que mi decisión es clara, me he quedado con alpine por ser mas eficiente, liviano y tener menos problemas de compatibilidad en mi caso.

Todas las capturas haciendo click [aquí](/docs/img).

### Automatización del push GitHub-DockerHub

El proceso de automatización era simplemente un opción de Docker Hub como se ve [aquí](/docs/img/auto-Docker.png) y aún no se ha probado a usar el registro de repositorios de GitHub o Docker Hub.

Todas las capturas haciendo click [aquí](/docs/img).