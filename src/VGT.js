class VGT {

    constructor(titulo, descripcion, generos) {
        var VG = require("./Videojuego");
        VG = new Videojuego(titulo, descripcion, generos);
    }


}

function show () {
    console.log("Aún no hay ningún videojuego");
}

show();