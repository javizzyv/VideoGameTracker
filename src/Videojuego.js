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

    getNombre(){
        return this.titulo;
    }

    getDescripcion(){
        return this.descripcion;
    }

    getGeneros(){
        return this.generos;
    }

    show () {
        console.log("Aún no hay ningún videojuego");
    }

    aString(){
        return (this.titulo.toString() + " " + this.descripcion.toString() + " " + this.generos.toString()).toString();
    }

}

module.exports.Videojuego = Videojuego;