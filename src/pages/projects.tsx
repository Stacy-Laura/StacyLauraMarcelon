import { useParams } from "react-router";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const projectsData = {
    "1": {
        title: "HF",
        repoUrl: "https://github.com/StacyAppleExtendedSolidAide/HF",
        readmeUrl: "https://raw.githubusercontent.com/StacyAppleExtendedSolidAide/HF/README.md"
    },
    "2": {
        title: "SolidAide",
        repoUrl: "https://github.com/flourdau/SolidAide",
        readmeUrl: "https://raw.githubusercontent.com/flourdau/SolidAide/main/README.md"
    },
    "3": {
        title: "Melody-Factory",
        repoUrl: "https://github.com/prescilliarosart/Melody-Factory",
        readmeUrl: "https://raw.githubusercontent.com/prescilliarosart/Melody-Factory/main/README.md"
    }
};

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
                    if (!res.ok) throw new Error("README introuvable");
                    return res.text();
                })
                .then((data) => setMarkdown(data))
                .catch((_err) => setMarkdown("Impossible de charger le README pour le moment."))
                .finally(() => setLoading(false));
        }
    }, [id, project]); // On recharge si l'ID change

    if (!project) return <div>Projet introuvable</div>;

    return (
        <div className="project-container" style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
            <h1>{project.title}</h1>
            <a href={project.repoUrl} target="_blank" rel="noreferrer">Voir sur GitHub</a>

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