'use strict'

const fastify = require('fastify')({logger: true}) // Usa Pino
var vgt = require('../src/VGT');
var VG = require("./Videojuego");

const atributos = ['nombre','descripcion','generos','nota','duracion','valoracion']; // Establezco los atributos que se pueden cambiar

vgt.inicializarVideojuegos();                       // Inicializo los juegos

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
            nombre:videojuegos[i].getNombre(),              // Como fastify pone en formato json las respuestas directamente, no hace falta formatear
            descripcion:videojuegos[i].getDescripcion(),
            genero:videojuegos[i].getGeneros(),
            nota:videojuegos[i].getNota(),
            horas:videojuegos[i].getDuracion(),
            valoracion:videojuegos[i].getValoracion()
        });
    }

    return resultado;                   
})


fastify.get('/videojuegos/:nombre', async (request, reply) => { // Método get para ver un videojuego concreto
    var resultado = [];                                          // httpie usar el comando: http localhost:3000/videojuegos/StreetFighterV
    var videojuegos = [];
    videojuegos = vgt.getVideojuegos();
    var parametros = request.params;
    var nombre = parametros["nombre"];

    for(let i=0 ; i<videojuegos.length ; i++){
        if(videojuegos[i].getNombre().replace(/\s+/g, '') == nombre){   // Elimino los espacios en blanco para poder comparar cadenas
            resultado.push({
                nombre:videojuegos[i].getNombre(),                      // Como fastify pone en formato json las respuestas directamente, no hace falta formatear
                descripcion:videojuegos[i].getDescripcion(),
                genero:videojuegos[i].getGeneros(),
                nota:videojuegos[i].getNota(),
                horas:videojuegos[i].getDuracion(),
                valoracion:videojuegos[i].getValoracion()
            });
        }
    }

    if(resultado.length == 0){                        // Si no hay ninguno devuelvo 404, el 200 lo devolverá siempre que no pase esto así que no hace falta especificar
        reply.code(404);
        return {error: 'Not found'}
    }

    return resultado;                   
})


fastify.put('/videojuegos/:nombre', async (request, reply) => { // Método put que actualiza un videojuego existente, para probar
    var atributo;                                               // con httpie usar el comando: http PUT localhost:3000/videojuegos/StreetFighterV?atributo=x
    var parametro;
    var esta = false;
    var parametros = request.params;
    var nombre = parametros["nombre"];

    for(let i=0 ; i<atributos.length ; i++){
        if(atributos[i] in request.query){
            esta = true;
            atributo = request.query[atributos[i]];
            parametro = atributos[i];
        }
    }

    if(esta){
        var resultado = [];
        var videojuegos = [];
        videojuegos = vgt.getVideojuegos();

        for(let i=0 ; i<videojuegos.length ; i++){
            if(videojuegos[i].getNombre().replace(/\s+/g, '') == nombre){   // Elimino los espacios en blanco para poder comparar cadenas
                //'nombre','descripcion','generos','nota','duracion','valoracion'
                switch(parametro){
                    case 'nombre':
                        videojuegos[i].cambiarNombre(atributo);
                        break;
                    
                    case 'descripcion':
                        videojuegos[i].cambiarDescripcion(atributo);
                        break;
                    
                    case 'generos':
                        videojuegos[i].cambiarGeneros(atributo);
                        break;

                    case 'nota':
                        videojuegos[i].cambiarNota(atributo);
                        break;
                    
                    case 'duracion':
                        videojuegos[i].cambiarDuracion(atributo);
                        break;

                    case 'valoracion':
                        videojuegos[i].cambiarValoracion(atributo);
                        break;
                }
    
                
                resultado.push({
                    nombre:videojuegos[i].getNombre(),                      // Como fastify pone en formato json las respuestas directamente, no hace falta formatear
                    descripcion:videojuegos[i].getDescripcion(),
                    genero:videojuegos[i].getGeneros(),
                    nota:videojuegos[i].getNota(),
                    horas:videojuegos[i].getDuracion(),
                    valoracion:videojuegos[i].getValoracion()
                });
            }
        }

        if (resultado.length > 0)
            return resultado;
    }
    else
        reply.code(400);
        return {error: 'Bad Request, no es un atributo que se pueda cambiar y/o no existe'}        // Si no es un parámetro que se pueda modificar, devolvemos el código 400
})

fastify.delete('/videojuegos/:nombre', async (request, reply) => {      // Método delete para borrar un videojuego, para probar con httpie hacer:
    var videojuegos = [];                                               // http DELETE localhost:3000/videojuegos/StreetFighterV, http localhost:3000/videojuegos/StreetFighterV
    videojuegos = vgt.getVideojuegos();    
    var parametros = request.params;
    var nombre = parametros["nombre"];
    var esta = false;
    var elemento;

    for(let i=0 ; i<videojuegos.length ; i++){
        if(videojuegos[i].getNombre().replace(/\s+/g, '') == nombre){
            esta = true;
            elemento = i;
        }
    }
    
    if(esta){
        videojuegos.splice(elemento,1);
        return {success: 'Elemento eliminado'}
    }
    else{
        reply.code(404);
        return {error: 'Not found'};        // Si no existe, devolvemos el código 404
    }
})

fastify.post('/videojuegos/:nombre', async (request, reply) => {    // Método post para añadir un nuevo juego, para probar con httpie:
    var videojuegos = [];                                           // http POST localhost:3000/videojuegos/loquesea
    videojuegos = vgt.getVideojuegos();
    var parametros = request.params;
    var nombre = parametros["nombre"];
    var esta = false;

    for(let i=0 ; i<videojuegos.length ; i++){
        if(videojuegos[i].getNombre().replace(/\s+/g, '') == nombre){
            esta = true;
        }
    }

    if(esta){
        reply.code(409);
        return {error: 'Already Exists'};        // Si ya existe, devolvemos el código 409
    }
    else{
        var vgNuevo = new VG.Videojuego(nombre);
        videojuegos.push(vgNuevo);

        return 'Nuevo juego introducido con éxito';
    }
})

const start = async () => {         // Defino la función que se ejecutará para iniciar la aplicación
    try {
      await fastify.listen(3000)    // Escucho por el puerto 3000 ya que no es reservado y es el que usa fastify por defecto
    } catch (err) {
      fastify.log.error(err)        // Si ocurre algún error, guardo el log
      process.exit(1)               // y salgo
    }
}

const close = async () => {         // Defino la función que se cerrará la aplicación
    try {
      await fastify.close()         // La cierro
    } catch (err) {
      fastify.log.error(err)        // Si ocurre algún error, guardo el log
      process.exit(1)               // y salgo
    }
}

start()                             // Ejecuto la aplicación

module.export = start;
module.exports.close = close;