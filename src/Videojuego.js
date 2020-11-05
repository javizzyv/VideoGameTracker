class Videojuego {

    constructor(titulo, descripcion, generos, nota, valoracion, duracion) {
        this.descripcion = descripcion;
        this.titulo = titulo;
        this.generos = require("./Generos.js");
        this.generos = generos;
        this.nota = nota;
        this.valoracion = valoracion;
        this.duracion = duracion;
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

    cambiarNota(not){
        this.nota = not;
    }

    cambiarValoracion(val){
        this.valoracion = val;
    }

    cambiarDuracion(dur){
        this.duracion = dur;
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

    getNota(){
        return this.nota;
    }

    getValoracion(){
        return this.valoracion;
    }

    getDuracion(){
        return this.duracion;
    }

    show () {
        console.log("Aún no hay ningún videojuego");
    }

    aString(){
        return (this.titulo.toString() + " " + this.descripcion.toString() + " " + this.generos.toString() + " " + this.nota.toString()).toString();
    }

}

module.exports.Videojuego = Videojuego;