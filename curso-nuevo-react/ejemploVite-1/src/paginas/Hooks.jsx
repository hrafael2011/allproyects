import React from "react";
import {Link} from  'react-router-dom'


const Hooks = () => {
  return (
    <>
      <h1>Hooks</h1>
      <ul>
        <li>
            <Link to='/hooks/evento-click'>Evento Click</Link>
        </li>
        <li>
            <Link to='/hooks/hook-state'>Hook state</Link>
        </li>
        <li> 
        
          <Link to='/hooks/evento-onchange'>Evento Onchange</Link>
        </li>
        <li> 
        
          <Link to='/hooks/evento-varios'>Evento varios</Link>
        </li>
        <li>
          <Link to='/hooks/use-effect'>UseEffect</Link>
        </li>
        <li>
          <Link to='/hooks/custom-hook'>Custom Hooks</Link>
        </li>
        <li>
          <Link to='/hooks/load-data'>Use Load Data</Link>
        </li>
        <li>
          <Link to='/hooks/use-navigate'>Use Navigate</Link>
        </li>
        <li>
          <Link to='/hooks/use-location'>Use Location</Link>
        </li>
        <li>
          <Link to='/hooks/use-ref'>Use Ref</Link>
        </li>
      </ul>
    </>
  );
};

export default Hooks;


  