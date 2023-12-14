
'use strict'

window.addEventListener('load', ()=>{ // se utiliza para que el documento html este cargado , independientemente si la etiqueta javascript esta abajo o arriba
    // Eventos del raton

    var boton = document.querySelector('#boton');



    function cambiarColor(){
        var bg = boton.style.background;
    
        if(bg == "green"){
            boton.style.background = "red";
        }else{

            boton.style.background = "green";
        }

        // para que aplique estos estilos de manaera global
        boton.style.padding = "10px";
        boton.style.border = "none";

        return true

    }

    var boton = document.querySelector('#boton');
    var input = document.querySelector("#text_nombre")


    // Evento click
    boton.addEventListener("click", ()=>{
        cambiarColor()
    });

    // Evento mouseover
    boton.addEventListener("mouseover", function(){
        boton.style.background ="#ccc";
    })

    // Evento mouseout
    boton.addEventListener("mouseout", function(){
        boton.style.background ="black";
    })

    // Evento Focus

    input.addEventListener("focus", function(){
        console.log("[Focus]Estoy dentro de cuadro de texto");
    })

    //Blur

    input.addEventListener("blur", function(){
        console.log("[Blur] Estoy fuera del cuadro de texto");
    });


    //Keydown

    input.addEventListener("keydown", function(event){
        console.log("[Keydown] pulsuste la tecla", String.fromCharCode(event.keyCode)); // el string se utiliza para editificar que tecla del teclado presionaste
    });

    //Keypress

    input.addEventListener('keypress', function(event){
        console.log('[Keypress] presionaste la tecla', String.fromCharCode(event.keyCode))
    });


    //Keyup
    input.addEventListener('keyup', function(event){
        console.log('[Keyup] Soltaste la tecla', String.fromCharCode(event.keyCode))
    });

});

