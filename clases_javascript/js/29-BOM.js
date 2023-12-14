'use strict'

// BOM - Browser Object Model


function getBom(){
    console.log(window.innerHeight); // te dice la altura del navegador
    console.log(window.innerWidth); //  te dice la achura del nabegadro
    console.log(screen.width)//  te dice la anchura de la pantalla
    console.log(screen.height) // altura de dl apantalla
    console.log(window.location.href) // te dice en que url estas
    
}

// te redirecciona invocando esta funcion y dandole un valor
function redirect(url){
    window.location.href = url
}

//abre una pesatania
function abrirVentana(url){
    window.open(url)
}

// te abre una ventana con las especificaciones 
function abrirVentanaParametros(url){
    window.open(url,"","width=400, height=300")
}

getBom()



