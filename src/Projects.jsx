import "./Projects.css";

function Projects(){
    const projects = [
        {
            name: "Blog Application",
            link: "https://blogs-gama.vercel.app/",
            description: "This is the full stack blog website that I created using React, Spring Boot, and MongoDB."
        },
        {
            name: "File Transfer Application",
            link: "https://file-transfer-delta.vercel.app/",
            description: "This is the full stack file transfer website that I created using Spring Boot, React, MySQL, third party TURN server."
        },
        // Add more projects as needed
    ];
    return(
        <>
        <div className="container projects-container">
            <p>Projects</p>
            <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-title">
                                {project.name}
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