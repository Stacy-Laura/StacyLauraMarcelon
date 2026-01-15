import { Link, Outlet } from "react-router";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header className="main-header">
        <nav className="nav-bar">
          <Link to="/" className="nav-link">Accueil</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/projects/1" className="nav-link">HF</Link>
          <Link to="/projects/2" className="nav-link">SolidAide</Link>
          <Link to="/projects/3" className="nav-link">Melody-Factory</Link>
        </nav>
      </header>

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
