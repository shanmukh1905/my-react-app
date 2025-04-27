import React from 'react';
import Card from '../components/Card';

const projects = [
    {
        title: 'Project One',
        description: 'A brief description of Project One.',
        link: 'https://github.com/yourusername/project-one',
    },
    {
        title: 'Project Two',
        description: 'A brief description of Project Two.',
        link: 'https://github.com/yourusername/project-two',
    },
    {
        title: 'Project Three',
        description: 'A brief description of Project Three.',
        link: 'https://github.com/yourusername/project-three',
    },
];

const Projects = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {projects.map((project, index) => (
                <Card
                    key={index}
                    title={project.title}
                    content={<p>{project.description}</p>}
                    footer={
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    }
                />
            ))}
        </div>
    );
};

export default Projects;