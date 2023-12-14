import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import SegundoComponente from './SegundoComponente';
import TercerComponente from './TercerComponente';
import EventosComponentes from './EventosComponentes';

function App() {

  const ficha_medica = {
    estatura : 175,
    edad: 34,
    grupo_sanguineo: 'A+'
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <p> <strong>Bienvenido al master en rect</strong></p>
        </p>

      
     
      <EventosComponentes/>

        <TercerComponente 
        nombre="Hendrick"
        apellido="Rafael"
        info_med = {ficha_medica}
        
        />

        <MiComponente/>
        
        <SegundoComponente/>

        <hr/> 

        
      
      </header>
    </div>
  );
}

export default App;
