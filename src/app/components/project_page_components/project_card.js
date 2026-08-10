"use client";

import React, { useState } from "react";

const themeColors = {
  primaryText: "#2c7a7b",
};

const ProjectCard = ({
  title,
  subtitle,
  tag,
  description,
  techStack,
  imageUrl,
  actionButtons = [],
  path,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleCardClick = () => {
    if (actionButtons.length > 0 && actionButtons[0].link) {
      window.open(actionButtons[0].link, "_blank");
    } else {
      window.open(imageUrl, "_blank");
    }
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
        <ul className="text-gray-600 text-xs sm:text-sm space-y-2 pl-4">
          {description.map((point, index) => (
            <li key={index} className="relative leading-relaxed">
              <span className="absolute -left-4 top-2 w-1.5 h-1.5 rounded-full bg-[#2c7a7b]"></span>
              {point}
            </li>
          ))}
        </ul>
      );
    } else {
      return (
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{description}</p>
      );
    }
  };

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer border border-gray-200 hover:border-[#2c7a7b] group hover:-translate-y-1"
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Image Container with Badge */}
      <div className="w-full h-52 overflow-hidden relative bg-gray-100">
        <img
          src={imageUrl}
          alt={`${title} mockup`}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

        {/* Status Badge */}
        {tag && (
          <div className="absolute top-3 right-3 z-10">
            <span className={`px-3 py-1 rounded-full text-[11px] font-bold shadow-md backdrop-blur-md ${
              tag.includes('Live') 
                ? 'bg-emerald-500 text-white'
                : tag.includes('10K') 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-900/80 text-white'
            }`}>
              {tag}
            </span>
          </div>
        )}

        {/* Hover Overlay */}
        <div className={`absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          isHovering ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}>
          <span className="px-4 py-2 rounded-full bg-white text-gray-900 font-bold text-xs shadow-lg transform group-hover:scale-105 transition-transform flex items-center gap-1.5">
            View Design Details ↗
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#2c7a7b] transition-colors">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xs font-semibold text-[#2c7a7b] mt-0.5 mb-3">
              {subtitle}
            </p>
          )}

          <div className="mt-2 mb-4">{renderDescription()}</div>
        </div>

        <div>
          <div className="pt-3 border-t border-gray-100">
            <p className="text-[11px] font-semibold uppercase text-gray-400 tracking-wider mb-2">
              Design & Skills
            </p>
            <div className="flex flex-wrap gap-1.5">
              {Array.isArray(techStack)
                ? techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-gray-50 border border-gray-200 text-gray-700"
                    >
                      {tech}
                    </span>
                  ))
                : techStack.split(",").map((tech, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-teal-50/60 border border-teal-200/60 text-[#2c7a7b]"
                    >
                      {tech.trim()}
                    </span>
                  ))}
            </div>
          </div>

          {/* Action Buttons */}
          {actionButtons && actionButtons.length > 0 && (
            <div className="flex items-center gap-2 pt-4 mt-3 border-t border-gray-100">
              {actionButtons.map((button, idx) => (
                <button
                  key={idx}
                  onClick={(e) => handleButtonClick(e, button.link)}
                  title={button.title}
                  className="flex-1 py-2 px-3 hover:bg-teal-50 border border-gray-200 hover:border-[#2c7a7b] rounded-xl transition-all flex items-center justify-center gap-2 text-xs font-semibold text-gray-700 hover:text-[#2c7a7b]"
                >
                  <img
                    src={button.icon}
                    alt={button.title}
                    className="w-4 h-4 object-contain"
                  />
                  <span>{button.title}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

