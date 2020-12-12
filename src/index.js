const fastify = require('fastify')({logger: true}) // Usa Pino

fastify.get('/', async (request, reply) => {        // Atiende a peticiones get al raíz
    return { aplicacion: 'VGT' }                    // Digo simplemente de que aplicación se trata
})


fastify.get('/vgt', async (request, reply) => {        
    return { aplicacion: 'VGT' }                    
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