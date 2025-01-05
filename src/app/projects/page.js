import React from 'react';
import ProjectCard from '../components/project_page_components/project_card';
// import { Github, Eye, Video } from 'lucide-react';

const Project = () => {
    // Define your projects as an array of objects
    const projects = [
        {
            title: "Nike Clone",
            description:
                "It's my major project where I've used MERN stack to make the clone of Nike website along with backend integration and payment gateway integration with all the features of an e-commerce website.",
            techStack: "React, Redux, JavaScript, Chakra UI, CSS, NodeJS, Express, MongoDB, Razorpay",
            imageUrl: "/icons/call.png", // Replace with actual image path
            actionButtons: [
                {
                    icon: "/icons/call.png",
                    link: "https://demo-link.com",
                    title: "Watch Demo"
                },
                {
                    icon: "/icons/call.png",
                    link: "https://preview-link.com",
                    title: "Live Preview"
                },
                {
                    icon: "/icons/call.png",
                    link: "https://github.com/your-repo",
                    title: "View Code"
                }
            ]
        },
        {
            title: "Todo App",
            description:
                "A fully responsive Todo App built using React and Redux Toolkit, featuring CRUD operations and user authentication.",
            techStack: "React, Redux Toolkit, Tailwind CSS, Firebase",
            imageUrl: "/icons/call.png", // Replace with actual image path
            actionButtons: [
                {
                    icon: "/icons/call.png",
                    link: "https://todo-demo-link.com",
                    title: "Watch Demo"
                },
                {
                    icon: "/icons/call.png",
                    link: "https://github.com/todo-repo",
                    title: "View Code"
                }
            ]
        },
        {
            title: "Portfolio Website",
            description:
                "A personal portfolio website showcasing my skills, projects, and achievements, built with React and styled with Tailwind CSS.",
            techStack: "React, Tailwind CSS, JavaScript",
            imageUrl: "/icons/call.png", // Replace with actual image path
            actionButtons: [
                {
                    icon: "/icons/call.png",
                    link: "https://portfolio-preview-link.com",
                    title: "Live Preview"
                },
                {
                    icon: "/icons/call.png",
                    link: "https://github.com/portfolio-repo",
                    title: "View Code"
                }
            ]
        },
        {
            title: "Weather App",
            description:
                "A weather application that provides real-time weather updates for any location. Built with React and integrated with OpenWeather API.",
            techStack: "React, OpenWeather API, CSS",
            imageUrl: "/icons/call.png", // Replace with actual image path
            actionButtons: [
                {
                    icon: "/icons/call.png",
                    link: "https://weather-demo-link.com",
                    title: "Live Preview"
                },
                {
                    icon: "/icons/call.png",
                    link: "https://github.com/weather-repo",
                    title: "View Code"
                }
            ]
        }
    ];

    return (
        <div className="p-4">
            {/* Responsive grid for project cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
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
};

export default Project;
