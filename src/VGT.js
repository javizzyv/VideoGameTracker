class VGT {

    VG = require("./Videojuego.js");

    constructor(titulo, descripcion, generos) {
        VG = new Videojuego(titulo, descripcion, generos);
    }


}

function show () {
    console.log("Aún no hay ningún videojuego");
}

show();