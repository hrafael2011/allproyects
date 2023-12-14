'use strict'

function palindromo(texto){

    let textArray = texto.split("");
    let array_reverse = textArray.reverse();
    let array_string =array_reverse.join("")

    console.log(texto)
    console.log(array_string)

    if(texto == array_string){
        console.log('es un palindromo');
    }else{
        console.log('no es un palindromo');
    }
    
    
}

palindromo('reconocer');