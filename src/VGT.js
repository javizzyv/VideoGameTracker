import Videojuego from './Videojuego.js'

class VGT {
    
    constructor(titulo, descripcion, generos) {
        VG = new Videojuego(titulo, descripcion, generos);
        VG.show();
    }
}