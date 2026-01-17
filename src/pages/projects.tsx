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
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

/*const projectsData = {
    "1": {
        title: "HF",
        repoUrl: "https://github.com/StacyAppleExtendedSolidAide/HF.git",
        readmeUrl: "https://api.github.com/repos/StacyAppleExtendedSolidAide/HF/readme"
    },
    "2": {
        title: "SolidAide",
        repoUrl: "https://github.com/flourdau/SolidAide",
        readmeUrl: "https://api.github.com/repos/flourdau/SolidAide/readme"
    },
    "3": {
        title: "Melody-Factory",
        repoUrl: "https://github.com/prescilliarosart/Melody-Factory",
        readmeUrl: "https://api.github.com/repos/prescilliarosart/Melody-Factory/readme"
    }
};
*/
import { projectsData } from "../data/projectsData";

function Projects() {
    const { id } = useParams<{ id: string }>();
    const [markdown, setMarkdown] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);

    const project = id ? projectsData[id as keyof typeof projectsData] : null;

    useEffect(() => {
        if (project) {
            setLoading(true);
            // Appel à l'API pour récupérer le contenu du README
            fetch(project.readmeUrl)
                .then((res) => {
                    if (!res.ok) throw new Error(`Erreur HTTP: ${res.status}`);
                    return res.json();
                })
                .then((data) => {
                    // L'API GitHub retourne le contenu en base64
                    console.log("Data reçue:", data);
                    if (data.content) {
                        // Décoder le base64 en UTF-8
                        const binaryString = atob(data.content);
                        const bytes = new Uint8Array(binaryString.length);
                        for (let i = 0; i < binaryString.length; i++) {
                            bytes[i] = binaryString.charCodeAt(i);
                        }
                        const content = new TextDecoder('utf-8').decode(bytes);
                        setMarkdown(content);
                    } else {
                        setMarkdown("Impossible de charger le README pour le moment.");
                    }
                })
                .catch((err) => {
                    console.error("Erreur lors du chargement:", err);
                    setMarkdown("Impossible de charger le README pour le moment.")
                })
                .finally(() => setLoading(false));
        }
    }, [id, project]); // On recharge si l'ID change

    if (!project) return <div>Projet introuvable</div>;

    return (
        <div className="project-container" style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
            <h1>{project.title}</h1>
            <a href={project.repoUrl} target="_blank" rel="noreferrer">Voir sur GitHub</a>
            <a href={project.Url} target="_blank" rel="noreferrer" style={{ marginLeft: '1rem' }}>Live Demo</a>

            <hr style={{ margin: '2rem 0' }} />

            {loading ? (
                <p>Chargement du projet...</p>
            ) : (
                <article className="markdown-body">
                    <ReactMarkdown>{markdown}</ReactMarkdown>
                </article>
            )}
        </div>
    );
}

export default Projects;