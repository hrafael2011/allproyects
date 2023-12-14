'use strict'

var edad = 75;
var imprime = ''

switch(edad){
    case 18:
        imprime='acabas de cumplir la mayoria de edad'
        console.log(imprime)
    break;
    case 25:
        imprime='Eres un adulto'
        console.log(imprime)   
    break;
    case 40:
        imprime='Tiene la fiebre de los 40'
        console.log(imprime)   
    break;
    case 75:
        imprime='Eres un anciano'
        console.log(imprime)   
    break;
    default:
        imprime = 'Tu edad es Neutra'
        console.log(imprime)
     
}
    