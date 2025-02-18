import React from 'react';

const SkillSection = ({ title, skills }) => (
  <div className="p-6 rounded-2xl border border-[#e5e7eb] bg-white shadow-sm hover:shadow-md transition-shadow text-center">
    <h2 className="text-2xl font-semibold mb-6 text-[#2c7a7b]">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 justify-center">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#edf2f7] hover:bg-gray-200 transition-colors justify-center"
        >
          <span className="w-6 h-6">{skill.icon}</span>
          <span className="text-[#4c515a] font-medium">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);

function SkillsPage() {
  const frontendSkills = [
    { name: 'React Js', icon: <img src="/react-icon.svg" alt="React" className="w-5 h-5" /> },
    { name: 'Redux', icon: <img src="/redux-icon.svg" alt="Redux" className="w-5 h-5" /> },
    { name: 'HTML', icon: <img src="/html-icon.svg" alt="HTML" className="w-5 h-5" /> },
    { name: 'CSS', icon: <img src="/css-icon.svg" alt="CSS" className="w-5 h-5" /> },
    { name: 'JavaScript', icon: <img src="/js-icon.svg" alt="JavaScript" className="w-5 h-5" /> },
    { name: 'Bootstrap', icon: <img src="/bootstrap-icon.svg" alt="Bootstrap" className="w-5 h-5" /> },
    { name: 'Material UI', icon: <img src="/mui-icon.svg" alt="Material UI" className="w-5 h-5" /> },
  ];

  const databaseSkills = [
    { name: 'MySQL', icon: <img src="/mysql-icon.svg" alt="MySQL" className="w-5 h-5" /> },
    { name: 'Mongo DB', icon: <img src="/mongodb-icon.svg" alt="MongoDB" className="w-5 h-5" /> },
  ];

  const otherSkills = [
    { name: 'Git', icon: <img src="/git-icon.svg" alt="Git" className="w-5 h-5" /> },
    { name: 'GitHub', icon: <img src="/github-icon.svg" alt="GitHub" className="w-5 h-5" /> },
    { name: 'VS Code', icon: <img src="/vscode-icon.svg" alt="VS Code" className="w-5 h-5" /> },
    { name: 'Postman', icon: <img src="/postman-icon.svg" alt="Postman" className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5] p-6 flex items-center justify-center">
      <div className="max-w-6xl mx-auto space-y-6 text-center">
        <h1 className="text-4xl font-bold text-[#111827] mb-8">My Skills</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Frontend Section */}
          <SkillSection title="Frontend" skills={frontendSkills} />

          {/* Database Section */}
          <SkillSection title="Database" skills={databaseSkills} />
        </div>

        {/* Others Section - Full Width */}
        <div className="col-span-full md:w-[60%] mx-auto">
          <SkillSection title="Others" skills={otherSkills} />
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;
