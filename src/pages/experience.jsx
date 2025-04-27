import React from "react";
import Card from '../components/Card';
import { getData } from '../utils/dataLoader';
import styles from './experience.module.css';

const Experience = () => {
    const data = getData();
    const { experience, certifications } = data;

    return (
        <div className={styles.experienceContainer}>
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Work Experience</h3>
                {experience && experience.map((exp, index) => (
                    <Card
                        key={index}
                        title={exp.position}
                        subtitle={
                            <div className={styles.experienceSubtitle}>
                                <span>{exp.organization}</span>
                                <span className={styles.duration}>{exp.duration}</span>
                            </div>
                        }
                        theme="blue"
                        content={
                            <div className={styles.experienceContent}>
                                {exp.responsibilities && (
                                    <ul className={styles.responsibilitiesList}>
                                        {exp.responsibilities.map((responsibility, idx) => (
                                            <li key={idx}>{responsibility}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        }
                    />
                ))}
            </div>
            
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Certifications</h3>
                {certifications && certifications.map((cert, index) => (
                    <Card
                        key={index}
                        title={cert.name}
                        subtitle={cert.duration}
                        theme="red"
                        content={<div className={styles.certificationContent}>{cert.details}</div>}
                    />
                ))}
            </div>
        </div>
    );
};

export default Experience;