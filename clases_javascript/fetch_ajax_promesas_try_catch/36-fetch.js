'use strict'

//Fetch(ajax) y Peticiones a servicios / apis rest
var usuarios = []
var div_usuario = document.querySelector("#usuario")

fetch('https://reqres.in/api/users') // accede a unos datos resmotos
    .then(data => data.json()) // .then son las promesas, capturams los datos, se queda a la espera que cuando recibamos esos datos los convirtamos a json
    .then(users =>{ // esto se queda a la espera de que la informacion sea formateada, y despues de capturada hacemos lo que queramos con ella 
        usuarios = users.data;
        console.log(usuarios);

        usuarios.map((user, i)=>{ // map hace la mismma funcion que foreach
            let nombre = document.createElement('h3')
    
            nombre.innerHTML = i +" - "+ user.first_name+" "+ user.last_name;
            div_usuario.appendChild(nombre);

            document.querySelector(".loading").style.display = 'none';
            
    
        });

    });


    