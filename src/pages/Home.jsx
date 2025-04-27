import React from 'react';
import Card from '../components/Card';
import { getData } from '../utils/dataLoader';
import styles from './Home.module.css';

const Home = () => {
  const data = getData();
  const { personalInfo, skills } = data;

  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.mainHeading}>{personalInfo.name}</h1>
      
      <Card
        title="About Me"
        content={
          <>
            <p>I'm a Computer Science student with a passion for robotics, machine learning, and embedded systems.</p>
            <div style={{ marginTop: '20px' }}>
              <h4>Technical Skills</h4>
              <div className={styles.tagSkillsContainer}>
                {skills.technical.map((skill, index) => (
                  <span key={index} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </>
        }
        footer={
          <div className={styles.contactLinks}>
            <a href={`mailto:${personalInfo.email}`}>Email Me</a>
            <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        }
      />
      
      {/* Rest of the component remains the same but would also be updated with CSS modules */}
    </div>
  );
};

export default Home;

