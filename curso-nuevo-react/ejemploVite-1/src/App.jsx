


import Parser from 'html-react-parser' // libreria parser ara que clase2 pueda ser rederizada ya que no e puede or la comillas lo mismo que hace dangerouslySetInnerHTML
import App1 from './componentes/App1'
import ComponeteDeclases from './componentes/ComponenteDeClases'
import ComonenteFuncional1 from './componentes/ComonenteFuncional1'
import StyleComponent from './componentes/StyleComponent'

function App() {
  
  


  let nombre = <h2> Hendrick Rafael en estudio</h2>
  let nombre_2 = '<h2> Hendrick Rafael en estudio</h2>'
  return (
    <>
      {/*<h1 className="class-roja">Hola Mundo</h1>
      <p> <i> {nombre}</i></p>
      <div className="azul" dangerouslySetInnerHTML={{__html: nombre_2}}></div> 
      {Parser(nombre_2)}

      <App1/>
    <ComponeteDeclases/>
    <ComonenteFuncional1/>*/}
    
    <StyleComponent/>
      
    </>
  )
}

export default App
