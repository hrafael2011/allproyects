import logo from './logo.svg';
import './App.css';
import PruebasComonents from './components/PruebasComonents';
import AjaxComponent from './components/AjaxComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h2>El efecto - Hook useEffect</h2>
        </p>

        <PruebasComonents/>
        <AjaxComponent/>
        
      </header>
    </div>
  );
}

export default App;
