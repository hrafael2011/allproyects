import React, { useState } from "react";

const FormularioComponent = () => {
  const [usuario, setUsuario] = useState({});

  const EnviarInfoUsuario = (e) => {
    e.preventDefault();

    let datos = e.target;
    let usuario = {
      nombre: datos.nombre.value,
      apellido: datos.apellido.value,
      genero: datos.genero.value,
      bio: datos.bio.value,
    };

    console.log(usuario);
    setUsuario(usuario);
  };

  return (
    <div>
      <h2>Formulario Component</h2>

      {usuario.bio && usuario.bio.length >= 1 && (
        <div className="label">

        
          <p>{` Nombre: ${usuario.nombre}`}</p>
          <p>{` Apellido: ${usuario.apellido}`}</p>
          <p>{` Genero: ${usuario.genero}`}</p>
          <p>{`Bio: ${usuario.bio}`}</p>
          
        </div>
      )
      }

      <form onSubmit={EnviarInfoUsuario}>
        <input type="text" placeholder="Nombre" name="nombre" />
        <input type="text" placeholder="Apellido" name="apellido" />
        <select id="select" name="genero">
          <option value="">Seleccinar..</option>
          <option value="Hombre">Hombre</option>
          <option value="Mujer">Muyer</option>
        </select>
        <textarea placeholder="Bioagrafia" name="bio"></textarea>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default FormularioComponent;
