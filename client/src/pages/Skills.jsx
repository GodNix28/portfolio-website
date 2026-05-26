function Skills() {

    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Python",
        "C++",
        "Git",
        "GitHub",
        "Machine Learning",
        "REST APIs"
    ];

    return (

        <section className="projects-section">

            <h2 className="projects-title">
                Skills
            </h2>

            <div className="skills-container">

                {skills.map((skill,index)=>(

                    <div
                        className="skill-card"
                        key={index}
                    >
                        {skill}
                    </div>

                ))}

            </div>

        </section>
    );
}

export default Skills;