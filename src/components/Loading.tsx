import React from 'react';
import '../styles/loading.css';

interface LoadingProps {
  isExiting?: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isExiting }) => {
  return (
    <div className={`fixed inset-0 bg-[var(--color-primary)] z-50 flex items-center justify-center ${isExiting ? 'fade-out' : ''}`}>
      <div className="flex gap-3">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default Loading; 