

'use strict'

var media = 0;
var numero = 1
var suma = 0

while(numero > 0){
    numero = Number(prompt('Inserte un numero: '))
    media++
    suma = (suma+numero)/media
    
    console.log(suma)
    
}
