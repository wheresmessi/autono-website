import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import './styles/colors.css';
import './styles/globals.css';

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background-dark)' }}>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;