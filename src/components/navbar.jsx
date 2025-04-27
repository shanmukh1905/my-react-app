import React, { useState, useEffect } from 'react';
import styles from './navbar.module.css';

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

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <h1 className={styles.logo} onClick={() => scrollToSection('home')}>
          Portfolio
        </h1>
        
        <button 
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
        
        <div className={menuOpen ? styles.navLinksActive : styles.navLinks}>
          {navLinks.map(link => (
            <a
              key={link.id}
              className={`${styles.navLink} ${activeSection === link.id ? styles.navLinkActive : ''}`}
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
      
      {/* Add spacing element to prevent content from hiding under the navbar */}
      <div className={styles.spacer}></div>
    </>
  );
};

export default Navbar;
