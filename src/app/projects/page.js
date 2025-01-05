import React from 'react';
import ProjectCard from '../components/project_page_components/project_card';
import projectsData from './projects_data';

export default function Projects() {
    return (
        <div className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {projectsData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        path={project.path}
                        title={project.title}
                        description={project.description}
                        techStack={project.techStack}
                        imageUrl={project.imageUrl}
                        actionButtons={project.actionButtons}
                    />
                ))}
            </div>
        </div>
    );
}