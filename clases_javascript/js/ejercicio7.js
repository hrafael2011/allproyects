
'use strict'

//Tabla de multiplicar

var numero = parseInt(prompt('Inserte el numero:', 0));

console.log('Tabla del', numero)
console.log('\n')
for(var i=1; i<=numero; i++){
    console.log(numero+'x'+i+'='+(numero*i));
    
}

for(var c=1; c<=10; c++){
    console.log('Tabla del', c)
        console.log('\n')
    for(var i=1; i<=10; i++){
        console.log(c+'x'+i+'='+(c*i));
        
    }
}

