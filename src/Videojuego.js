class Videojuego {

    constructor(titulo, descripcion, generos) {
        this.descripcion = descripcion;
        this.titulo = titulo;
        this.generos = require("./Generos.js");
        this.generos = generos;
    }

    cambiarNombre(nombre) {
        this.titulo = nombre;
    }

    cambiarDescripcion(descrip) {
        this.descripcion = descrip;
    }

    cambiarGeneros(gen) {
        this.generos = gen;
    }
}