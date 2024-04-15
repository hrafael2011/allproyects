'use strict'

//tranformacion de textos

let numero = 444
let texto = 'Bienvenido al curso  curso de javascript'
let texto2 = 'es un buen curso'


// de numero a string
let dato = numero.toString();
console.log(typeof dato);

// text transformation
let text = texto.toUpperCase() // Mayusculas
console.log(text)
text = texto.toLowerCase() // Mininisculas
console.log(text)


//Logitud de un texto

let longitud = texto.length
console.log(longitud)


// Concatenar
let unir_textos = texto+''+texto2
console.log(unir_textos)
console.log(texto.concat(texto2))


/// Busqueda

let busqueda = texto.indexOf('curso'); // dira el numero de caracter donde empieza la palabra curso
console.log(busqueda)

busqueda = texto.lastIndexOf('curso'); // dira el numero de caracter donde empieza la palabra curso
console.log(busqueda)

busqueda = texto.search('curso'); // lo mismo que indexOf
console.log(busqueda)

busqueda = texto.match('curso') // un arry me dice en que posicion esta y mas informacion sobre el texto
console.log(busqueda)

busqueda = texto.match(/curso/g) //la G significa global , se hace de esta forma cuando hay mas de una concidencia
console.log(busqueda)

busqueda = texto.substr(14,8) // este lo que hace que extrae texto a partir del numero que pongas y el segundo parametro indica , la cantidad de caracteres que se van a extraer
console.log(busqueda)

busqueda = texto.charAt(21)
console.log(busqueda)

busqueda = texto.includes('javascript')
console.log(busqueda)


// remplacer texto

busqueda = texto.replace('javascript', 'Simphony') /// remplaza texto  el primer parametro por el segundo
console.log(busqueda)


// cortar texto

busqueda = texto.slice(14) // cortara los primeros caracteres indicado en el metodo, tambien puedo hacer rango poniendo otro parametro
console.log(busqueda)

busqueda = texto.split(' ') // lo convierte en array
console.log(busqueda)

busqueda = texto.trim() // quita los espacios tanto por delante como por detras
console.log(busqueda)

