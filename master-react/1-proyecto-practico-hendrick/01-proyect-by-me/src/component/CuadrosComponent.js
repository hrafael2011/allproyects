import React,{useState,useEffect} from "react";






const CuadrosComponent = ({estilo1, estilo2}) => {

    const [desplazada_izquierda, setDesplazadaIzquierda] = useState(false);
    const [desplazada_derecha, setDesplazadaDerecha] = useState(false);
    const [desplazada_izquierda_rojo, setDesplazadaIzquierda_rojo] = useState(false);
    const [desplazada_derecha_rojo, setDesplazadaDerecha_rojo] = useState(false);

    const DesplazarCuadro_izquierda = e =>{
        setDesplazadaIzquierda(!desplazada_izquierda)
    }

    const DesplazarCuadro_derecha = e =>{
        setDesplazadaDerecha(!desplazada_derecha)
        console.log('funcion');
    }

    const DesplazarCuadro_izquierda_rojo = e =>{
        setDesplazadaIzquierda_rojo(!desplazada_izquierda_rojo)
    }

    const DesplazarCuadro_derecha_rojo = e =>{
        setDesplazadaDerecha_rojo(!desplazada_derecha_rojo)
        
    }

    let cuadroMover ={} ;
    let cuadroMover_rojo ={} ;


    useEffect(()=>{
      alert('se movio a la derecha')
    },[desplazada_derecha])
    
   
      
    
    if(desplazada_izquierda == true){
        cuadroMover = {...estilo1.caja_verde_izquierda, left: desplazada_izquierda? '100px': '0'};
    }else if(desplazada_derecha == true){
        cuadroMover = {...estilo2.caja_verde_derecha, left: desplazada_derecha? '100px': '0'};
    }else if(desplazada_izquierda_rojo == true){
        cuadroMover_rojo = {...estilo1.caja_verde_izquierda, left: desplazada_izquierda_rojo? '100px': '0'};
    }else if(DesplazarCuadro_derecha_rojo){
        cuadroMover_rojo = {...estilo2.caja_verde_derecha, left: desplazada_derecha_rojo? '100px': '0'};
    }


   
  return (
    <div>
      <div id="container">
        <div style={cuadroMover} className="cuadro cuadro1">Cuadro 1</div>
        <div style={cuadroMover_rojo} className="cuadro cuadro2">Cuadro 2</div>
      </div>
      <div id="container2">
        <div className="button button-green">
          <input onClick={DesplazarCuadro_izquierda} type="button" value="izquierda" />
          <input onClick={DesplazarCuadro_derecha} type="button" value="Derecha" />
        </div>
        <div className="button button-red">
          <input onClick={DesplazarCuadro_izquierda_rojo} type="button" value="izquierda" />
          <input onClick={DesplazarCuadro_derecha_rojo} type="button" value="Derecha" />
        </div>
      </div>
    </div>
  );
};

/*
const styles = {
    caja_verde_izquierda:{
        position:'relative',
        transition: 'left 1s ease-out'
    },
};

const style2 = {
    caja_verde_derecha:{
        position:'relative',
        transition: 'left 1s ease-out'
    },
};*/

export default CuadrosComponent;
