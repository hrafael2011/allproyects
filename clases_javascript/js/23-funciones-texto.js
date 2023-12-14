'use strict'

//Transformacion de texto

var numero = 444;
var texto1 = 'Bienvenido al curso de curso javascript'
var texto2 = 'Es muy buen curso';

numero.toString()// convertimo de numero a string
texto1.toUpperCase() // para converitr a mayuscula
texto1.toLowerCase() // a minuscula
texto1.length // para saber la longitud
texto1.concat(texto2) // para concatenar
texto1.indexOf('curso') // para saber la posicion de una palabra la primera coinsidencia
texto1.lastIndexOf('curso') // lo mismo que indexOf pero la ultima coinsidencia
texto1.search('cursos') // lo mismo que indexOf , pero si no aparece te dice que es -1
texto1.match('curso')
var varias_busquedas = texto1.match(/curso/g); // agregandole la barra y la g al final permite hacer una busqueda global
texto1.substring(14,5) // para que haga un subsring a partir del primer parametro, y el otro parammetro espcifica la cantidad de caracteres
texto1.charAt(43) // se usa para saber en que posicion esta un caracter
var busqueda = texto1.charAt(0);
texto1.startsWith('Bienvenido')// te dice true si lo encuentra al principio
texto1.startsWith('javascript')/// te dice true si lo encuentra al final
texto1.includes('javascript') // te dice true si encuentra exactamente la palabra
texto1.replace('javascript','simphony') // remplaza un string por otro
texto1.slice(14) // corta el texto a partir del numero de la posicion del caracter del parametro que especificaste
texto1.slice(14,22)// tambien puedo especificar el rango
texto1.split('')// convirte la cadena de texo en un array, si quiero que estan sepradas cada palabra, debo ponerle comillas
busqueda.trim()// quita la espacio sobrante por delante y por detras





console.log(texto1.includes('javascript'));



