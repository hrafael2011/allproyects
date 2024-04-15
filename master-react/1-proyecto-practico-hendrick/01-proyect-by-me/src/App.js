import logo from './logo.svg';
import './App.css';
import CuadrosComponent from './component/CuadrosComponent';

function App() {

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
};



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Practi
        ca html y react
        </p>

        <CuadrosComponent estilo1={styles} estilo2={style2}/>
    
        
      </header>
    </div>
  );
}

export default App;
