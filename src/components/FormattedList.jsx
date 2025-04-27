import React from 'react';
import styles from './FormattedList.module.css';

const FormattedList = ({ items, type = "bullet", color = "blue" }) => {
  return (
    <ul className={`${styles.list} ${styles[color]}`}>
      {items.map((item, index) => (
        <li key={index} className={styles.item}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default FormattedList;