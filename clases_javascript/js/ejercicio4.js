

'use strict'

/*
    mostrar todos lo s numeros impares que hay entre dos numeros introducidos por el usario
*/

var num1 = parseInt(prompt('Inserta el primer numero: '))
var num2 = parseInt(prompt('Inserta el segundo numero: '))

document.write(('Del '+num1+" al "+num2+" Estan estos numeros:"))
for(var i=0; num1<=num2; i++){
    num1+=1;
    if(num1%2 && num1 < num2){
        document.write('<br>')
        document.write(num1 + '<br>')
    }
    
}