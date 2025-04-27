import React from 'react';
import Card from '../components/Card';
import SkillsList from '../components/SkillTag';
import { getData } from '../utils/dataLoader';
import styles from './Home.module.css';

const Home = () => {
  const data = getData();
  const { personalInfo, skills, education } = data;

  return (
    <div className={styles.homeContainer}>
      <div className={styles.heroSection}>
        <h1 className={styles.mainHeading}>{personalInfo.name}</h1>
        <p className={styles.subHeading}>Computer Science & Business Systems Student</p>
      </div>
      
      <Card
        theme="blue"
        title="About Me"
        content={
          <>
            <p className={styles.aboutText}>
              I'm a Computer Science student with a passion for robotics, machine learning, and embedded systems.
              Currently focused on developing innovative solutions and expanding my technical expertise.
            </p>
            
            <div className={styles.skillsSection}>
              <h3>Technical Skills</h3>
              <SkillsList skills={skills.technical} />
            </div>
            
            {skills.additional && skills.additional.length > 0 && (
              <div className={styles.skillsSection}>
                <h3>Additional Skills</h3>
                <SkillsList skills={skills.additional} />
              </div>
            )}
          </>
        }
        footer={
          <div className={styles.contactLinks}>
            <a href={`mailto:${personalInfo.email}`} className={styles.contactButton}>
              <span className={styles.contactIcon}>✉️</span>
              Email Me
            </a>
            <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className={styles.contactButton}>
              <span className={styles.contactIcon}>in</span>
              LinkedIn
            </a>
          </div>
        }
      />
      
      <Card
        theme="red"
        title="Education"
        content={
          <div className={styles.educationContainer}>
            {education.map((edu, index) => (
              <div key={index} className={styles.educationItem}>
                <div className={styles.educationHeader}>
                  <h3>{edu.degree}</h3>
                  <span className={styles.educationDuration}>{edu.duration}</span>
                </div>
                <p className={styles.institutionName}>{edu.institution}</p>
                {edu.score && <p className={styles.educationScore}>{edu.score}</p>}
              </div>
            ))}
          </div>
        }
      />
      
      <Card
        theme="yellow"
        title="Interests"
        content={
          <ul className={styles.interestsList}>
            {data.interests.map((interest, index) => (
              <li key={index} className={styles.interestItem}>{interest}</li>
            ))}
          </ul>
        }
      />
    </div>
  );
};

export default Home;

