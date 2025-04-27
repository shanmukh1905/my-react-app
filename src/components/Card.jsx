import React from 'react';
import styles from './Card.module.css';

// theme can be 'blue', 'red', 'yellow', 'green' or undefined (default)
// layout can be 'horizontal' or undefined (default)
const Card = ({ title, subtitle, content, footer, image, theme, layout }) => {
  // Determine class names based on theme and layout
  const cardClasses = [
    styles.card,
    theme === 'blue' && styles.blueCard,
    theme === 'red' && styles.redCard,
    theme === 'yellow' && styles.yellowCard,
    theme === 'green' && styles.greenCard,
    layout === 'horizontal' && styles.horizontalCard
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses}>
      {image && (
        <div className={styles.imageContainer}>
          <img 
            src={image} 
            alt={title || 'Card image'} 
            className={styles.image} 
          />
        </div>
      )}
      <div className={styles.content}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {subtitle && <h4 className={styles.subtitle}>{subtitle}</h4>}
        {content && <div>{content}</div>}
        {footer && (
          <div className={styles.footer}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;