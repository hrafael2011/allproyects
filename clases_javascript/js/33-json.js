

'use strict'

//JSON JavaScript Object Notation

var pelicula ={

    titulo:'Batman vs Superman',
    year: 2017,
    pais: 'Estados unidos'

}

var peliculas = [

    {titulo: 'La verdad duele',year:2016, pais:'Francia'},
    pelicula
]


var caja_pelicula = document.querySelector("#peliculas");
var index;
for(index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].titulo+" - " +"Anio de extreno"+ " "+ peliculas[index].year );
    caja_pelicula.append(p);
}