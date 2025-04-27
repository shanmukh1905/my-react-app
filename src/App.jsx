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

  // Current year for copyright
  const currentYear = new Date().getFullYear();

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
                <div className={styles.sectionContent}>
                  <Experience />
                </div>
              </section>
              
              <section id="projects" className={`${styles.section} ${styles.redSection}`}>
                <h2 className={styles.sectionHeading}>Projects</h2>
                <div className={styles.sectionContent}>
                  <Projects />
                </div>
              </section>
              
              <section id="blogs" className={`${styles.section} ${styles.yellowSection}`}>
                <h2 className={styles.sectionHeading}>Blogs</h2>
                <div className={styles.sectionContent}>
                  <Blogs />
                </div>
              </section>
              
              <section id="contact" className={`${styles.section} ${styles.greenSection}`}>
                <h2 className={styles.sectionHeading}>Contact</h2>
                <div className={styles.sectionContent}>
                  <Contact />
                </div>
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
        <div className={styles.googleColorBar}>
          <div className={styles.blueBar}></div>
          <div className={styles.redBar}></div>
          <div className={styles.yellowBar}></div>
          <div className={styles.greenBar}></div>
        </div>
        
        <div className={styles.footerContent}>
          <div className={styles.footerGrid}>
            <div>
              <div className={styles.footerLogo}>Portfolio</div>
              <p>Computer Science student passionate about robotics, machine learning, and embedded systems.</p>
            </div>
            
            <div>
              <h4>Quick Links</h4>
              <div className={styles.footerLinks}>
                <a href="#home">Home</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#blogs">Blogs</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
            
            <div>
              <h4>Connect</h4>
              <p>Feel free to reach out for collaborations or just a friendly chat.</p>
              <div className={styles.footerSocial}>
                <a href={`mailto:${data.personalInfo.email}`} className={styles.socialIcon} aria-label="Email">
                  ✉️
                </a>
                <a href={`https://${data.personalInfo.linkedin}`} target="_blank" rel="noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                  in
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className={styles.socialIcon} aria-label="GitHub">
                  GH
                </a>
              </div>
            </div>
          </div>
          
          <div className={styles.copyright}>
            © {currentYear} {data.personalInfo.name}'s Portfolio Website
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App
