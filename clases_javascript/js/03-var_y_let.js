// Ejemplo con var


var numero = 50;
console.log(numero)
if(true){
    numero = 40;
    console.log(numero)
}
console.log(numero); //el resultado es el mismo que esta dentro del if porque var es de manera global


// Ejemplo con Let


let texto = 'Desarrollo web python';
console.log(texto)
if(true){
   let texto = 'Desarrollo web con javascript';
    console.log(texto)
}
console.log(texto) //el resultado sera el primero que fue definido, porque solo habra cambio en el que esta dentro del if
.