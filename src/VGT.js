import Videojuego from './Videojuego.js'

class VGT {
    
    constructor(titulo, descripcion, generos) {
        VG = new Videojuego(titulo, descripcion, generos);
    }

    verVideojuego() {
        this.VG.show;
    }
}

let vgt = new VGT (1,2,3);
vgt.verVideojuego();