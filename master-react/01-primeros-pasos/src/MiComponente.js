
// Partes de un componente//


// Importortar mudulos de react / dependencias
    import react from "react";

// Funcion del componente
/* Se puede usar la timpica funcion ejemplo, function mi componente, pero se recomienda la tipica de flecha*/ 

const MiComponente = () =>{
    {/* para poder utilizar mas de una etiqueta devemos utilizar un div , tambien puedo usar un framgment vacio <>..</> o la etiqueta fragment*/ }
    

    {/*Datos en variables*/}
    let nombre = 'Hendrick'
    let web = 'hendrickrafaelweb.do'

    {/*Tipo objeto*/}
    let usuario = {
        nombre: 'Hendrick',
        apellidos: 'Rafael Cedano',
        web: 'hendrickrafaelweb.do'
    }

    return (

        <div>
           <p>Este es mi primer componente</p>
             <hr/>

             <h3>Datos del usuario</h3>
             <br/>
             <ul>
                <li>Nombre: {usuario.nombre}</li>
                <li>Apellidos: {usuario.apellidos}</li>
                <li>Web: {usuario.web}</li>
            </ul>

             <ul>
                <li>React</li>
                <li>Angular</li>
                <li>Vue</li>
             </ul>
        </div>
    );
};

//export

export default MiComponente




