const datos = require ('./datos.json')
var fs = require('fs'); 



async function Favorito() {

  fs.readFile('./datos.json', (err, data) => {
    if (err) 
      throw err;
    else 
      var obj = JSON.parse(data);
      return obj; 
  });
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