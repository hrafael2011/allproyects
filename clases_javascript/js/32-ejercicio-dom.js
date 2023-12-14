
'use strict'
window.addEventListener('load', function(){

    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    var box2 = document.querySelector("#box2");
    box_dashed.style.display ='none';
    box2.style.display ='none';



    formulario.addEventListener('submit', function(){

        console.log('Formulario Capturado')

        //return false  /* Puedo usarlo ahi tambien para que no redireccione*/ 
        var nombre = document.querySelector("#nombre").value; // el value al final es para obtener el valor del campo
        var apellidos = document.querySelector("#apellidos").value;
        var edad = document.querySelector("#edad").value;

        if(nombre.trim() == null || nombre.trim().lenght == 0){
            alert('debe rellenar el campo nombre');
            document.querySelector("span").innerHTML = "El nombre no es valido"; // no funcina, ver porque
            return false;
        }

        if(apellidos.trim() == null || apellidos.trim().lenght == 0){
            alert('debe rellenar el campo nmbre');
            return false;
        }

        if(edad == null || edad <= 0){
            alert('debe rellenar el campo nmbre');
            return false;
        }





        box_dashed.style.display ='block';
        box2.style.display ='block';

        var datos_usuario = [nombre, apellidos, edad];
        var indice;
        for(indice in datos_usuario){
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box_dashed.append(parrafo);
        }


        /********* OTRA FORMA****** */
        var p_nombre = document.querySelector("#p_nombre span");
        var p_apellidos = document.querySelector("#p_apellidos span");
        var p_edad = document.querySelector("#p_edad span");

        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellidos;
        p_edad.innerHTML = edad;
       


    });

});