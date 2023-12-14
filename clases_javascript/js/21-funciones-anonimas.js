'use strict'

//Funciones anonimas se utiliza para realizar callback que es una funcion que se ejecuta dentro de otra


/*//Funciones anonimas
var pelicula = function(nombre){

    return 'La pelicua es: '+ nombre
}

console.log(pelicula('Advenger'))

*/


//*************Esto es un callback *********/
/*/
function sumame(num1,num2,sumaYmuestra,sumaPorDos){
    var suma = num1+num2;
    sumaYmuestra(suma)
    sumaPorDos(suma*2)
    return suma;
}
    sumame(5,7,function(dato){
        console.log('La suma es:', dato)
},function(dato){
    console.log('La suma por dos es:', dato/2); //aplique una divicion como ejemplo que puedo hacer la operacion de ambas formas

}

)*/

//*************Esto es un callback con flechas *********/
function sumame(num1,num2,sumaYmuestra,sumaPorDos){
    var suma = num1+num2;
    sumaYmuestra(suma)
    sumaPorDos(suma*2)
    return suma;
}
    sumame(5,7,dato=>{
        console.log('La suma es:', dato)
},dato=>{
    console.log('La suma por dos es:', dato/2); //aplique una divicion como ejemplo que puedo hacer la operacion de ambas formas

}

)


