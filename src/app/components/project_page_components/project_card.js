'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import themeColors from '@/lib/theme-colors';

const ProjectCard = ({
  title,
  description,
  techStack,
  imageUrl,
  actionButtons,
  path
}) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Zoom functionality states
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [lastDistance, setLastDistance] = useState(null);
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  const handleCardClick = () => {
    // Open image modal instead of navigation
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Reset zoom state when closing
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setLastDistance(null);
  };

  const handleButtonClick = (e, link) => {
    e.stopPropagation();
    window.open(link, '_blank');
  };

  // Detect if we're on a large screen
  const isLargeScreen = typeof window !== 'undefined' && window.innerWidth >= 1024;

  // Zoom in/out functions
  const zoomIn = () => {
    setScale(prevScale => Math.min(prevScale + 0.25, 3));
  };

  const zoomOut = () => {
    setScale(prevScale => Math.max(prevScale - 0.25, 0.5));
  };

  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  // Handle mouse wheel zoom
  const handleWheel = (e) => {
    if (isModalOpen) {
      e.preventDefault();
      if (e.deltaY < 0) {
        zoomIn();
      } else {
        zoomOut();
      }
    }
  };

  // Handle drag to pan around zoomed image
  const handleMouseDown = (e) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch event handlers for mobile/small screens
  const handleTouchStart = (e) => {
    e.preventDefault();
    const touches = e.touches;

    // Single touch for panning
    if (touches.length === 1 && scale > 1) {
      setIsDragging(true);
      setDragStart({
        x: touches[0].clientX - position.x,
        y: touches[0].clientY - position.y
      });
    }
    // Pinch to zoom with two fingers
    else if (touches.length === 2) {
      const dist = getDistanceBetweenTouches(touches);
      setLastDistance(dist);
    }
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    const touches = e.touches;

    // Pan with single touch
    if (touches.length === 1 && isDragging) {
      setPosition({
        x: touches[0].clientX - dragStart.x,
        y: touches[0].clientY - dragStart.y
      });
    }
    // Pinch zoom with two fingers
    else if (touches.length === 2 && lastDistance !== null) {
      const currentDistance = getDistanceBetweenTouches(touches);
      const factor = currentDistance / lastDistance;

      // Adjust zoom based on pinch gesture
      const newScale = Math.max(0.5, Math.min(3, scale * factor));
      setScale(newScale);
      setLastDistance(currentDistance);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setLastDistance(null);
  };

  // Helper function to calculate distance between two touch points
  const getDistanceBetweenTouches = (touches) => {
    if (touches.length < 2) return 0;

    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  // Handle double tap to zoom
  const handleDoubleTap = () => {
    if (scale > 1) {
      resetZoom();
    } else {
      setScale(2);
    }
  };

  // Add wheel event listener to the modal when it's open
  useEffect(() => {
    const handleWheelEvent = (e) => {
      if (isModalOpen) {
        handleWheel(e);
      }
    };

    window.addEventListener('wheel', handleWheelEvent, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheelEvent);
    };
  }, [isModalOpen]);

  // Double tap detection
  useEffect(() => {
    let lastTap = 0;
    let touchTimeout;

    const handleTap = (e) => {
      const currentTime = new Date().getTime();
      const tapLength = currentTime - lastTap;

      clearTimeout(touchTimeout);

      if (tapLength < 300 && tapLength > 0) {
        e.preventDefault();
        handleDoubleTap();
      } else {
        touchTimeout = setTimeout(() => {
          clearTimeout(touchTimeout);
        }, 300);
      }

      lastTap = currentTime;
    };

    const imageElement = imageRef.current;
    if (imageElement && isModalOpen) {
      imageElement.addEventListener('touchend', handleTap);
    }

    return () => {
      if (imageElement) {
        imageElement.removeEventListener('touchend', handleTap);
      }
    };
  }, [isModalOpen, imageRef.current, scale]);

  // Display description as bullet points
  const renderDescription = () => {
    if (Array.isArray(description)) {
      return (
        <ul className="text-gray-600 text-sm space-y-2 pl-5">
          {description.map((point, index) => (
            <li key={index} className="relative">
              <span className="absolute -left-5 top-1.5 w-3 h-3 rounded-full bg-teal-50 border border-teal-300 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: themeColors.primaryText }}></span>
              </span>
              {point}
            </li>
          ))}
        </ul>
      );
    } else {
      // Fallback for string descriptions
      return <p className="text-gray-600 text-sm line-clamp-6">{description}</p>;
    }
  };

  return (
    <>
      <div
        className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col"
        onClick={handleCardClick}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="w-full h-48 p-4 overflow-hidden relative">
          <img
            src={imageUrl}
            alt={`${title} screenshot`}
            className={`w-full h-full object-fit transition-transform duration-300 ${isHovering && isLargeScreen ? 'scale-105' : ''
              }`}
          />
          {isHovering && isLargeScreen && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 13a3 3 0 100-6 3 3 0 000 6z" />
              </svg>
            </div>
          )}
        </div>
        <div className="p-4 space-y-4 flex-1">
          <h2 className="text-xl font-bold text-gray-800 text-center">{title}</h2>

          {/* Styled Bullet Points for Description */}
          <div className="mt-3 mb-3">
            {renderDescription()}
          </div>

          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {Array.isArray(techStack) ? (
                techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-[6px] text-xs font-medium bg-gray-100 border border-gray-300"
                  >
                    {tech}
                  </span>
                ))
              ) : (
                techStack.split(',').map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-[10px] text-xs font-medium bg-gray-100 border border-gray-300"
                  >
                    {tech.trim()}
                  </span>
                ))
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-around p-4 pt-2">
          {actionButtons.map((button, idx) => (
            <button
              key={idx}
              onClick={(e) => handleButtonClick(e, button.link)}
              title={button.title}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors flex items-center"
            >
              <img
                src={button.icon}
                alt={button.title}
                className="w-6 h-6 object-contain"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Modal for enlarged image view with zoom controls */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchEnd={handleTouchEnd}
        >
          <div
            ref={containerRef}
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button - always visible but especially important for mobile */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white bg-opacity-80 rounded-full p-2 z-10 shadow-md hover:bg-gray-200 transition-colors"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Zoom controls - visible on larger screens */}
            <div className="absolute top-4 left-4 flex space-x-2 bg-white bg-opacity-80 rounded-lg p-1 z-10 md:flex hidden">
              <button
                onClick={zoomIn}
                className="p-2 hover:bg-gray-200 rounded-full"
                title="Zoom In"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
              <button
                onClick={zoomOut}
                className="p-2 hover:bg-gray-200 rounded-full"
                title="Zoom Out"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                </svg>
              </button>
              <button
                onClick={resetZoom}
                className="p-2 hover:bg-gray-200 rounded-full"
                title="Reset Zoom"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
            </div>

            {/* Instructions - different for mobile and desktop */}
            <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 rounded-lg px-3 py-1 text-xs z-10">
              <p className="hidden md:block">Use mouse wheel to zoom, drag to pan when zoomed</p>
              <p className="block md:hidden">Pinch to zoom, double-tap to toggle zoom</p>
            </div>

            {/* Zoomable image container */}
            <div
              className="overflow-hidden"
              style={{
                width: '100%',
                height: '85vh',
                maxHeight: '85vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: scale > 1 ? 'grab' : 'default'
              }}
            >
              <img
                ref={imageRef}
                src={imageUrl}
                alt={`${title} enlarged view`}
                className="max-w-full max-h-full object-contain transition-transform"
                style={{
                  transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
                  transformOrigin: 'center center',
                }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                draggable="false"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;