import React from 'react';
import Card from '../components/Card';

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      
      <Card
        title="About Me"
        content={
          <p>I specialize in web development with a focus on React. 
             I love building innovative and impactful solutions.</p>
        }
        footer={
          <a href="#experience">Learn More</a>
        }
      />
    </div>
  );
};

export default Home;
