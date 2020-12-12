const fastify = require('fastify')({logger: true}) // Usa Pino
var vgt = require('../src/VGT');

vgt.inicializarVideojuegos();

fastify.get('/', async (request, reply) => {        // Atiende a peticiones get al raíz
    return { aplicacion: 'VGT' }                    // Digo simplemente de que aplicación se trata
})


fastify.get('/videojuegos', async (request, reply) => { // Método get general para ver la lista completa de los videojuegos actualmente, para testear usando
    var resultado = []                                  // httpie usar el comando: http localhost:3000/videojuegos
    var videojuegos = []
    videojuegos = vgt.getVideojuegos();


    if(videojuegos.length == 0){                        // Si no hay ninguno devuelvo 404, el 200 lo devolverá siempre que no pase esto así que no hace falta especificar
        reply.code(404);
        return {error: 'Not found'}
    }

    for(let i=0 ; i<videojuegos.length ; i++){
        resultado.push({
            nombre:videojuegos[i].getNombre(),
            descripcion:videojuegos[i].getDescripcion(),
            genero:videojuegos[i].getGeneros(),
            nota:videojuegos[i].getNota(),
            horas:videojuegos[i].getDuracion(),
            valoracion:videojuegos[i].getValoracion()
        });
    }

    return resultado;                   
})
  

const start = async () => {         // Defino la función que se ejecutará para iniciar la aplicación
    try {
      await fastify.listen(3000)    // Escucho por el puerto 3000 ya que no es reservado y es el que usa fastify por defecto
    } catch (err) {
      fastify.log.error(err)        // Si ocurre algún error, guardo el log
      process.exit(1)               // y salgo
    }
}

start()                             // Ejecuto la aplicación

//module.exports = app