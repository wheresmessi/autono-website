import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import VehicleShowcase from './components/VehicleShowcase';
import Footer from './components/Footer';
import './styles/colors.css';

function App() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <Features />
        <VehicleShowcase />
      </main>
      <Footer />
    </div>
  );
}

export default App;