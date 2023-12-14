

'use strict'

function invertir_caracteres(palabra){

    let guardar_palabras = '';
    
    for(let world of palabra){

        guardar_palabras = world + guardar_palabras
    }

    console.log(guardar_palabras);


}

invertir_caracteres('Hola')
