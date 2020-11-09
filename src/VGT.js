var VG = require("./Videojuego");
var videojuegos = new Array();

function favoritoGenero(gen, vgs){
    var genero = require("./Generos");
    var vgAux = new VG.Videojuego();
    var notaAux = 0;
    genero = gen;
    videojuegos = vgs;

    for(let i=0 ; i<videojuegos.length ; i++){
        if(videojuegos[i].getNota()>notaAux && videojuegos[i].getGeneros()==genero){
            notaAux = videojuegos[i].getNota();
            vgAux = videojuegos[i];
        }
    }
    return vgAux;
}

function compararNotas(vgs){
    videojuegos = vgs;

    if(videojuegos[0].getNota()>=videojuegos[1].getNota())
        return videojuegos[0];
    else
        return videojuegos[1];
}

/*function ordenarPorNota(vgs){

}*/

function compararDuracion(vgs){
    videojuegos = vgs;

    if(videojuegos[0].getDuracion()>=videojuegos[1].getDuracion())
        return videojuegos[0];
    else
        return videojuegos[1];
}

function masLargo(vgs){
    var vgAux = new VG.Videojuego();
    var durAux = 0;
    videojuegos = vgs;

    for(let i=0 ; i<videojuegos.length ; i++){
        if(videojuegos[i].getDuracion()>durAux){
            durAux = videojuegos[i].getDuracion();
            vgAux = videojuegos[i];
        }
    }
    return vgAux;
}

module.exports.inicializar = inicializar;
module.exports.aString = aString;
module.exports.favoritoGenero = favoritoGenero;
module.exports.compararNotas = compararNotas;
//module.exports.ordenarPorNota = ordenarPorNota;
module.exports.compararDuracion = compararDuracion;
module.exports.masLargo = masLargo;