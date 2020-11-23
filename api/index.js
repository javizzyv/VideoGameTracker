const datos = require ('./datos')



async function Favorito() {
  return datos.datos.videojuegos[1].nombre;
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