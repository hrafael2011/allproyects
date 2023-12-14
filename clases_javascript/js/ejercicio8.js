

'use strict'


/*
    Calculadora

    -Pida dos numeros por pantalla
    -Si metemos uno mal que nos los vuelva a pedir
    -En el cuerpo de la pagina, en una alerta y por 
    la consola el resultado de sumar, restar, multiplicar y dividir esas dos cifras
*/ 

var val1 = Number(prompt('Inserte el primer valor: ',0));
var val2 = Number(prompt('Inserte el segundo valor: ',0));
var suma = val1+val2;
var resta = val1-val2;
var multiplicacion = val1*val2;
var divicion = val1/val2;



if(isNaN(val1)||isNaN(val2)){
    val1 = Number(prompt('Inserte el primer valor: ',0))
    val2 = Number(prompt('Inserte el segundo valor: ',0))
}

document.write('<h3> Suma:'+ suma+'</h3> <br>')
document.write('<h3> Resta:'+ resta+'</h3> <br>')
document.write('<h3> Multiplicacion:'+ multiplicacion+'</h3> <br>')
document.write('<h3> Divicion:'+ divicion+'</h3> <br>')


