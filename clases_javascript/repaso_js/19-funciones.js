'use strict'

// Funciones

function calculadora(num1, num2){
    console.log('suma: ' + Number(num1+num2))
    console.log('resta: ' + Number(num1 - num2))
    console.log('multi: ' + Number(num1*num2))
    console.log('divi: ' + parseFloat(num1/num2))
}

for(let i =1 ; i<=10 ; i++){
    console.log(i)
    calculadora(i,1)
}

