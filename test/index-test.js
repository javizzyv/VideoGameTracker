app = require('../src/index.js')

let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = require('chai').expect;
const url= 'http://localhost:3000';



describe('Videojuegos: ',()=>{
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

describe('Borra un videojuego ',()=>{
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

describe('Actualiza un videojuego ',()=>{
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

describe('Añade un videojuego ',()=>{
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

describe('Enseña un videojuego ',()=>{
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

after(() => {
    app.close();
});