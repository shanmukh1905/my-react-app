import React from 'react';
import styles from './SkillTag.module.css';

const SkillTag = ({ skill, index }) => {
  const colors = ['blue', 'red', 'yellow', 'green'];
  const colorClass = styles[colors[index % colors.length]];
  
  return (
    <span className={`${styles.skillTag} ${colorClass}`}>
      {skill}
    </span>
  );
};

export const SkillsList = ({ skills }) => {
  return (
    <div className={styles.skillsContainer}>
      {skills.map((skill, index) => (
        <SkillTag key={index} skill={skill} index={index} />
      ))}
    </div>
  );
};

export default SkillsList;