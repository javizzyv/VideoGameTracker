const datos = require ('./datos.json')

async function Favorito() {
  var notaAux = 0;
  var datosJ = JSON.parse(datos);
  return datosJ['videojuegos'][1]['titulo']
}

module.exports = async (req, res) => { // this function will be launched when the API is called.
  try {
    status: 200, 
    res.send(await Favorito()) // send the lyrics
  } catch (err) {
    status: 500,
    res.send(err) // send the thrown error
  }
}