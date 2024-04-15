
'use strict'
// Funciones anonimas , son funcines sin nombre, para hacer call back que son funciones que se ejectutan dentor de otra

const pelicula = function(nombre){
    return `El nombre de peliculas es ${nombre}`
}

//console.log(pelicula('El señor de los anillos'))

function sumame(num1, num2, sumaYmuestra, sumaPorDos){
    let sumar = num1 + num2;
    
    
    sumaYmuestra(sumar)
    sumaPorDos(sumar)

    return sumar;

 }

 sumame(5,7, function(dato){
    console.log('La suma es:', dato)
 },
 function(dato){
    console.log('La suma por dos es:', (dato*2))
 });
