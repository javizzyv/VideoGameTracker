const datos = require ('./datos.json')
var fs = require('fs'); fs.readFile('./datos.json', 'utf8', function (err, data) { if (err) throw err; // we'll not consider error handling for now var obj = JSON.parse(data); });


async function Favorito() {
  var notaAux = 0;
  //var datosJ = JSON.parse(datos);
  return data;
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