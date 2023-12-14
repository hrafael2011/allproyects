

'use strict'

var categorias = ['Accion', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella','Gran torino'];

var cine = [categorias, peliculas];

//console.log(cine[0][1]);
//console.log(cine[1][2]);
/*
peliculas.push('Batman'); // Se usa para agregar elemetnos

//var elemnto = prompt("Introduce una pelicula: ")

while(elemento != "Acabar"){

    var elemento = prompt("Introduce una pelicula: ")
    peliculas.push(elemento)
}
peliculas.pop()

peliculas.forEach((pelis)=>{

    document.write('<h2>'+pelis+'</h2>')
   
});*/

var cadena = "texto, texto, teto3"
var cadena_array = cadena.split(",") // para converitr de string a array
//peliculas.push("Pelicula") // agrega un elemento
//peliculas.pop() //  elimina el ultimo elemento del array
var peliculas_string  = peliculas.join() // convertir un array a string


// para borrar en elemento en concreto

var indice = peliculas.indexOf("La vida es bella");

alert(indice)

if(indice >-1){ // el meno uno quiere decir quue no la ha encontrado
    peliculas.splice(indice,1);// splice se utiliza para modificar un array, cuando un elmento halla sido eliminado o reeplazado
}

console.log(peliculas)

console.log(peliculas_string)


peliculas.sort()// lo ordena en orden alfabetico
peliculas.reverse()// orden inverso