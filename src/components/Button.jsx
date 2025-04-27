import React from 'react';
import styles from './Button.module.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  rounded = false,
  disabled = false,
  onClick,
  type = 'button',
  ...props 
}) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    size === 'small' && styles.small,
    size === 'large' && styles.large,
    rounded && styles.rounded,
    disabled && styles.disabled
  ].filter(Boolean).join(' ');
  
  return (
    <button 
      className={buttonClasses} 
      onClick={onClick} 
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;