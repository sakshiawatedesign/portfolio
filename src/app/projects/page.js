import React from 'react';
import ProjectCard from '../components/project_page_components/project_card';
import projectsData from './projects_data';
import AnimateOnScroll from '../components/AnimateOnScroll';
import themeColors from "../../lib/theme-colors";

export default function Projects() {
    return (
        <div className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
            <AnimateOnScroll>
                <div className="text-center mb-10">
                    <h1
                        className="text-3xl md:text-4xl font-bold mb-3"
                        style={{ color: themeColors.primaryText }}
                    >
                        Featured UI/UX Projects
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                        Explore end-to-end user experience designs, mobile applications, web dashboards, design systems, and e-commerce platforms.
                    </p>
                </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200} duration={800}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <ProjectCard
                            key={index}
                            path={project.path}
                            title={project.title}
                            subtitle={project.subtitle}
                            tag={project.tag}
                            description={project.description}
                            techStack={project.techStack}
                            imageUrl={project.imageUrl}
                            actionButtons={project.actionButtons}
                        />
                    ))}
                </div>
            </AnimateOnScroll>
        </div>
    );
}