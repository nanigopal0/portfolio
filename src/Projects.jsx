import { FaGithub } from "react-icons/fa";
import "./Projects.css";

function Projects() {
    const projects = [
        {
            name: "Blog Application",
            link: "https://blogs-gama.vercel.app/",
            gihtubLink: "https://github.com/nanigopal0/BlogApi",
            description:
                "This is the full stack blog website that I created using React, Spring Boot, and MongoDB.\nTech stack used: Spring Boot as backend, React as frontend, MongoDB for storing user data and blog data, Github as VCS, Cloudinary for storing image, JWT token, Docker for containerization and building the docker image and deployed on Azure Container Apps.",
        },
        {
            name: "File Transfer Application",
            link: "https://file-transfer-delta.vercel.app/",
            gihtubLink: "https://github.com/nanigopal0/file-transfer-backend",
            description:
                "This is the full stack file transfer website that I created using Spring Boot, React, MySQL, third party TURN server.\nTech stack used: Spring Boot as backend, React as frontend, MYSQL for storing user data, Github as VCS, WebSocket for real time updates, WebRTC for transfering data, third party TURN server if P2P transfer not possible, STUN server to know the local ip address, Docker for containerization and building the docker image which is deployed on Azure Container Apps.",
        },
        // Add more projects as needed
    ];
    return (
        <>
            <div className="container projects-container">
                <p>Projects</p>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-title"
                            >
                                {project.name}
                            </a>
                            <a
                                href={project.gihtubLink}
                                target="_blank"
                                about="Github link"
                                rel="noopener noreferrer"
                                className="project-github-link"
                            >
                                <FaGithub/>
                            </a>
                            <p className="project-description">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Projects;
