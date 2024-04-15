'use strict'


// REST AND SPREAD

/*
En resumen, el operador de rest se utiliza para recoger argumentos restantes en funciones, mientras que el operador de spread se utiliza para expandir expresiones iterables en 
lugares donde se esperan cero o más argumentos o elementos. Aunque ambos utilizan el mismo operador (...), tienen usos y contextos diferentes.


*/

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){ // REST me permite poner todos los paramentros que yo quiera solo poniendo los 3 puntos por delante

    console.log(fruta1)
    console.log(fruta2)
    console.log(resto_de_frutas)
}

listadoFrutas('banana,','mango', 'sandia', 'cherry', 'manzana')

let otras_frutas = ['bana', 'Mango']

listadoFrutas(...otras_frutas, 'sandia', 'cherry', 'manzana')  // SPREAD 