var assert = require('assert');
var vg = require('../src/Videojuego');
var vgt = require('../src/VGT');
var gen = require('../src/Generos');
var videojuegos = new Array();

describe('Comprobar Genero', function(){
    it('Comprueba que la clase Generos funciona correctamente como un enum', function(){
        assert.equal(gen.mas16.MOB,"MOBA","El formato de los Generos es correcto");
    });
});

describe('Crea Videojuego', function(){
    it('comprueba que se crea el videojuego correctamente', function(){
        var vgPrueba = new vg.Videojuego('LoL','Juego en línea de estrategia y rol',gen.mas16.MOB, 9);
        assert.equal(vgPrueba.aString(),"LoL Juego en línea de estrategia y rol MOBA 9","Videojuego creado correctamente");
    });
});

describe('Comprueba VGT', function(){
    it('Comprueba que desde la clase VGT se puede trabajar con las otras clases correctamente (modular)', function(){
        vgt.inicializar();
        assert.equal(vgt.aString(),"LoL Juego en línea de estrategia y rol MOBA 9","VGT puede usar otras clases correctamente");
    });
});

describe('Comprueba notas', function(){
    it('Comprueba que se pueden comparar notas', function(){
        var vgPrueba = new vg.Videojuego('LoL','Juego en línea de estrategia y rol',gen.mas16.MOB, 9);
        videojuegos.push(vgPrueba);
        vgPrueba = new vg.Videojuego('Pokemon','RPG por turnos de coleccionar monstruos',gen.mas16.RPG, 9.5);
        videojuegos.push(vgPrueba);
        vgPrueba = vgt.compararNotas(videojuegos);
        assert.equal(vgPrueba.aString(),"Pokemon RPG por turnos de coleccionar monstruos JuegoDeRol 9.5","Se pueden comparar notas sin problema");
    });
});

describe('Comprueba favorito', function(){
    it('Comprueba que la funcion para ver el favorito de un genero concreto funciona', function(){
        var vgPrueba = new vg.Videojuego('LoL','Juego en línea de estrategia y rol',gen.mas16.MOB, 9.5);
        videojuegos.push(vgPrueba);
        vgPrueba = new vg.Videojuego('Dota','Juego en línea de estrategia y rol',gen.mas16.MOB, 9);
        videojuegos.push(vgPrueba);
        vgPrueba = new vg.Videojuego('Smite','Juego en línea de estrategia y rol',gen.mas16.MOB, 7);
        videojuegos.push(vgPrueba);
        vgPrueba = vgt.favoritoGenero(gen.mas16.MOB,videojuegos);
        assert.equal(vgPrueba.aString(),"LoL Juego en línea de estrategia y rol MOBA 9.5","Videojuego favorito sacado con exito");
    });
});

describe('Comprueba valoracion', function(){
    it('Comprueba que se puede valorar un videojuego', function(){
        vgPrueba = new vg.Videojuego('Pokemon Perla','RPG por turnos de coleccionar monstruos',gen.mas16.RPG, 9.5);
        vgPrueba.cambiarValoracion('Esta generacion en concreto ha resultado ser de mis favoritas por el avance de los gráficos en 3D, la narrativa y la OST');
        assert.equal(vgPrueba.getValoracion().toString(),"Esta generacion en concreto ha resultado ser de mis favoritas por el avance de los gráficos en 3D, la narrativa y la OST");
    });
});

describe('Comprueba duracion', function(){
    it('Comprueba que se puede poner la duracion de un videojuego', function(){
        vgPrueba = new vg.Videojuego('Pokemon Perla','RPG por turnos de coleccionar monstruos',gen.mas16.RPG, 9.5);
        vgPrueba.cambiarDuracion(34);
        assert.equal(vgPrueba.getDuracion(),34);
    });
});

describe('Comprueba comparacion duracion', function(){
    it('Comprueba que se pueden comparar las duraciones de dos videojuegos', function(){
        var vgPrueba = new vg.Videojuego('Pokemon Platino','RPG por turnos de coleccionar monstruos',gen.mas16.RPG, 9.5, 34);
        videojuegos = new Array();
        videojuegos.push(vgPrueba);
        vgPrueba = new vg.Videojuego('Pokemon Esmeralda','RPG por turnos de coleccionar monstruos',gen.mas16.RPG, 9.5, 30);
        videojuegos.push(vgPrueba);
        vgPrueba = vgt.compararDuracion(videojuegos);
        assert.equal(vgPrueba.getNombre(),"Pokemon Platino");
    });
});

describe('Comprueba videojuego mas largo', function(){
    it('Comprueba que se puede sacar el videojuego que mas nos ha durado', function(){
        var vgPrueba = new vg.Videojuego('Pokemon Platino','RPG por turnos de coleccionar monstruos',gen.mas16.RPG, 9.5, 34);
        videojuegos = new Array();
        videojuegos.push(vgPrueba);
        vgPrueba = new vg.Videojuego('Pokemon Esmeralda','RPG por turnos de coleccionar monstruos',gen.mas16.RPG, 9.5, 30);
        videojuegos.push(vgPrueba);
        vgPrueba = new vg.Videojuego('Pokemon Cristal','RPG por turnos de coleccionar monstruos',gen.mas16.RPG, 9.5, 40);
        videojuegos.push(vgPrueba);
        vgPrueba = vgt.masLargo(videojuegos);
        assert.equal(vgPrueba.getNombre(),"Pokemon Cristal");
    });
});