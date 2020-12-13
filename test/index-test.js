app = require('../src/index.js')        // app para realizar peticiones

let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);                     // uso chai con el plugin chaiHttp para las peticiones
const expect = require('chai').expect;
const url= 'http://localhost:3000';     // puerto donde se ejecuta la app



describe('Videojuegos: ',()=>{                                  // Testea que se puestren todos los videojuegos con el método GET
    it('Deberia mostrar todos los videojuegos', (done) => {
    chai.request(url)
    .get('/videojuegos')
    .end( function(err,res){
    console.log(res.body)
    expect(res).to.have.status(200);
    done();
    });
    });
});

describe('Borra un videojuego ',()=>{                           // Testea que se borre un videojuego con el método DELETE
    it('Deberia borrar un videojuego', (done) => {
    chai.request(url)
    .delete('/videojuegos/StreetFighterV')
    .end( function(err,res){
    console.log(res.body)
    expect(res).to.have.status(200);
    done();
    });
    });
});

describe('Actualiza un videojuego ',()=>{                       // Testea que se actualiza un videojuego con el método PUT
    it('Deberia actualizar un videojuego', (done) => {
    chai.request(url)
    .put('/videojuegos/PokemonCristal?duracion=200')
    .end( function(err,res){
    console.log(res.body)
    expect(res).to.have.status(200);
    done();
    });
    });
});

describe('Añade un videojuego ',()=>{                           // Testea que se añade un nuevo videojuego con el método POST
    it('Deberia añadir un videojuego', (done) => {
    chai.request(url)
    .post('/videojuegos/KingdomHearts')
    .end( function(err,res){
    console.log(res.body)
    expect(res).to.have.status(200);
    done();
    });
    });
});

describe('Enseña un videojuego ',()=>{                          // Testea que se muestra un videojuego en concreto con el método GET
    it('Deberia enseñar un videojuego en concreto', (done) => {
    chai.request(url)
    .get('/videojuegos/PokemonCristal')
    .end( function(err,res){
    console.log(res.body)
    expect(res).to.have.status(200);
    done();
    });
    });
});

after(() => {                                                   // Función que se ejecuta después del resto y que cierra el puerto de la aplicación
    app.close();
});