'use strict'

var formulario = document.querySelector('#form_peliculas');

formulario.addEventListener('submit',function(){
    var titulo = document.querySelector('#addpeliculas').value;

    if(titulo.length >= 1){
        localStorage.setItem(titulo, titulo);
       
    }

    var ul = document.querySelector("#pelicula-list");
    for(var i in localStorage){
        if(typeof localStorage[i] == 'string'){
            var li = document.createElement('li');
            li.append(localStorage[i]);
            ul.append(li);
    }
}


});



// Formulario para borrar elementos de localstore
var formulario_b = document.querySelector('#form_peliculas_borrar');
formulario_b.addEventListener('submit',function(){
    var titulo = document.querySelector('#borrar_pelis').value;

    if(titulo.length >= 1){
        localStorage.removeItem(titulo);
       
    }

    


});