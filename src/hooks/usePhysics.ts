
import { useState, useEffect, useRef } from 'react';

interface PhysicsState {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export const usePhysics = (initialX: number, initialY: number, speed: number = 0.5) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const velocityRef = useRef({ 
    vx: (Math.random() - 0.5) * speed, 
    vy: (Math.random() - 0.5) * speed 
  });
  const animationRef = useRef<number>();

  useEffect(() => {
    const animate = () => {
      setPosition(prev => {
        const newX = prev.x + velocityRef.current.vx;
        const newY = prev.y + velocityRef.current.vy;

        // Bounce off edges (accounting for bubble size)
        if (newX <= 5 || newX >= 90) {
          velocityRef.current.vx *= -1;
        }
        if (newY <= 5 || newY >= 85) {
          velocityRef.current.vy *= -1;
        }

        return {
          x: Math.max(5, Math.min(90, newX)),
          y: Math.max(5, Math.min(85, newY))
        };
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return position;
};
