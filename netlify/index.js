const datos = require ('./datos')


var vgs = '';

for (vg in datos.datos.videojuegos){
    if(datos.datos.videojuegos[vg].genero == "RPG"){
        vgs += datos.datos.videojuegos[vg];
    }
}
  
return vgs;