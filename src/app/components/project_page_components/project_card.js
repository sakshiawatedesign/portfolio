"use client";

import React, { useState } from "react";

const themeColors = {
  primaryText: "#0d9488",
};

const ProjectCard = ({
  title,
  description,
  techStack,
  imageUrl,
  actionButtons,
  path,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleCardClick = () => {
    window.open(imageUrl, "_blank");
  };

  const handleButtonClick = (e, link) => {
    e.stopPropagation();
    window.open(link, "_blank");
  };

  const isLargeScreen =
    typeof window !== "undefined" && window.innerWidth >= 1024;

  const renderDescription = () => {
    if (Array.isArray(description)) {
      return (
        <ul className="text-gray-600 text-sm space-y-2 pl-5">
          {description.map((point, index) => (
            <li key={index} className="relative">
              <span className="absolute -left-5 top-1.5 w-3 h-3 rounded-full bg-teal-50 border border-teal-300 flex items-center justify-center">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: themeColors.primaryText }}
                ></span>
              </span>
              {point}
            </li>
          ))}
        </ul>
      );
    } else {
      return (
        <p className="text-gray-600 text-sm line-clamp-6">{description}</p>
      );
    }
  };

  return (
    <div
      className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col cursor-pointer"
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="w-full h-48 p-4 overflow-hidden relative">
        <img
          src={imageUrl}
          alt={`${title} screenshot`}
          className={`w-full h-full object-fit transition-transform duration-300 ${
            isHovering && isLargeScreen ? "scale-105" : ""
          }`}
        />
        {isHovering && isLargeScreen && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 13a3 3 0 100-6 3 3 0 000 6z"
              />
            </svg>
          </div>
        )}
      </div>
      <div className="p-4 space-y-4 flex-1">
        <h2 className="text-xl font-bold text-gray-800 text-center">{title}</h2>
        <div className="mt-3 mb-3">{renderDescription()}</div>
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {Array.isArray(techStack)
              ? techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-[6px] text-xs font-medium bg-gray-100 border border-gray-300"
                  >
                    {tech}
                  </span>
                ))
              : techStack.split(",").map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-[10px] text-xs font-medium bg-gray-100 border border-gray-300"
                  >
                    {tech.trim()}
                  </span>
                ))}
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
  );
};

export default ProjectCard;
