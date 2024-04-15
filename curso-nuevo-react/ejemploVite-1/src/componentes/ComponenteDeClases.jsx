import React from "react";

export default class ComponeteDeclases extends React.Component{

    constructor(props)
    {
        super();
        this.state = {

            contador :0,
            nombre : 'Javier'
        }
    }

    render(){
        return(
            <>
                <h1>Hoa soy un componente de clases</h1>
                <p>{this.state.contador}</p>
                <p>{this.state.nombre}</p>
            </>
        )
    }
}