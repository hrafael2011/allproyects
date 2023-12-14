'use strict'

/*
1. Pida 6 numeros por pantalla y los meta en un array.
2. Mostrar el array entero (todos sus elementos) en el cuero de la pagina y en la consola.
3. Ordenalo y mostrarlo.
4. Invertir su orden y mostralo
5. Mostrar cuantos elementos tiene el array.
6  Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice.



*/


// Punto numero 1 y 2

var contador = 0;
var num = 0;
var num_array = [];
while(contador <6){
    num = parseInt(prompt('Inserte un numero: '))
    contador++;
    num_array.push(num);
    
}

console.log(num_array)

num_array.forEach((numer, index) =>{
    document.write('<strong>'+numer+'</strong> </br>')
});



// punto 3

console.log('************Punto 3*******************')

num
console.log(num_array.sort())

console.log('************Punto 4*******************')

console.log(num_array.reverse())

console.log('************Punto 5*******************')

console.log(num_array.length)

console.log('************Punto 6*******************')


var busqueda = num_array.find(nums =>nums == 20);
console.log(busqueda)

var busquedaIndex = num_array.findIndex(nums =>nums == 20);
console.log(busquedaIndex)