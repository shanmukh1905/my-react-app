import React from 'react';

const Card = ({ title, subtitle, content, footer, image }) => {
  return (
    <div style={{ 
      border: '1px solid #ddd', 
      borderRadius: '8px',
      margin: '16px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {image && (
        <div>
          <img 
            src={image} 
            alt={title} 
            style={{ width: '100%', height: 'auto' }} 
          />
        </div>
      )}
      <div style={{ padding: '16px' }}>
        {title && <h3 style={{ marginTop: '0' }}>{title}</h3>}
        {subtitle && <h4 style={{ color: '#666' }}>{subtitle}</h4>}
        {content && <div>{content}</div>}
        {footer && (
          <div style={{ 
            marginTop: '16px', 
            paddingTop: '16px', 
            borderTop: '1px solid #eee',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;