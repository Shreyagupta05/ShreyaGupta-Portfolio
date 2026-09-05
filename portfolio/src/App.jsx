import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

/**
 * Main App Component
 * Modern Interactive Portfolio Website for Shreya Gupta
 */
function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f8fafc' }}>
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Certificates />
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
