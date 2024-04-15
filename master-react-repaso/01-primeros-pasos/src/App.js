import logo from './logo.svg';
import './App.css';
import MiComonente from './MiComonente';
import SegundoComponente from './SegundoComponente';
import TercerComponente from './TercerComponente';
import EventosComponentes from './EventosComponentes';

function App() {

  let ficha_medica = {
    estatura : 187,
    edad : 34,
    grupo_sanguineo : 'a+',
    estado_salud : 'Buena'
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Bienvenido al Curso de react
        </p>
        {/* Este en mi primer componente*/}
        <EventosComponentes/>
       
        <MiComonente/>
        <SegundoComponente/>
        <TercerComponente
         nombre = 'Hendrick'
        apellido = 'Rafael'
        medica = {ficha_medica}
       />

      
       
      </header>
    </div>
  );
}

export default App;
