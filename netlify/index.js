const datos = require ('./datos')

exports.handler = async function(event, context) {
    var vgs = '';

    for (vg in datos.datos.videojuegos){
        if(datos.datos.videojuegos[vg].genero == "RPG"){
            vgs += datos.datos.videojuegos[vg].nombre;
        }
    }

    return {
        statusCode: 200,
        body: JSON.stringify({message: vgs.toString()})
    };
}