
'use strict'

function calculadora(num1, num2){

    //conjunto de instrucciones a ejecutar  
    console.log('Suma: '+ (num1+num2));
    console.log('Resta: '+ (num1-num2));
    console.log('Multiplicacion: '+ (num1*num2));
    console.log('Division: '+ (num1/num2));
    console.log('****************************************')
}

// invocar la funcion

for(var i=1; i<=10; i++){
    console.log(i+'.')
    calculadora(i,5);
}