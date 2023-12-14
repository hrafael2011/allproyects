
'use strict'


/*
    Muestre todos los numeros divisores de un numero introduce en prompt
*/ 
var numero = parseInt(prompt('Introduce numero:',0))

for(var i=0; i <= numero; i++){

    if(numero%i == 0){
        document.write(i+'<br>')
    }
}