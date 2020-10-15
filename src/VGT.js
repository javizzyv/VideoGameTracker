var VG = require("./Videojuego");

class VGT {

    constructor() {
    }

    inicializar() {
        var vg1 = new VG.Videojuego('LoL','Juego en línea de estrategia y rol','MOBA'); 
    }

    getV(){
        return this.vg1;
    }

}

var v = new VGT();
v.inicializar

function show () {
    console.log("Aún no hay ningún videojuego");
}

show();