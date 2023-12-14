

'use strict'

function porcentaje(porciento, cantidad){

    
    let resultado = (porciento*cantidad)/100;
    return resultado;

}

let cantidad = 100;
let result = porcentaje(10,cantidad);
console.log(`el porcentaje de ${cantidad} es ${result}`)

