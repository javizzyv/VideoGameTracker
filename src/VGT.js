var VG = require("./Videojuego");
var videojuegos = new Array();
var videojuegosDB = new Array();
var gen = require('../src/Generos');

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

function ordenarPorNota(vgs){
    throw new Error("No se ha implementado");
}

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

function inicializarVideojuegos(){
    if(videojuegos.length == 0){
        var vgNuevo = new VG.Videojuego('Pokemon Cristal','RPG por turnos de coleccionar monstruos',gen.mas16.RPG, 9.5, 40,'Mi juego favorito de la saga');
        videojuegosDB.push(vgNuevo);
        var vgNuevo = new VG.Videojuego('League of Legends','Juego en línea de estrategia y rol',gen.mas16.MOB, 9.5, 2000, 'El MOBA al que mas he jugado');
        videojuegosDB.push(vgNuevo);
        var vgNuevo = new VG.Videojuego('Street Fighter V','Juego de lucha de Capcom',gen.mas16.FIG,7,100,'Una salida muy mala pero el juego es bueno ahora');
        videojuegosDB.push(vgNuevo);
    }
}

function getVideojuegos(){
    return videojuegosDB;
}

module.exports.favoritoGenero = favoritoGenero;
module.exports.compararNotas = compararNotas;
module.exports.ordenarPorNota = ordenarPorNota;
module.exports.compararDuracion = compararDuracion;
module.exports.masLargo = masLargo;
module.exports.inicializarVideojuegos = inicializarVideojuegos;
module.exports.getVideojuegos = getVideojuegos;