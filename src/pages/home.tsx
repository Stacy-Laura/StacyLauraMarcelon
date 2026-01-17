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
import { useOutletContext } from "react-router";
import portrait from "../assets/img_0640.jpg";
import "../App.css";
function Home() {
    const { lang } = useOutletContext<{ lang: string }>();
    const creationDate = "15 January 2026";
    const lastModificationDate = "17 January 2026";

    const content = {
        en: {
            welcome: "Welcome to Stacy's website",
            bio: "Namaste ! My name is Stacy, a passionate developer and music enthusiast. This website is a space where I share my projects, thoughts, and musical creations.",
            cta: "Feel free to explore and connect with me through the contact page!"
        },
        fr: {
            welcome: "Bienvenue sur le site de Stacy",
            bio: "Namasté ! Je m'appelle Stacy, développeuse passionnée et amatrice de musique. Ce site est un espace où je partage mes projets, mes réflexions et mes créations musicales.",
            cta: "N'hésitez pas à explorer et à me contacter via la page dédiée !"
        }
    };

    const t = lang === "fr" ? content.fr : content.en;

    return (
        <div>
            <h1>{t.welcome}</h1>
            <img className="portrait-stacy" src={portrait} alt="Stacy Marcelon" />
            <p>
                {t.bio} <br />
                {t.cta}
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