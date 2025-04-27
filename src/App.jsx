import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Experience from './pages/experience'
import Home from './pages/Home'
import Projects from './pages/projects'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import Navbar from './components/navbar'
import { getData } from './utils/dataLoader'
import styles from './styles/App.module.css'
import './App.css'

function App() {
  const location = useLocation();
  const data = getData();
  
  // This helps with scroll restoration between routes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Add a Google-inspired theme color cycle for sections
  const sectionThemes = ['blue', 'red', 'yellow', 'green'];

  return (
    <div className={styles.container}>
      <header>
        <Navbar />
      </header>
      
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <section id="home" className={styles.section}>
                <Home />
              </section>
              
              <section id="experience" className={`${styles.section} ${styles.blueSection}`}>
                <h2 className={styles.sectionHeading}>Experience</h2>
                <Experience />
              </section>
              
              <section id="projects" className={`${styles.section} ${styles.redSection}`}>
                <h2 className={styles.sectionHeading}>Projects</h2>
                <Projects />
              </section>
              
              <section id="blogs" className={`${styles.section} ${styles.yellowSection}`}>
                <h2 className={styles.sectionHeading}>Blogs</h2>
                <Blogs />
              </section>
              
              <section id="contact" className={`${styles.section} ${styles.greenSection}`}>
                <h2 className={styles.sectionHeading}>Contact</h2>
                <Contact />
              </section>
            </>
          } />
          {/* Add individual routes for direct navigation */}
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>© 2025 {data.personalInfo.name}'s Portfolio Website</p>
          <div className={styles.googleColorBar}>
            <div className={styles.blueBar}></div>
            <div className={styles.redBar}></div>
            <div className={styles.yellowBar}></div>
            <div className={styles.greenBar}></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App
