import AddMovie from "./components/AddMovie";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Search from "./components/Search";


function App() {
  let items = localStorage.getItem("peliculas");
  console.log(JSON.stringify(items))
  return (
    <div className="layout">
      {/* Cabecera */}
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>
        <h1>MisPelis</h1>
      </header>
      {/* */}
      <nav className="nav">
        <ul>
          <li><a href="/#">Inicio</a></li>
          <li><a href="/#">Peliculas</a></li>
          <li><a href="/#">Blog</a></li>
          <li><a href="/#">Contacto</a></li>
        </ul>
      </nav>

      {/* Contenido principal */}
      <section className="content">
        {/* van las peliculas */}

        <Card />
      </section>

      <aside className="side">
        <Search />
        <AddMovie />
      </aside>
      <Footer />
    </div>
  );
}

export default App;
