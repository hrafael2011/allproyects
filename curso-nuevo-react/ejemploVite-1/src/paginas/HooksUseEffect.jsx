import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HooksUseEffect = () => {
  let [arreglo, setArreglo] = useState([]);
  const [marcador, setmarcador] = useState(0);

  useEffect(() => {
    return () => {
      setArreglo([
        {
          id: 1,
          nombre: "Cesar Cancin",
          corre: "info@gmail.com",
        },
        {
          id: 2,
          nombre: "Yelimar Diaz",
          correo: "mariana@gmail.com",
        },
      ]);
    };
  }, [marcador]);

  const ShowArray=()=>{
    setmarcador(1);
  }
  const HiddenArray = ()=>{
    setmarcador(0)
  }
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">
            <Link to="/hooks">Hooks</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            useEffect
          </li>
        </ol>
      </nav>
      <hr />
      <h3>useEffect</h3>

      {marcador == 1 && (
        <>
          <hr />
          <ul>
            {arreglo.map((item) => (
              <li key={item.id}>
                Nombre: {item.nombre}
                <br />
                Email: {item.correo}
              </li>
            ))}
          </ul>
        </>
      )}
      <hr />
      <button className="btn btn-success" onClick={()=>{ShowArray()}}>Mostrar</button>
      <hr />
      <button className="btn btn-danger" onClick={()=>{HiddenArray()}}>Ocultar</button>
    </>
  );
};

export default HooksUseEffect;
