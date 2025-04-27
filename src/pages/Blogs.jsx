import React from 'react';
import Card from '../components/Card';
import { getData } from '../utils/dataLoader';

const Blogs = () => {
  const data = getData();
  // Create blog post topics based on skills and projects
  const blogPosts = [
    {
      id: 1,
      title: `My Journey with ${data.skills.technical[0]} Programming`,
      date: "April 20, 2025",
      excerpt: `Exploring my experiences with ${data.skills.technical[0]} and how I've applied it in my projects.`,
      imageUrl: "https://via.placeholder.com/300x200?text=Python"
    },
    {
      id: 2,
      title: data.projects[0].title,
      date: "April 15, 2025",
      excerpt: `A deep dive into the development process of ${data.projects[0].title} and the challenges I overcame.`,
      imageUrl: "https://via.placeholder.com/300x200?text=Transfer+Learning"
    },
    {
      id: 3,
      title: `Exploring ${data.relevantCoursework[0]} Applications`,
      date: "April 10, 2025",
      excerpt: `Insights into the practical applications of ${data.relevantCoursework[0]} and its future potential.`,
      imageUrl: "https://via.placeholder.com/300x200?text=Robotics"
    }
  ];

  return (
    <div>
      <p style={{ margin: '0 16px 20px' }}>
        Welcome to my blog where I share my thoughts and experiences about {data.skills.technical.slice(0, 3).join(", ")} and more.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {blogPosts.map(post => (
          <Card
            key={post.id}
            title={post.title}
            subtitle={post.date}
            content={<p>{post.excerpt}</p>}
            image={post.imageUrl}
            footer={<button>Read More</button>}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;