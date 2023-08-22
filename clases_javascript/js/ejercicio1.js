'use strict'

var valor1 = Number(prompt('inserte el valor 1: '))
var valor2 = Number(prompt('inserte el valor 2: '))

while(valor1<=0 || valor2<=0 || isNaN(valor1) || isNaN(valor2)){
    alert('Inserte solo numeros mayores a 0')
     valor1 = Number(prompt('inserte el valor 1: '))
     valor2 = Number(prompt('inserte el valor 2: '))
     
}

if(valor1 == valor2){
    console.log('Ambos valores son iguale')
}else if(valor1>valor2){
    console.log('valor 1 es mayor que valor 2')
}else if(valor1<valor2){
    console.log('valor 1 es Menor que valor 2')
}else if(valor2>valor1){
    console.log('valor 2 es mayor que valor 1')
}else{
    console.log('no aplica')
}