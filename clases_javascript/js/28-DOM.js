"use strict"

function CambiarColor(color){
    caja.style.color = color
}


//var caja = document.getElementById("Micaja");
var caja = document.querySelector("#Micaja") //seleccionar DOM al estilo jquery



caja.innerHTML = "El do fue modficado";
caja.style.backgroundColor = "red";
caja.style.color = "white"
caja.className = 'clase1' // agrega una clase

CambiarColor("blue")

//*********************Seleccion de etiquetas */

var todosLosDivs = document.getElementsByTagName('div');



var valor;



for(valor in todosLosDivs) {
    if(typeof todosLosDivs[valor].textContent == 'string'){
    var parrafo = document.createElement('p');
    var texto = document.createTextNode(todosLosDivs[valor].textContent);
    parrafo.appendChild(texto);
}
}

/** con la clases es igual que con las etiquetas */

