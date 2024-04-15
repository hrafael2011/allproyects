'use strict'

// arrays bidimencionales

let peliculas = ['Gran torino', 'Rapido y Furiosos', 'La vida es bella']
let libros = ['Juego de tronos', 'El gran tirano', 'Cronicas de una muerte anunciada']


let pelis_libros = [peliculas, libros]

//console.log(pelis_libros)

//console.log(pelis_libros[0][1])
//console.log(pelis_libros[1][2])

//añadir elementos al array
peliculas.push('Batman')
console.log(peliculas)

//elimina el ultimo elemento de un array
peliculas.pop()

// convertir array a texto

let texto = peliculas.join()
console.log(texto)

// convertir de string a array
let texto_arr = 'texto1, texto2 texto,'
let cadena_array = texto_arr.split(',')
console.log(cadena_array)

//Ordenar arrays

peliculas.sort()
console.log(peliculas)

//invertir array
peliculas.reverse()
console.log(peliculas)


// busqueda en array

// Forma larga
const busqueda = libros.find((li)=>{
    return li == 'Juego de tronos'
})
console.log(busqueda)

//forma corta 
const busqued = libros.find((li)=> li == 'Juego de tronos')
console.log(busqued)

//forma corta con findindex
const busque = libros.findIndex((li)=> li == 'Juego de tronos')
console.log(busque)

// comparar numeros en un array que contiene numeros

let precios = [10,20,30,40,50,60,70,80]

const busque_precios = precios.some((precio)=> precio >79)
console.log(busque_precios)




