import { useEffect, useState } from "react";
import axios from "axios";

import ProjectCard from "../components/ProjectCard";

function Projects() {

    const [projects,setProjects] = useState([]);

    useEffect(()=>{

        axios
        .get("https://godwinnixon-portfolio.onrender.com/api/projects")

        .then((response)=>{
            setProjects(response.data);
        })

        .catch((error)=>{
            console.log(error);
        });

    },[]);

    return (

        <>
            <section className="hero">

                <h1>
                    Full Stack Developer
                </h1>

                <p>
                    I build modern web applications with
                    React, Node.js and MongoDB focused on
                    clean UI, scalable backend systems and
                    responsive user experiences.
                </p>

            </section>

            <section className="projects-section">

                <h2 className="projects-title">
                    Featured Projects
                </h2>

                <div className="projects-container">

                    {projects.map((project)=>(
                        <ProjectCard
                            key={project._id}
                            project={project}
                        />
                    ))}

                </div>

            </section>
        </>
    );
}

export default Projects;