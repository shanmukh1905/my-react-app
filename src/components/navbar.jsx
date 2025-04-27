import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  // Navigation links
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'contact', label: 'Contact' }
  ];

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    // Call handleResize right away to set initial size
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Detect scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      // Add shadow to navbar when scrolled
      setScrolled(window.scrollY > 50);
      
      // Find which section is currently in view
      const sections = navLinks.map(link => 
        document.getElementById(link.id)
      ).filter(Boolean); // Filter out any null sections
      
      if (sections.length) {
        const currentSection = sections.find(section => {
          const rect = section.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        });
        
        if (currentSection) {
          setActiveSection(currentSection.id);
        }
      }
    };

    // Call handleScroll initially
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(id);
    setMenuOpen(false); // Close mobile menu after clicking
  };

  // Navbar styles - fixed position instead of sticky
  const navStyles = {
    position: 'fixed', // Changed from 'sticky' to 'fixed'
    top: 0,
    left: 0, // Ensure it spans from the left edge
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 20px',
    backgroundColor: 'white',
    boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
    transition: 'box-shadow 0.3s ease',
    zIndex: 1000,
    width: '100%',
    boxSizing: 'border-box'
  };

  // Logo styles
  const logoStyles = {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    margin: 0,
    cursor: 'pointer'
  };

  // Navigation links container
  const navLinksContainerStyles = {
    display: windowWidth > 768 || menuOpen ? 'flex' : 'none',
    flexDirection: windowWidth <= 768 ? 'column' : 'row',
    position: windowWidth <= 768 ? 'absolute' : 'static',
    top: windowWidth <= 768 ? '60px' : 'auto',
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: windowWidth <= 768 ? '20px' : 0,
    boxShadow: windowWidth <= 768 && menuOpen ? '0 5px 10px rgba(0,0,0,0.1)' : 'none',
    alignItems: windowWidth <= 768 ? 'flex-start' : 'center'
  };

  // Individual nav link style
  const navLinkStyle = (isActive) => ({
    margin: windowWidth <= 768 ? '10px 0' : '0 15px',
    padding: '5px 0',
    color: isActive ? '#007bff' : '#333',
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: 'none',
    borderBottom: isActive ? '2px solid #007bff' : '2px solid transparent',
    transition: 'all 0.2s ease',
    cursor: 'pointer'
  });

  // Hamburger menu style
  const hamburgerStyles = {
    display: windowWidth <= 768 ? 'block' : 'none',
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: '5px'
  };

  return (
    <>
      <nav style={navStyles}>
        <h1 style={logoStyles} onClick={() => scrollToSection('home')}>
          Portfolio
        </h1>
        
        <button 
          style={hamburgerStyles} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
        
        <div style={navLinksContainerStyles}>
          {navLinks.map(link => (
            <a
              key={link.id}
              style={navLinkStyle(activeSection === link.id)}
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
      
      {/* Add spacing element to prevent content from hiding under the navbar */}
      <div style={{ height: '70px' }}></div>
    </>
  );
};

export default Navbar;
