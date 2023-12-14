// Importar modulos de react/ dependencias
import react from "react";

//funcion del componente
const MiComponente = ()=> {

    //variables 
    let nombre = "Hendrick"
    let web = "hendrickrafaelweb.do"

    //Obejtos json

    let usuario = {
        nombre : "Hendrick",
        Apellidos: "Rafael",
        web : "hendrickrafaelweb.do"
    }


    //para renderizar multiples etiquetas, debemos agruparals en una caja o utilizar la etiqueta fragment(debe ser importada como muestra en el imort de react) o de forma abreviada <> </>
    return (

        <div className="mi-componente">
             <hr/>
            <h2>Componente Creado</h2>
             <p>Este es mi primer componente</p>
             <ul>
                <li>
                    react
                </li>
                <li>
                    Angular
                </li>
                <li>
                    Vue
                </li>
             </ul>
            <ul>
                <li> Nombre: <strong>{usuario.nombre}</strong></li>
                <li> Apellido: <strong>{usuario.Apellidos}</strong></li>
                <li> web: <strong>{usuario.web}</strong></li>
            </ul>
             

        </div>
   
    
    );

};


// Export

export default MiComponente;
