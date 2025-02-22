import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faFlutter, faNode, faPhp, faGithub, faGit, faFigma, faAndroid, faApple, faGoogle, faLaravel } from '@fortawesome/free-brands-svg-icons';
import { faServer, faMapMarkedAlt, faCode, faToolbox, faDatabase } from '@fortawesome/free-solid-svg-icons';
import themeColors from "../../lib/theme-colors";

const SkillSection = ({ title, skills, gradient }) => (
  <div className={`p-6 rounded-2xl border border-gray-200 bg-gradient-to-br ${gradient} shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-1`}> 
    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white drop-shadow-md">
      {title}
    </h2>
    <div className="flex flex-wrap gap-4 justify-center">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/95 hover:bg-white transition-all duration-200 justify-center shadow-sm hover:shadow-md group"
        >
          <span className="w-6 h-6 flex items-center justify-center transform group-hover:scale-110 transition-transform flex-shrink-0">
            {skill.icon}
          </span>
          <span className="text-gray-700 font-medium text-xs sm:text-sm md:text-base group-hover:text-teal-500">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

function SkillsPage() {
  const frontendSkills = [
    { name: 'Flutter', icon: <FontAwesomeIcon icon={faFlutter} className="text-blue-500" /> },
    { name: 'Material UI', icon: <FontAwesomeIcon icon={faGoogle} className="text-blue-400" /> },
    { name: 'Cupertino', icon: <FontAwesomeIcon icon={faApple} className="text-gray-500" /> },
    { name: 'XML', icon: <FontAwesomeIcon icon={faAndroid} className="text-green-500" /> },
    { name: 'HTML', icon: <FontAwesomeIcon icon={faHtml5} className="text-orange-600" /> },
    { name: 'CSS', icon: <FontAwesomeIcon icon={faCss3Alt} className="text-blue-600" /> },
    { name: 'BLoc', icon: <FontAwesomeIcon icon={faToolbox} className="text-gray-700" /> },
    { name: 'GetX', icon: <FontAwesomeIcon icon={faToolbox} className="text-gray-700" /> },
    { name: 'Provider', icon: <FontAwesomeIcon icon={faToolbox} className="text-gray-700" /> },
    { name: 'Riverpod', icon: <FontAwesomeIcon icon={faToolbox} className="text-gray-700" /> },
  ];

  const backendSkills = [
    { name: 'Node.js', icon: <FontAwesomeIcon icon={faNode} className="text-green-500" /> },
    { name: 'Express.js', icon: <FontAwesomeIcon icon={faServer} className="text-gray-600" /> },
    { name: 'Php', icon: <FontAwesomeIcon icon={faPhp} className="text-indigo-600" /> },
    { name: 'Rest API', icon: <FontAwesomeIcon icon={faServer} className="text-gray-600" /> },
    { name: 'Google Maps API', icon: <FontAwesomeIcon icon={faMapMarkedAlt} className="text-red-500" /> },
  ];

  const databaseSkills = [
    { name: 'MongoDB', icon: <FontAwesomeIcon icon={faDatabase} className="text-green-700" /> },
    { name: 'Firebase', icon: <FontAwesomeIcon icon={faDatabase} className="text-yellow-600" /> },
    { name: 'MySQL', icon: <FontAwesomeIcon icon={faDatabase} className="text-blue-700" /> },
    { name: 'Supabase', icon: <FontAwesomeIcon icon={faDatabase} className="text-teal-500" /> },
  ];

  const otherSkills = [
    { name: 'Git', icon: <FontAwesomeIcon icon={faGit} className="text-orange-600" /> },
    { name: 'GitHub', icon: <FontAwesomeIcon icon={faGithub} className="text-black" /> },
    { name: 'Postman', icon: <FontAwesomeIcon icon={faToolbox} className="text-orange-500" /> },
    { name: 'Figma', icon: <FontAwesomeIcon icon={faFigma} className="text-pink-500" /> },
    { name: 'Android Studio', icon: <FontAwesomeIcon icon={faAndroid} className="text-green-500" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center py-4 overflow-hidden">
      <h1 className="text-3xl font-bold md:mb-8 mb-4 text-center"
        style={{ color: themeColors.primaryText }}
      >My Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl px-4 md:px-0">
        <SkillSection
          title="Frontend"
          skills={frontendSkills}
          gradient="from-teal-300 to-cyan-200"
        />
        <SkillSection
          title="Backend"
          skills={backendSkills}
          gradient="from-indigo-300 to-purple-200"
        />
        <SkillSection
          title="Database"
          skills={databaseSkills}
          gradient="from-green-300 to-emerald-200"
        />
        <SkillSection
          title="Others"
          skills={otherSkills}
          gradient="from-orange-300 to-rose-200"
        />
      </div>
    </div>
  );
}

export default SkillsPage;
