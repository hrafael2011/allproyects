'use strict'



//CONSEGUIR ELEMENTOS CON UN ID CORRECTO

// SELECTION POR ID
let caja = document.getElementById('micaja')
caja.innerHTML = 'Texto desde la caja de js' // permite cambiar el texto de js
caja.style.background ='red' // aplicar estilo de css
caja.style.color = 'white' // estilos css
caja.className = 'nueva_clase' // agregar una clase

// SELECTO OR QUERYSELECTOR
let caja1 = document.querySelector('#micaja') // se seleccionan igual que css


// funciones
function cambia_color(color){
    caja.style.background = color
}

cambia_color('green')
const cambia_colo =(colo)=>{
    caja.style.color = colo
    
}

cambia_colo('blue')



// CONSEGUIR ELEMENTOS POR SU ETIQUETA
let todosLosDivs = document.getElementsByTagName('div')

todosLosDivs[1].style.background = 'yellow'
let contenido = todosLosDivs[2].textContent // para mostrar el contenido de una etiqueta

let valor
let seccion = document.querySelector('#miSeccion')
for(valor in todosLosDivs){
    let parrafo = document.createElement('p')
    let texto = document.createTextNode(todosLosDivs[valor].textContent)
    parrafo.prepend(texto)
    seccion.append(parrafo)
    
    // prepend : agrega antes
    // append : agrega despues

}

let divRojos = document.getElementsByClassName('rojo')
divRojos[1].style.background = 'red'

for( let div in divRojos){ // tambien se puede definir la variable de esa forma pero no se recomienda
    divRojos[div].style.background = 'blue'
}

console.log(divRojos)




