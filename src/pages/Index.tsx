
import React, { useEffect, useState } from 'react';
import StudentAvatar from '../components/StudentAvatar';
import FloatingBubble from '../components/FloatingBubble';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const [bubbles, setBubbles] = useState([]);
  const [resetTrigger, setResetTrigger] = useState(0);

  const projects = [
    { id: 1, name: 'AI Chat Bot', icon: '🤖', path: '/ai-chatbot', color: '#ff6b6b' },
    { id: 2, name: 'Web Scraper', icon: '🕷️', path: '/web-scraper', color: '#4ecdc4' },
    { id: 3, name: 'Data Viz', icon: '📊', path: '/data-visualization', color: '#45b7d1' },
    { id: 4, name: 'Mobile App', icon: '📱', path: '/mobile-app', color: '#f9ca24' },
    { id: 5, name: 'ML Model', icon: '🧠', path: '/machine-learning', color: '#6c5ce7' },
    { id: 6, name: 'Game Dev', icon: '🎮', path: '/game-development', color: '#fd79a8' },
    { id: 7, name: 'Hackathons', icon: '🏅', path: '/hackathons', color: '#aa31daff' },
  ];

  useEffect(() => {
    const generateBubblePositions = () => {
      const newBubbles = projects.map(project => ({
        ...project,
        x: 10 + Math.random() * 80,
        y: 15 + Math.random() * 70,
      }));
      setBubbles(newBubbles);

      // Force all bubbles to reset physics
      setResetTrigger(Date.now());
    };

    generateBubblePositions();
  }, []);

  const handleBubbleClick = (path) => navigate(path);

  return (
    <div className="min-h-screen overflow-hidden relative bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-pink-500 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-32 left-40 w-28 h-28 bg-indigo-500 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-purple-600 rounded-full opacity-15 animate-bounce"></div>
      </div>

      {/* Main title */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20 ">
        <h1 className="text-6xl md:text-7xl pb-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 animate-pulse">
          Wright Portfolio
        </h1>
        <div className="text-center mt-2">
          <p className="text-purple-200 text-lg md:text-xl font-medium">
            ✨ Software Engineer ✨
          </p>
        </div>
      </div>

      {/* Central avatar */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <StudentAvatar />
      </div>

      {/* Floating project bubbles */}
      {bubbles.map((bubble) => (
        <FloatingBubble
          key={`${bubble.id}-${bubble.x}-${bubble.y}`} // Force remount with new positions
          project={bubble}
          onClick={() => handleBubbleClick(bubble.path)}
        />
      ))}

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Instructions */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-20">
        <p className="text-purple-200 text-sm md:text-base animate-bounce">
          🎯 Click the floating bubbles to explore my projects!
        </p>
      </div>
    </div>
  );
};

export default Index;
