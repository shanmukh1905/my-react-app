import { useState } from 'react'
import Experience from './pages/experience'
import Home from './pages/Home'
import Projects from './pages/projects'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import Navbar from './components/navbar'
import './App.css'

function App() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <header>
        <Navbar />
      </header>
      
      <main>
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
      </main>
      
      <footer style={{ textAlign: 'center', padding: '20px', marginTop: '40px' }}>
        <p>© 2025 Portfolio Website</p>
      </footer>
    </div>
  );
}

export default App
