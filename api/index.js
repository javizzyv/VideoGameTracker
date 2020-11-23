var VG = require("./Videojuego");
var videojuegos = new Array()

async function Favorito() {
  var vgFav = new VG.Videojuego('Pokemon Platino','RPG por turnos de coleccionar monstruos',gen.mas16.RPG, 9.5, 34);
  videojuegos = new Array();
  videojuegos.push(vgFav);
  vgFav = new VG.Videojuego('Pokemon Esmeralda','RPG por turnos de coleccionar monstruos',gen.mas16.RPG, 9.5, 30);
  videojuegos.push(vgFav);
  vgFav = new VG.Videojuego('Pokemon Cristal','RPG por turnos de coleccionar monstruos',gen.mas16.RPG, 9.5, 40);
  videojuegos.push(vgFav);
  vgFav = vgt.masLargo(videojuegos);
  return vgFav.getNombre().toString();
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