import React from "react";
import Card from '../components/Card';
import { getData } from '../utils/dataLoader';

const Experience = () => {
    const data = getData();
    const { experience, certifications } = data;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3>Work Experience</h3>
            {experience.map((exp, index) => (
                <Card
                    key={index}
                    title={exp.position}
                    subtitle={`${exp.organization} | ${exp.duration}`}
                    theme="blue" // Apply Google blue theme
                    content={
                        <div>
                            <ul style={{ paddingLeft: '20px' }}>
                                {exp.responsibilities && exp.responsibilities.map((resp, idx) => (
                                    <li key={idx}>{resp}</li>
                                ))}
                            </ul>
                        </div>
                    }
                />
            ))}
            
            <h3>Certifications</h3>
            {certifications && certifications.map((cert, index) => (
                <Card
                    key={index}
                    title={cert.name}
                    subtitle={cert.duration}
                    theme="red" // Apply Google red theme
                    content={<p>{cert.details}</p>}
                />
            ))}
        </div>
    );
};

export default Experience;