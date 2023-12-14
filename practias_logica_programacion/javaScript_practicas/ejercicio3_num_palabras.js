
'use strict'

function num_palabras(palabra, texto){

    let save_palabras =[];
    let palabra_limpio = palabra.toLowerCase().replace(/[!.,-]/gi, '');  //gi quiere decir global idistinta si es mayuscula o mininuscla
    let array_texto_limpio = texto.toLowerCase().replace(/[!.,-]/gi, '').split(" ");

    for(let texto_array of array_texto_limpio){
       if(palabra_limpio.includes(texto_array)){
            save_palabras.push(texto_array)
       }
    }

    console.log(`la cantidad de veces que se repite es ${save_palabras.length} veces`);
}

num_palabras('Hola,', 'Hola muy buenos dias, Hola. HOLA')



