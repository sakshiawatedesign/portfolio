'use client';

import React from 'react';
import projectsData from '../projects_data'; 

export default function ProjectDetail({ params }) {
  const { path } = React.use(params); 

  const project = projectsData.find(project => project.path === path);
console.log(path);
  if (!project) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold">404 - Project Not Found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold">Project Title: {project.title}</h1>
      <p>{project.description}</p>
      {/* Add other project details here */}
    </div>
  );
}

// 'use client';

// import React from 'react';
// import { useRouter } from 'next/navigation';
// import projectsData from '../projects_data';

// export default function ProjectDetail({ params }) {
//   const router = useRouter();
//   const project = projectsData[parseInt(params.id)];

//   if (!project) {
//     return <div>Project not found</div>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <button
//         onClick={() => router.back()}
//         className="mb-6 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
//       >
//         ← Back to Projects
//       </button>

//       <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//         <img 
//           src={project.imageUrl} 
//           alt={project.title} 
//           className="w-full h-64 object-cover"
//         />
        
//         <div className="p-6">
//           <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
//           <p className="text-gray-600 mb-4">{project.description}</p>
          
//           <div className="mb-6">
//             <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
//             <p className="text-gray-600">{project.techStack}</p>
//           </div>

//           <div className="flex gap-4">
//             {project.actionButtons.map((button, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => window.open(button.link, '_blank')}
//                 className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
//               >
//                 <img src={button.icon} alt="" className="w-5 h-5" />
//                 {button.title}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }