import React, { useEffect, useState } from "react";

const AjaxComponent = () => {
  const [usuarios, setUsuario] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [errores, SetErrores] = useState('');

  // Generico / Basico

  const getUsuariosEstaticos = () => {
    setUsuario([
      {
        id: 7,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
      },
      {
        id: 8,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
      },
      {
        id: 9,
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
      },
    ]);
  };

  const getUsuarioAjaxPms = ()=>{
    fetch('https://reqres.in/api/users?page=2')
        .then(respuesta => respuesta.json())
        .then(
            resultado_final => {
              setUsuario(resultado_final.data);
              console.log(usuarios);  
                
            },
            error =>{
                console.log(error);
            }
        );
  }

  const getUsuariosAjaxAW = async() =>{
    setTimeout(async()=>{

        try{
            const peticion = await fetch('https://reqres.in/api/users?page=2');
            const {data} = await peticion.json(); // estoy convirtiendo los datos a Json

        setUsuario(data);
        setCargando(false);
        }catch(error){
            SetErrores(error.message);
            console.log(error.message);
        }
        
    },2000);

        
  }

  useEffect(()=>{
    //getUsuariosEstaticos();
    //getUsuarioAjaxPms();
    getUsuariosAjaxAW();
  })

  if(errores !== ""){
    return (

        <div className="errores">
            {errores}
        </div>
    );
  }

 else if(cargando == true){
    return (

        <div>
            Cargando .....
        </div>
    );
  }else if(cargando == false && errores === ""){
    return (
        <div>
          <h2>Listados de usuarios via Ajax</h2>
    
          <ol>
            {
                usuarios.map(usuario=>{
                    return <li key={usuario.id}>
                        <img src={usuario.avatar} width={20}/>
                        &nbsp;
                        {usuario.first_name} {usuario.last_name}</li>
    
                })
            }
          </ol>
        </div>
      );
    };
  }

  

export default AjaxComponent;
