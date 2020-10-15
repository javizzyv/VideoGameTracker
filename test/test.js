var assert = require('assert');
var vg = require('../src/Videojuego');
var vgt = require('../src/VGT');
var gen = require('../src/Generos');

describe('ComprobarGenero', function(){
    it('Comprueba que la clase Generos funciona correctamente como un enum', function(){
        assert.equal(gen.mas16.MOB,"MOBA","El formato de los Generos es correcto");
    });
});

describe('CreaVideojuego', function(){
    it('comprueba que se crea el videojuego correctamente', function(){
        var vgPrueba = new vg.Videojuego('LoL','Juego en línea de estrategia y rol',gen.mas16.MOB);
        assert.equal(vgPrueba.aString(),"LoL Juego en línea de estrategia y rol MOBA","Videojuego creado correctamente");
    });
});