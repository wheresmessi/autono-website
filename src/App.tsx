import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './styles/colors.css';
import './styles/globals.css';

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background-dark)' }}>
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;