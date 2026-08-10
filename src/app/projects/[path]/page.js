'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import projectsData from '../projects_data';
import themeColors from '../../../lib/theme-colors';
import { FaArrowLeft } from 'react-icons/fa6';

export default function ProjectDetail({ params }) {
  const { path } = React.use(params);
  const router = useRouter();

  const project = projectsData.find((p) => p.path === path);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto p-8 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Project Not Found</h1>
        <p className="text-gray-500 mb-6">The requested project case study could not be found.</p>
        <Link
          href="/projects"
          className="px-6 py-2.5 rounded-xl bg-[#2c7a7b] text-white font-semibold shadow hover:bg-[#236364] transition-all"
        >
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 md:px-6">
      <button
        onClick={() => router.back()}
        className="mb-6 px-4 py-2 bg-gray-100 hover:bg-teal-50 text-gray-700 hover:text-[#2c7a7b] rounded-xl font-semibold transition-colors flex items-center gap-2 text-sm"
      >
        <FaArrowLeft className="w-4 h-4" />
        Back to Projects
      </button>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
        {/* Mockup Banner */}
        <div className="w-full h-72 md:h-96 relative bg-gray-100">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
          {project.tag && (
            <div className="absolute top-4 right-4">
              <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-emerald-500 text-white shadow-lg">
                {project.tag}
              </span>
            </div>
          )}
        </div>

        <div className="p-6 md:p-10 space-y-6">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
              {project.title}
            </h1>
            {project.subtitle && (
              <p className="text-sm md:text-base font-semibold text-[#2c7a7b]">
                {project.subtitle}
              </p>
            )}
          </div>

          <div className="border-t border-gray-100 pt-6">
            <h2 className="text-lg font-bold text-gray-800 mb-3">Project & UX Overview</h2>
            {Array.isArray(project.description) ? (
              <ul className="space-y-3">
                {project.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm md:text-base leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-[#2c7a7b] mt-2 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">{project.description}</p>
            )}
          </div>

          <div className="border-t border-gray-100 pt-6">
            <h2 className="text-lg font-bold text-gray-800 mb-3">Design & Prototyping Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.split(",").map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-teal-50 border border-teal-200 text-[#2c7a7b]"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>

          {project.actionButtons && project.actionButtons.length > 0 && (
            <div className="border-t border-gray-100 pt-6 flex flex-wrap gap-4">
              {project.actionButtons.map((button, idx) => (
                <button
                  key={idx}
                  onClick={() => window.open(button.link, '_blank')}
                  className="flex items-center gap-2.5 px-6 py-3 bg-[#2c7a7b] text-white font-bold rounded-xl hover:bg-[#236364] shadow-md hover:shadow-lg transition-all text-sm"
                >
                  <img src={button.icon} alt="" className="w-5 h-5 object-contain brightness-0 invert" />
                  <span>{button.title}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}