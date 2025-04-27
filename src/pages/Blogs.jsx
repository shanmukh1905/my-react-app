import React from 'react';
import Card from '../components/Card';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React",
      date: "April 20, 2025",
      excerpt: "Learn the fundamentals of React and how to build your first application.",
      imageUrl: "https://via.placeholder.com/300x200"
    },
    {
      id: 2,
      title: "Understanding React Hooks",
      date: "April 15, 2025",
      excerpt: "Dive deep into React Hooks and how they can simplify your component logic.",
      imageUrl: "https://via.placeholder.com/300x200"
    },
    {
      id: 3,
      title: "Building Responsive UIs with React",
      date: "April 10, 2025",
      excerpt: "Tips and tricks for creating responsive user interfaces with React.",
      imageUrl: "https://via.placeholder.com/300x200"
    }
  ];

  return (
    <div>
      <p style={{ margin: '0 16px 20px' }}>
        Welcome to my blog where I share my thoughts and experiences about web development.
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