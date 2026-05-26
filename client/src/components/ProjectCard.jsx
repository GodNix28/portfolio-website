function ProjectCard({ project }) {

    return (
        <div className="project-card">

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech-stack">

                {project.technologies.map((tech,index)=>(
                    <span key={index}>
                        {tech}
                    </span>
                ))}

            </div>

            <div className="links">

                <a
                    href={project.githubLink}
                    target="_blank"
                >
                    GitHub
                </a>

                <a
                    href={project.liveLink}
                    target="_blank"
                >
                    Live Demo
                </a>

            </div>

        </div>
    );
}

export default ProjectCard;