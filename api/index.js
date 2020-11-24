// Exporto los datos de los videojuegos
const datos = require ('./datos')

// Función asíncrona que devuelve el videojuego con más nota de los que hay en los datos
async function Favorito() {
  var auxNota = 0;
  var auxVG = '';

  for (vg in datos.datos.videojuegos){
    if(datos.datos.videojuegos[vg].terminado){
      if(datos.datos.videojuegos[vg].nota > auxNota){
        auxNota = datos.datos.videojuegos[vg].nota;
        auxVG = datos.datos.videojuegos[vg];
      }
    }
  }

  return auxVG;
}

module.exports = async (req, res) => { // Esta función se llama cuando se lanza la api
  try {
    status: 200,  // Código de que todo ha ido bien
    res.send(await Favorito()) // Llamo a la función que trabaja con los datos
  } catch (err) {
    status: 500,  // Código de que ha habido un error
    res.send(err) // Envía el error
  }
}