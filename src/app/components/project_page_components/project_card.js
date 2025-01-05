'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const ProjectCard = ({
  title,
  description,
  techStack,
  imageUrl,
  actionButtons,
  path
}) => {
  const router = useRouter();

  const handleCardClick = () => {
    console.log(`path: ${path}`);
    router.push(`/projects/${path}`);
  };

  const handleButtonClick = (e, link) => {
    e.stopPropagation();
    window.open(link, '_blank');
  };

  return (
    <div
      className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="w-full h-48 p-4 overflow-hidden">
        <img
          src={imageUrl}
          alt={`${title} screenshot`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 space-y-3 flex-1">
        <h2 className="text-xl font-bold text-gray-800 text-center">{title}</h2>
        <p className="text-gray-600 text-sm line-clamp-5">{description}</p>
        <div>
          <p className="text-sm font-medium text-gray-700 mb-1">Tech Stack:</p>
          <p className="text-gray-600 text-sm">{techStack}</p>
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
  );
};

export default ProjectCard;