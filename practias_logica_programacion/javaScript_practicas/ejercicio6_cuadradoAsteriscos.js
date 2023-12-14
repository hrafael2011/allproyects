'use strict'

function cuadradoAsteriscos(num){

    let espacio_asterisco = '*'.repeat(num-2);
    let espacio = ' '.repeat(num-2);
    for(let i=1; i<(num+1); i++){
        if(i ==1 || i == num){
            console.log('*'+espacio_asterisco+'*');
        }
        else{
            console.log('*'+espacio+'*');
        }
       
    }
 }

cuadradoAsteriscos(5)