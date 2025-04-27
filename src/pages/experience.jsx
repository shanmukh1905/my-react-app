import React from "react";
import Card from '../components/Card';

const experiences = [
    {
        title: "Software Engineer",
        company: "Tech Corp",
        duration: "Jan 2020 - Present",
        description: "Developed and maintained web applications using React and Node.js.",
    },
    {
        title: "Frontend Developer",
        company: "Web Solutions",
        duration: "Jun 2018 - Dec 2019",
        description: "Created responsive UI components and optimized website performance.",
    },
    {
        title: "Intern",
        company: "Startup Inc.",
        duration: "Jan 2018 - May 2018",
        description: "Assisted in building prototypes and testing web applications.",
    },
];

const Experience = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {experiences.map((exp, index) => (
                <Card
                    key={index}
                    title={exp.title}
                    subtitle={`${exp.company} | ${exp.duration}`}
                    content={<p>{exp.description}</p>}
                />
            ))}
        </div>
    );
};

export default Experience;