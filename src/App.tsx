/*
    By Stacy
  ______                       _                    _          _             
 / _____) _                   ( )                  | |        (_)  _         
( (____ _| |_ _____  ____ _   |/ ___    _ _ _ _____| |__   ___ _ _| |_ _____ 
 \____ (_   _|____ |/ ___) | | |/___)  | | | | ___ |  _ \ /___) (_   _) ___ |
 _____) )| |_/ ___ ( (___| |_| |___ |  | | | | ____| |_) )___ | | | |_| ____|
(______/  \__)_____|\____)\__  (___/    \___/|_____)____/(___/|_|  \__)_____)
                         (____/                                              
                                             
    Date: 15 January 2026
*/
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
      <footer className="main-footer">
        <p>© 2026 Stacy Marcelon. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
