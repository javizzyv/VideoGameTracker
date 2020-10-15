var assert = require('assert');
var vg = require('../src/Videojuego');
var vgt = require('../src/VGT');
var gen = require('../src/Generos');

describe('CreaVideojuego', function(){
    it('comprueba que se crea el videojuego correctamente', function(){
        var vgPrueba = new vg.Videojuego('LoL','Juego en línea de estrategia y rol',gen.mas16.MOB);
        assert.equal(vgPrueba.aString(),"LoL Juego en línea de estrategia y rol MOBA","Videojuego creado correctamente");
    });
});