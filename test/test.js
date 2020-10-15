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

describe('CompruebaVGT', function(){
    it('Comprueba que desde la clase VGT se puede trabajar con las otras clases correctamente (modular)', function(){
        vgt.inicializar();
        assert.equal(vgt.aString(),"LoL Juego en línea de estrategia y rol MOBA","VGT puede usar otras clases correctamente");
    });
});