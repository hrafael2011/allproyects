

'use strict'

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){// los tres punto indica que ese parametro puede almacenar mas frutas

    console.log('Fruta 1:', fruta1);
    console.log('Fruta 2:', fruta2);
    console.log(resto_de_frutas);
}

//listadoFrutas('Manzana', 'naranjas', 'coco', 'Peras')

var frutas = ['Jagua', 'chinola'];

listadoFrutas(...frutas, 'Naranjas', 'Peras'); // los tres punto indican quue su parametro el
