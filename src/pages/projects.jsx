import React from 'react';
import Card from '../components/Card';
import { getData } from '../utils/dataLoader';

const Projects = () => {
    const data = getData();
    const { projects } = data;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {projects.map((project, index) => (
                <Card
                    key={index}
                    title={project.title}
                    content={
                        <div>
                            <p>{project.description}</p>
                            <ul style={{ paddingLeft: '20px' }}>
                                {project.details.map((detail, idx) => (
                                    <li key={idx}>{detail}</li>
                                ))}
                            </ul>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '15px' }}>
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} style={{ 
                                        background: '#e6f7ff', 
                                        color: '#0066cc',
                                        padding: '4px 10px', 
                                        borderRadius: '16px',
                                        fontSize: '14px'
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    }
                />
            ))}
        </div>
    );
};

export default Projects;