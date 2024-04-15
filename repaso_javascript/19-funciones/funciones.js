

'use strict'

// una funcion es una agrupacion reutilizable de un conjuto de instrucciones que podemos estar utilizando

function calculadora(){
    return 'Hola soy la calculadora'
}

console.log(calculadora())
console.log(calculadora())

let condicion = false
function calculadora2(num1, num2){


        let calcular = `suma: ${num1+num2}, 
        \nResta: ${num1-num2}
        \nMultiplicacion: ${num1*num2}
        \nDivicion: ${num1/num2}` 
        return calcular
   
    

}

if(condicion == true){
    console.log(calculadora2(5,5))
}else{
    document.write(calculadora2(5,5))
}








// parametros opcionales



