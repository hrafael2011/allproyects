
'use strict'

/*
    Que no diga si un numero es par o impar.
    1. Ventana prompt
    2. Si no es valido que nos pida de nuevo el numero

*/


var numero = parseInt(prompt('Inserte el valor: '),0);

while(isNaN(numero)){
    numero = parseInt(prompt('Inserte el valor: '),0);
}

if(numero%2==0){
    console.log('Es Par')
}else{
    console.log('Es Impar');
}