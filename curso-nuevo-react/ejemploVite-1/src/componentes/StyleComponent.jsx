import {Titulo, Circulo, Caja, Trinagulo} from './../styled/estilos'


const StyleComponent = () => {
  return (
    <>
    <Titulo>Styled Component</Titulo>
    <hr/>
    <Circulo>Circulo</Circulo>
    <hr/>
    <Trinagulo>Triangulo</Trinagulo>
    <hr/>
    <Caja type='text' defaultValue='Hendrick' placeholder='Caja' color_custom='red'/>

   </>
  )
}

export default StyleComponent
