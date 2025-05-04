// src/App.jsx
import React from 'react';

// Import Components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Import Global CSS - Vite handles CSS imports directly
import './index.css';

function App() {
  return (
    // Use React Fragment (<>) to avoid adding an extra div to the DOM
    <>
      <Header />
      <main> {/* Wrap sections in main for semantics */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;