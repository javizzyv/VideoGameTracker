// Exporto los datos de los videojuegos
const datos = require ('./datos')


// Función para tratar peticiones
exports.handler = async function(event, context) {
    var genero = event.queryStringParameters.genero;

    // Inicializo vgs que será lo que se devuelva
    var vgs = '';

    // Bucle que busca los videojuegos que tienen como género RPG y los guarda en vgs
    for (vg in datos.datos.videojuegos){
        if(datos.datos.videojuegos[vg].genero == genero){
            if(vgs != ''){
                vgs += ', ';
            }
            vgs += datos.datos.videojuegos[vg].nombre;
        }
        
    }

    if(vgs != ''){
        vgs += '.';
    }

    if(vgs != ''){
        // Devuelvo que todo ha ido bien y los videojuegos RPG
        return {
            statusCode: 200,
            body: vgs
        };
    }
    else{
        return {
            statusCode: 404,
            body: 'No hay ningún videojuego de género ' + genero
        };
    }
}