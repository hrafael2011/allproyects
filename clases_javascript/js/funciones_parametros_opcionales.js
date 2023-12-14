

'use strict'

function calculadora(num1, num2, mostrar=false){

    //conjunto de instrucciones a ejecutar  
    if(mostrar == false){
        console.log('Suma: '+ (num1+num2));
        console.log('Resta: '+ (num1-num2));
        console.log('Multiplicacion: '+ (num1*num2));
        console.log('Division: '+ (num1/num2));
        console.log('****************************************')

    }else{
        document.write('Suma: '+ (num1+num2)+'<br>');
        document.write('Resta: '+ (num1-num2)+'<br>');
        document.write('Multiplicacion: '+ (num1*num2)+'<br>');
        document.write('Division: '+ (num1/num2)+'<br>');
        document.write('****************************************')

    }
    
    
}

// invocar la funcion
calculadora(1,10);
calculadora(1,10, true)