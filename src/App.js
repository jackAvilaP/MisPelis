import { useEffect, useState } from "react";
import AddMovie from "./components/AddMovie";
import Footer from "./components/Footer";
import ListPelis from "./components/ListPelis";
import Search from "./components/Search";

function App() {
  const [list, setList] = useState([]);

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
          <li>
            <a href="/#">Inicio</a>
          </li>
          <li>
            <a href="/#">Peliculas</a>
          </li>
          <li>
            <a href="/#">Blog</a>
          </li>
          <li>
            <a href="/#">Contacto</a>
          </li>
        </ul>
      </nav>

      {/* Contenido principal */}
      <ListPelis list={list} setList={setList} />

      <aside className="side">
        <Search />
        <AddMovie setList={setList}/>
      </aside>
      <Footer />
    </div>
  );
}

export default App;
