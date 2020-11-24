// Exporto los datos de los videojuegos
const datos = require ('./datos')


// Función para tratar peticiones
exports.handler = async function(event, context) {
    // Inicializo vgs que será lo que se devuelva
    var vgs = '';

    // Bucle que busca los videojuegos que tienen como género RPG y los guarda en vgs
    for (vg in datos.datos.videojuegos){
        if(datos.datos.videojuegos[vg].genero == "RPG"){
            vgs += datos.datos.videojuegos[vg].nombre;
        }
    }

    // Devuelvo que todo ha ido bien y los videojuegos RPG
    return {
        statusCode: 200,
        body: vgs.toString()
    };
}