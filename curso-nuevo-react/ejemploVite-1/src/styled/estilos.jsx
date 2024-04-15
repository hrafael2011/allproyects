import styled from '@emotion/styled' // esta es la forma de como importatamos el emotion/styled

export const Titulo = styled.h1 `
    font-size: 20px;
    text-aling: center;
    color: red;
  `

  export const Circulo = styled.div `
  background-color :red;
  color: #fff;
  text-aling:center;
  padding: 80px 0px 10px 0px;
  wiidth: 200px;
  height: 200px;
  border: 5px solid blue;
  border-radius: 60%
  
  `

  export const Trinagulo = styled.div`

    color:black;
    widht: 0;
    height:0;
    border-right: 100px solid transparent;
    border-top: 100px solid transparent;
    border-left: 100px solid transparent;
    border-bottom: 100px solid #f0ad4e;
    
    
    font-size: 30px;
    font-weight: bold;
  
  `

  export const Caja = styled.input `
    padding: 0.5em;
    margin: 0.5em;
    background: papayawhip;
    border:none;
    border-radius: 3px;
    color: ${ props => props.color_custom || 'green'  }
  
  `