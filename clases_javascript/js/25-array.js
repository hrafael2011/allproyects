
'use strict'

var nombre = 'Hendrick Rafael'; // variable nolmar
var nombres = ["Hendrick Rafael", "Anthony Cedano", 33, true]; // un array , acepta diferentes tipos de datos

//Otra forma de definir un array es en forma de opjeto

var lenguajes = new Array("Php", "Go","Js", "Java");
/*
var info_array = parseInt(prompt("Inserte el indice: ",0))

if(lenguajes.length < 3){
    alert('Introduce un numero menor a 4')
}else{
    alert('el indice en el array es:'+" "+ lenguajes[info_array]);
}*/



document.write("<h1>lenguajes de progamacion</h1>")

document.write("<ul>")
/*
for(var i=0; i<lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>")
}*/
/*
lenguajes.forEach((elemento, indice, arr)=>{ // los dos ultimos parametros son opcionales el ultimo muestra el array original con un console log
    document.write("<li>"+indice+"-"+elemento+"</li>")

});*/

/*For in*/ 

for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>")
}

document.write("</ul>")

/*Busqueda*/

//Busca el index
var busqueda_index = lenguajes.findIndex(function(lenguaje){
    return lenguaje == "Php"
});

console.log(busqueda_index);


//Buscar el lenguaje****************
var busqueda_lenguaje = lenguajes.find(function(lenguaje){
    return lenguaje == "Php"
});

console.log(busqueda_lenguaje);

//Funcion con flecha

var busqueda_con_funcionFlecha = lenguajes.find(lenguaje=>lenguaje == "Php");

console.log(busqueda_con_funcionFlecha);


// Para comprabar si es mayor o menor, devuelve un valor booleano


var precio = [10, 20, 50, 80, 12]
var busqueda_precio = precio.some(precios=> precios >=20)
console.log(busqueda_precio)
