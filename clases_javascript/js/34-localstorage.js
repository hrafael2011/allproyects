'use strict'



// comprobar disponibilidad del localstorage
if(typeof(Storage) != 'undefined'){
    console.log('Local Storage avaible')
}else{
    console.log('Imcopatible con Localstorage')
}

//Guardar datos
localStorage.setItem('titulo','curso de java script');

//Recuperar elemento
var storage = document.querySelector("#storage");
storage.innerHTML = localStorage.getItem("titulo")

//Guardar objetos

var usuario ={
    nombre:'hendrick Rafael',
    email: 'hendrick@gmail.com',
    web: 'hendrickrafaelweb.do'
}

localStorage.setItem("usuario", JSON.stringify(usuario)); // eso es un Json string

//Recuperar objeto
var userjs = JSON.parse(localStorage.getItem('usuario')); // parqa convertir de string a Json

console.log(userjs);
document.querySelector("#storage").append(userjs.web+" "+ userjs.nombre);

//localStorage.removeItem('titulo') // remueve un indice del localStorage
localStorage.clear() // limpia por completo el localstorage







