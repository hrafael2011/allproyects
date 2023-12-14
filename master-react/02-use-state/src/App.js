import logo from './logo.svg';
import './App.css';
import MiprimerEstado from './components/MiprimerEstado';
import EjercicioComponent from './components/EjercicioComponent';
import EjercicioRamdonComponent from './components/EjercicioRamdonComponent';

function App() {
  const fecha = new Date(); // Fncion para fecha
  const yearActual = fecha.getFullYear();
  const numAleatorio = Math.floor(Math.random()*10)+1;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>El estado en React - Hook useState</h1>

      <MiprimerEstado/>
      <EjercicioComponent year={yearActual}/>
      <EjercicioRamdonComponent aleatorio={numAleatorio}/>
          

      </header>
    
    </div>
  );
}

export default App;
