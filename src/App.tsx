import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import Footer from './components/Footer';
import Loading from './components/Loading';
import './styles/colors.css';
import './styles/globals.css';
import './styles/loading.css';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Preload the background video
    const video = document.createElement('video');
    video.src = '/assets/bg.mp4';
    
    // Start loading the video
    video.load();

    let videoLoaded = false;
    const startTime = Date.now();
    const minLoadingTime = 2000; // Minimum 2 seconds

    // When the video is loaded enough to play
    video.addEventListener('canplaythrough', () => {
      videoLoaded = true;
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadingTime - elapsedTime);
      
      setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          setIsLoading(false);
          setShowContent(true);
        }, 500);
      }, remainingTime);
    }, { once: true });

    // Fallback in case video load fails or takes too long
    const timeoutId = setTimeout(() => {
      if (!videoLoaded) {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minLoadingTime - elapsedTime);
        
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            setIsLoading(false);
            setShowContent(true);
          }, 500);
        }, remainingTime);
      }
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
      video.remove();
    };
  }, []);

  return (
    <>
      {isLoading && <Loading isExiting={isExiting} />}
      <div className={`content-wrapper ${showContent ? 'fade-in' : ''}`}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
};

export default App;