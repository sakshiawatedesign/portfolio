// components/AnimateOnScroll.js
"use client";

import { forwardRef } from 'react';

const AnimateOnScroll = forwardRef(({ 
  children, 
  className = '', 
  delay = 0,
  duration = 1200, // Slower animation by default
  threshold = 0.1,
  staggerChildren = false,
  direction = "up", // Add direction parameter
  ...props 
}, ref) => {
  // Calculate transform based on direction
  const getInitialTransform = () => {
    switch(direction) {
      case "right": return "translateX(30px)";
      case "left": return "translateX(-30px)";
      case "down": return "translateY(-30px)";
      default: return "translateY(30px)"; // "up" is default
    }
  };

  return (
    <div 
      ref={ref}
      className={`animate-on-scroll ${staggerChildren ? 'stagger-children' : ''} ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        // Only apply animation styles, don't change layout
        position: 'relative', // Ensure this doesn't affect layout
        width: '100%', // Maintain full width
        height: 'auto', // Keep original height
      }}
      data-direction={direction}
      data-threshold={threshold}
      {...props}
    >
      {children}
    </div>
  );
});

AnimateOnScroll.displayName = 'AnimateOnScroll';

export default AnimateOnScroll;