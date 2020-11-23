const datos = require ('./datos')

async function Favorito() {
  var auxNota = 0;
  var auxTitulo = '';

  for (vg in datos.datos.videojuegos){
    if(datos.datos.videojuegos[vg].nota > auxNota){
      auxNota = datos.datos.videojuegos[vg].nota;
      auxTitulo = datos.datos.videojuegos[vg].nombre;
    }
  }

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