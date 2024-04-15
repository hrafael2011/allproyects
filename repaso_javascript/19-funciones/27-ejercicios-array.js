'use striict'

/*
1. Pida 6 numeros por pantall y los meta en un array
2. mostrar el array entero (tods sus elementos) en el cuero de la paagina y en la consola
3. Sacar el array ordenado y mostrarlo
4. Invertir su orden y motrarlo
5. Mostar cuantos elementos tiene el array
6. Realizar una busqueda introducida por el usuario, y que nos diga su indice

*/



//1. Pida 6 numeros por pantall y los meta en un array
const valores_array =()=>{
let contador = 0
let num_arr = []

while(contador<6){
    contador++
    let valores = parseInt(prompt('Indroduzca el valor'))
    num_arr.push(valores)
} 


console.log(num_arr)

//2. mostrar el array entero (tods sus elementos) en el cuero de la paagina y en la consola
document.write('<h1>Arrays</h1>')
document.write(`<h2>${num_arr}</h2>`)


//3. Sacar el array ordenado y mostrarlo
let num_ordenado = num_arr.sort()
console.log(num_ordenado)

//4. Invertir su orden y motrarlo
console.log(num_ordenado.reverse())

//5. Mostar cuantos elementos tiene el array

console.log(num_arr.length)

//6. Realizar una busqueda introducida por el usuario, y que nos diga su indice
let busqueda = parseInt(prompt('Introduce el numero', 0))

const busque = num_arr.findIndex((num)=>num == busqueda)
print(busque)

}

valores_array()