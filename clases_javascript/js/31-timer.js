'use strict'

window.addEventListener('load',function(){

    function intervalo(){
        var tiempo = setInterval(function(){  // tabmien tenemos el setTimeout, que solo se ejecuta una vez  

            console.log("Intervalo ejecutado")
                
            
        var encabezado = document.querySelector('h1');
        if(encabezado.style.fontSize == "50px"){
            encabezado.style.fontSize = "30px"
        }else{
            encabezado.style.fontSize ="50px"
        }
    
        }, 3000);
    
        return tiempo;
    }

   var tiempo = intervalo();

    var stop = document.querySelector("#parar")
    stop.addEventListener("click", ()=>{
        alert("Acabas de parar el setIntervar")
        clearInterval(tiempo);
    });

    var inicio = document.querySelector("#iniciar");
    inicio.addEventListener("click", function(){
        alert("Haz iniciado")
        intervalo();
    });

    
    
    

});