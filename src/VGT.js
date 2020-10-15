var VG = require("./Videojuego");
//var VGPrueba = require("./Videojuego");
var vg1 = new VG.Videojuego();
var generos = require("./Generos");

function inicializar() {
    vg1.cambiarNombre('LoL');
    vg1.cambiarDescripcion('Juego en línea de estrategia y rol');
    vg1.cambiarGeneros(generos.mas16.MOB);
}

function show () {
    console.log("Aún no hay ningún videojuego");
}

//show();

inicializar();

console.log(vg1.getNombre());
console.log(vg1.getDescripcion());
console.log(vg1.getGeneros());
console.log(vg1.aString());