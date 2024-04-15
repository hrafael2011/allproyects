import Buscador from "./component/Buscador";
import Crear from "./component/Crear";
import Listado from "./component/Listado";


function App() {
  return (
    <div className="layout">
    {/*cabezera*/}
    <header className="header">
        <div className="logo">
            <div className="play"></div>
        </div>
        <h1>misPelis</h1>
    </header>

    {/*Barra de navegacion*/}
    <nav className="nav">
        <ul>
            <li><a href="/#">Inicio</a></li>
            <li><a href="/#">Peliculas</a></li>
            <li><a href="/#">Blog</a></li>
            <li><a href="/#">Contacto</a></li>

        </ul>
    </nav>

    {/*Contenido Principal*/}

    <section className="content">
        {/*aqui van las peliculas*/}
       <Listado/>
    </section>

    {/*Barra Lateral*/}
    <aside className="lateral">
       <Buscador/>
        <Crear/>
    </aside>

    {/*Pie de pagina*/}
    <footer className="footer">
        &copy; Master en JavaScript
    </footer>
</div>

  );
}

export default App;
