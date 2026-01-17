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
import { Link, Outlet, useNavigate } from "react-router";
import { projectsData } from "./data/projectsData";
import { useState } from "react";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const [lang, setLang] = useState("en");

  const handleProjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    if (id) {
      navigate(`/projects/${id}`);
    }
  };
  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLang(e.target.value);
  };

  return (
    <div className="app-container">
      <header className="main-header">
        <nav className="nav-bar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/skills" className="nav-link">Skills</Link>


          <select className="project-dropdown" onChange={handleProjectChange} defaultValue="">
            <option value="" disabled>My Projects</option>
            {Object.entries(projectsData).map(([id, project]) => (
              <option key={id} value={id}>
                {project.title}
              </option>
            ))}
          </select>
          <select className="lang-dropdown" onChange={handleLangChange} value={lang}>
            <option value="en">🇺🇸 EN</option>
            <option value="fr">🇫🇷 FR</option>
          </select>
        </nav>
      </header>

      <main className="content">
        <Outlet context={{ lang }} />
      </main>
      <footer className="main-footer">
        <p>© 2026 Stacy Marcelon. All rights reserved.</p>
      </footer>
    </div>
  );
}
export default App;