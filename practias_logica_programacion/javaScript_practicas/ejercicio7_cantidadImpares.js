
'use strict'


function cantidad_impares(num1,num2){

    let save_array = []
    for(let i =num1; i<(num2+1); i++){
        if(i%2 != 0){
            save_array.push(i)
        }
    }
    console.log(`la cantidad de impares que hay entre ${num1} y ${num2} es ${save_array.length}`)
}

cantidad_impares(1,10)