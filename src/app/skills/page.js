"use client";

import React from 'react';
import themeColors from "../../lib/theme-colors";
import AnimateOnScroll from '../components/AnimateOnScroll';
import { 
  SiFigma, 
  SiMiro, 
  SiAdobephotoshop, 
  SiAdobexd, 
  SiAdobeillustrator, 
  SiFramer, 
  SiNotion, 
  SiOpenai, 
  SiGooglegemini 
} from "react-icons/si";
import { 
  FaLightbulb, 
  FaUsers, 
  FaChess, 
  FaPalette, 
  FaLayerGroup, 
  FaSitemap, 
  FaVectorSquare, 
  FaBezierCurve, 
  FaMobileScreenButton, 
  FaRoute, 
  FaArrowPointer, 
  FaObjectGroup, 
  FaFlask, 
  FaLaptopCode,
  FaHandshakeSimple,
  FaComments,
  FaPuzzlePiece,
  FaMagnifyingGlass,
  FaArrowsSpin,
  FaGraduationCap,
  FaLanguage,
  FaAward
} from "react-icons/fa6";
import { Sparkles, PlayCircle } from "lucide-react";

const SkillBadge = ({ name, icon, highlight }) => (
  <div
    className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white shadow-sm border ${
      highlight ? 'border-teal-400 bg-teal-50/50' : 'border-gray-200'
    } hover:border-[#2c7a7b] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group`}
  >
    <span className="w-5 h-5 flex items-center justify-center transform group-hover:scale-110 transition-transform flex-shrink-0">
      {icon}
    </span>
    <span className="text-gray-700 font-medium text-xs sm:text-sm group-hover:text-[#2c7a7b] transition-colors">
      {name}
    </span>
  </div>
);

const SkillCard = ({ title, subtitle, skills, gradient, headerIcon }) => (
  <div className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
    {/* Card Header with gradient */}
    <div className={`p-6 bg-gradient-to-r ${gradient} text-white`}>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2 drop-shadow-sm">
            {headerIcon}
            {title}
          </h2>
          {subtitle && (
            <p className="text-xs md:text-sm text-white/90 mt-1 font-light">
              {subtitle}
            </p>
          )}
        </div>
        <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold">
          {skills.length} Skills
        </span>
      </div>
    </div>

    {/* Skills Container */}
    <div className="p-6 flex-1 bg-[#fcfdfd]">
      <div className="flex flex-wrap gap-2.5 justify-start">
        {skills.map((skill) => (
          <SkillBadge
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            highlight={skill.highlight}
          />
        ))}
      </div>
    </div>
  </div>
);

function SkillsPage() {
  const primarySkills = [
    { name: 'Design Thinking', icon: <FaLightbulb className="text-amber-500" />, highlight: true },
    { name: 'User Research', icon: <FaUsers className="text-blue-500" />, highlight: true },
    { name: 'UX Strategy', icon: <FaChess className="text-indigo-500" /> },
    { name: 'UI Design', icon: <FaPalette className="text-pink-500" />, highlight: true },
    { name: 'Design System', icon: <FaLayerGroup className="text-teal-600" />, highlight: true },
    { name: 'Information Architecture', icon: <FaSitemap className="text-purple-500" /> },
    { name: 'Visual Design', icon: <FaVectorSquare className="text-rose-500" /> },
    { name: 'Wireframing', icon: <FaBezierCurve className="text-cyan-600" />, highlight: true },
    { name: 'Prototyping', icon: <FaMobileScreenButton className="text-emerald-500" />, highlight: true },
    { name: 'User Flow Mapping', icon: <FaRoute className="text-amber-600" /> },
    { name: 'Interaction Design', icon: <FaArrowPointer className="text-blue-600" /> },
    { name: 'Low & High-Fidelity Mockups', icon: <FaObjectGroup className="text-teal-500" /> },
    { name: 'Usability Testing', icon: <FaFlask className="text-orange-500" /> },
    { name: 'Developer Handoff', icon: <FaLaptopCode className="text-violet-500" /> },
  ];

  const toolsAndSoftwares = [
    { name: 'Figma', icon: <SiFigma className="text-[#f24e1e]" />, highlight: true },
    { name: 'Figma Jam', icon: <SiFigma className="text-[#a259ff]" />, highlight: true },
    { name: 'Miro', icon: <SiMiro className="text-[#ffd02f]" /> },
    { name: 'Lottie Editor', icon: <PlayCircle className="text-[#00ddb3] w-5 h-5" /> },
    { name: 'Adobe Illustrator', icon: <SiAdobeillustrator className="text-[#ff9a00]" /> },
    { name: 'Adobe XD', icon: <SiAdobexd className="text-[#ff61f6]" /> },
    { name: 'Adobe Photoshop', icon: <SiAdobephotoshop className="text-[#31a8ff]" /> },
    { name: 'Notion', icon: <SiNotion className="text-black" /> },
    { name: 'Lottie', icon: <PlayCircle className="text-[#00c59b] w-5 h-5" /> },
    { name: 'ChatGPT', icon: <SiOpenai className="text-emerald-600" /> },
    { name: 'Google Gemini', icon: <SiGooglegemini className="text-blue-500" /> },
    { name: 'Framer', icon: <SiFramer className="text-black" />, highlight: true },
    { name: 'Napkin AI', icon: <Sparkles className="text-amber-500 w-5 h-5" /> },
  ];

  const softSkills = [
    { name: 'Collaboration & Teamwork', icon: <FaHandshakeSimple className="text-teal-600" />, highlight: true },
    { name: 'Communication & Storytelling', icon: <FaComments className="text-blue-500" />, highlight: true },
    { name: 'Problem-Solving', icon: <FaPuzzlePiece className="text-indigo-500" />, highlight: true },
    { name: 'Attention to Detail', icon: <FaMagnifyingGlass className="text-purple-500" /> },
    { name: 'Adaptability & Agile UX', icon: <FaArrowsSpin className="text-rose-500" /> },
  ];

  const education = [
    {
      degree: "B.E In Computer Engineering",
      institution: "K.J. Somaiya Institute of Technology & IT",
      score: "9.4 CGPA",
      period: "2020 - 2023",
      icon: <FaGraduationCap className="text-[#2c7a7b] w-6 h-6" />
    },
    {
      degree: "Diploma In Computer Engineering",
      institution: "V.E.S. Polytechnic",
      score: "93.33%",
      period: "2017 - 2020",
      icon: <FaAward className="text-[#2c7a7b] w-6 h-6" />
    }
  ];

  const languages = [
    { name: "English", level: "Professional Working Proficiency" },
    { name: "Hindi", level: "Fluent" },
    { name: "Marathi", level: "Native / Mother Tongue" }
  ];

  return (
    <div className="min-h-screen py-8 px-4 md:px-8 max-w-6xl mx-auto">
      <AnimateOnScroll>
        <div className="text-center mb-10">
          <h1
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: themeColors.primaryText }}
          >
            Skills & Expertise
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            A comprehensive overview of my UI/UX design methodologies, industry-standard toolsets, soft skills, and educational background.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Primary Skills */}
        <AnimateOnScroll delay={100} duration={800}>
          <SkillCard
            title="Primary UX/UI Skills"
            subtitle="Core design practices & methodologies"
            skills={primarySkills}
            gradient="from-teal-600 to-emerald-500"
            headerIcon={<FaPalette className="w-5 h-5" />}
          />
        </AnimateOnScroll>

        {/* Tools & Softwares */}
        <AnimateOnScroll delay={200} duration={800}>
          <SkillCard
            title="Tools & Softwares"
            subtitle="Industry standard design & prototyping tools"
            skills={toolsAndSoftwares}
            gradient="from-indigo-600 to-purple-500"
            headerIcon={<SiFigma className="w-5 h-5" />}
          />
        </AnimateOnScroll>

        {/* Soft Skills */}
        <AnimateOnScroll delay={300} duration={800}>
          <SkillCard
            title="Soft Skills"
            subtitle="Interpersonal, problem-solving & communication"
            skills={softSkills}
            gradient="from-pink-600 to-rose-500"
            headerIcon={<FaHandshakeSimple className="w-5 h-5" />}
          />
        </AnimateOnScroll>

        {/* Education & Languages Card */}
        <AnimateOnScroll delay={400} duration={800}>
          <div className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
            <div className="p-6 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
              <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2 drop-shadow-sm">
                <FaGraduationCap className="w-6 h-6" />
                Education & Languages
              </h2>
              <p className="text-xs md:text-sm text-white/90 mt-1 font-light">
                Academic background and linguistic proficiency
              </p>
            </div>

            <div className="p-6 space-y-6 flex-1 bg-[#fcfdfd]">
              {/* Education List */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold tracking-wider text-gray-500 uppercase">
                  Education
                </h3>
                {education.map((edu, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-gray-200 shadow-sm">
                    <div className="p-2 bg-teal-50 rounded-lg">
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-gray-800 text-sm">{edu.degree}</h4>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                          {edu.score}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mt-0.5">{edu.institution}</p>
                      <p className="text-xs text-gray-400 mt-0.5 font-medium">{edu.period}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Languages List */}
              <div>
                <h3 className="text-xs font-bold tracking-wider text-gray-500 uppercase mb-3">
                  Languages
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {languages.map((lang, idx) => (
                    <div key={idx} className="p-3 bg-white rounded-xl border border-gray-200 text-center shadow-sm hover:border-[#2c7a7b] transition-all">
                      <FaLanguage className="w-5 h-5 mx-auto text-[#2c7a7b] mb-1" />
                      <p className="text-sm font-bold text-gray-800">{lang.name}</p>
                      <p className="text-[10px] text-gray-500 mt-0.5 leading-tight">{lang.level}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}

export default SkillsPage;
