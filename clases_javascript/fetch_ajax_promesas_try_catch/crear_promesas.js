//Fetch(ajax) y Peticiones a servicios / apis rest

var div_usuario = document.querySelector("#usuario")
var div_janet = document.querySelector("#janet")
var div_profesor = document.querySelector("#profesor")
getUsuarios()
    .then(data => data.json()) // .then son las promesas, capturams los datos, se queda a la espera que cuando recibamos esos datos los convirtamos a json
    .then(users =>{ // esto se queda a la espera de que la informacion sea formateada, y despues de capturada hacemos lo que queramos con ella 
        listadoUsuarios(users.data);

        
        return getInfo();
    
   }).then(data => {
    div_profesor.innerHTML = data;
    return getJanet();
  })
   .then(data => data.json())
   .then(janet =>{
    mostrarJanet(janet.data)
   
   })
   .catch(error =>{
   alert('Error en la carga'); // Para capturar error.
   });
   
 




    function getUsuarios(){
        return fetch('https://reqres.in/api/users'); // accede a unos datos resmotos
    }

    function getJanet(){
        return fetch('https://reqres.in/api/users/2');
    }

    function listadoUsuarios(usuarios){

        usuarios.map((user, i)=>{ // map hace la mismma funcion que foreach
            let nombre = document.createElement('h3') 
    
            nombre.innerHTML = i +" - "+ user.first_name+" "+ user.last_name;
            div_usuario.appendChild(nombre);

            document.querySelector(".loading").style.display = 'none';
            
    
        });
    }

    function mostrarJanet(user){

       
            let nombre = document.createElement('h4');
            let avatar = document.createElement('img');
    
            nombre.innerHTML =  user.first_name+" "+ user.last_name;
            avatar.src = user.avatar;
            avatar.style.width ='100';
            avatar.style.height = '100'
            div_janet.appendChild(nombre);
            div_janet.appendChild(avatar);

            document.querySelector("#janet .loading").style.display = 'none';
            
    
        }


    function getInfo(){

        var profesor = {
            nombre: 'Hendrick',
            apellido:'Rafael',
            url: 'http://hendrickrafaelweb.do'

            };


            //crear promesas

        return new Promise((resolve, reject)=>{
            var profesor_string = "";

            setTimeout(function(){
                profesor_string = JSON.stringify(profesor);
                if(typeof profesor_string != 'string' || profesor_string == '' ) return reject('error');
                return resolve(profesor_string)

            },3000);

            
        });
       

    }
    

