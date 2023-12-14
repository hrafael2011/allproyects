'use strict'

function invierte_entero(num){

    let string_num = num.toString();
    //console.log(typeof string_num)
    let save_string = '';

    for(let n of string_num){
        save_string = n + save_string;
    }
    
    let strint_to_int = parseInt(save_string);
    console.log(`El numero inverso de ${num} es ${strint_to_int} y el tipo de dato es ${(typeof strint_to_int)}`)
}

invierte_entero(65)