import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Experience from './pages/experience'
import Home from './pages/Home'
import Projects from './pages/projects'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import Navbar from './components/navbar'
import './App.css'

function App() {
  const location = useLocation();
  
  // This helps with scroll restoration between routes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <header>
        <Navbar />
      </header>
      
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <section id="home" style={{ padding: '20px 0' }}>
                <Home />
              </section>
              
              <section id="experience" style={{ padding: '20px 0' }}>
                <h2>Experience</h2>
                <Experience />
              </section>
              
              <section id="projects" style={{ padding: '20px 0' }}>
                <h2>Projects</h2>
                <Projects />
              </section>
              
              <section id="blogs" style={{ padding: '20px 0' }}>
                <h2>Blogs</h2>
                <Blogs />
              </section>
              
              <section id="contact" style={{ padding: '20px 0' }}>
                <h2>Contact</h2>
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
      
      <footer style={{ textAlign: 'center', padding: '20px', marginTop: '40px' }}>
        <p>© 2025 Portfolio Website</p>
      </footer>
    </div>
  );
}

export default App
