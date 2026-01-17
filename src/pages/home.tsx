/*
    By Stacy
  ______                       _                    _          _             
 / _____) _                   ( )                  | |        (_)  _         
( (____ _| |_ _____  ____ _   |/ ___    _ _ _ _____| |__   ___ _ _| |_ _____ 
 \____ (_   _|____ |/ ___) | | |/___)  | | | | ___ |  _ \ /___) (_   _) ___ |
 _____) )| |_/ ___ ( (___| |_| |___ |  | | | | ____| |_) )___ | | | |_| ____|
(______/  \__)_____|\____)\__  (___/    \___/|_____)____/(___/|_|  \__)_____)
                         (____/                                              
                                             
    Creation date: 15 January 2026
    Last modification date: 16 January 2026
*/
import portrait from "../assets/img_0640.jpg";
import "../App.css";
function Home() {
    const creationDate = "15 January 2026";
    const lastModificationDate = "17 January 2026";

    return (
        <div>
            <h1>Welcome to Stacy's website</h1>
            <img className="portrait-stacy" src={portrait} alt="Stacy Marcelon" />
            <p>
                Namaste ! My name is Stacy, a passionate developer and music enthusiast. <br />
                This website is a space where I share my projects, thoughts, and musical creations. <br />
                Feel free to explore and connect with me through the contact page!
            </p>

            <footer className="home-footer" style={{ marginTop: '60px', textAlign: 'center', whiteSpace: 'pre', fontFamily: 'monospace', color: '#666' }}>
                {`
  By Stacy
  ______                       _                    _          _             
 / _____) _                   ( )                  | |        (_)  _         
( (____ _| |_ _____  ____ _   |/ ___    _ _ _ _____| |__   ___ _ _| |_ _____ 
 \\____ (_   _|____ |/ ___) | | |/___)  | | | | ___ |  _ \\ /___) (_   _) ___ |
 _____) )| |_/ ___ ( (___| |_| |___ |  | | | | ____| |_) )___ | | | |_| ____|
(______/  \\__)_____)|____)|__  (___/    \\___/|_____)____/(___/|_|  \\__)_____)
                         (____/                                              
`}
                <p>
                    <strong>Creation date:</strong> {creationDate}<br />
                    <strong>Last modification date:</strong> {lastModificationDate}
                </p>
            </footer>
        </div>
    );
}

export default Home;