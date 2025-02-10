'use client';

import React from "react";
import { format, differenceInMonths } from "date-fns";
import { FaBriefcase } from "react-icons/fa";

const ExperiencePage = () => {
    const experiences = [
        {
            id: 1,
            company: "TechCorp Solutions",
            position: "Senior Frontend Developer",
            startDate: new Date(2022, 0, 1),
            endDate: new Date(),
            logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80",
            website: "https://techcorp.com",
            achievements: [
                "Led team of 5 developers in successful project delivery",
                "Improved application performance by 40%",
                "Implemented new CI/CD pipeline"
            ],
            techStack: ["React", "TypeScript", "Tailwind CSS"]
        },
        {
            id: 2,
            company: "Digital Innovations",
            position: "Frontend Developer",
            startDate: new Date(2020, 6, 1),
            endDate: new Date(2021, 11, 31),
            logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80",
            website: "https://digitalinnovations.com",
            achievements: [
                "Developed responsive web applications",
                "Reduced loading time by 60%",
                "Mentored junior developers"
            ],
            techStack: ["JavaScript", "React", "Redux"]
        }
    ];

    const calculateDuration = (startDate, endDate) => {
        const months = differenceInMonths(endDate, startDate);
        const years = Math.floor(months / 12);
        const remainingMonths = months % 12;
        return `${years > 0 ? `${years} yr${years > 1 ? 's' : ''}` : ''} ${remainingMonths} mos`;
    };

    return (
        <div className="min-h-screen bg-scaffold p-4 md:p-8">
            <h1 className="text-3xl font-bold text-primaryText mb-8 text-center">Work Experience</h1>

            <div className="relative max-w-4xl mx-auto">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-[#9ed8d9] transform md:-translate-x-1/2"></div>

                {experiences.map((exp, index) => (
                    <div key={exp.id} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-14`}>
                        {/* Timeline dot with logo */}
                        <div className="absolute left-0 md:left-1/2 w-14 h-14 transform -translate-x-1/2 z-10">
                            <div className="w-full h-full rounded-full border-4 border-[#4faba9] bg-white overflow-hidden">
                                <img
                                    src={exp.logo}
                                    alt={`${exp.company} logo`}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.src = "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80";
                                    }}
                                />
                            </div>
                        </div>

                        {/* Date - Visible only on mobile */}
                        <div className="md:hidden text-sm text-gray-600 pt-4 mb-2 ml-8">
                            {format(exp.startDate, "MMM yyyy")} - {format(exp.endDate, "MMM yyyy")}
                            <span className="ml-2 text-primaryText">
                                ({calculateDuration(exp.startDate, exp.endDate)})
                            </span>
                        </div>

                        {/* Content */}
                        <div className={`ml-8 md:ml-0 md:w-1/2 md:-mt-2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 border-2 border-gray-200">
                                {/* Company Info */}
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-primaryText">{exp.position}</h3>
                                    <a
                                        href={exp.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-secondaryText hover:underline"
                                    >
                                        {exp.company}
                                    </a>
                                </div>

                                {/* Achievements */}
                                <div className="mb-4">
                                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                                    <ul className="list-disc list-inside space-y-1">
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i} className="text-gray-700">{achievement}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tech Stack */}
                                <div>
                                    <h4 className="font-semibold mb-2">Tech Stack:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.techStack.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-iconBg text-primaryText rounded-full text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Date - Visible only on desktop, positioned opposite to content */}
                        <div className={`hidden md:block pt-4 absolute top-0 w-1/2 ${index % 2 === 0
                                ? 'left-0 pr-8 text-right'
                                : 'right-0 pl-8 text-left'
                            } text-sm text-gray-600 pt-3`}>
                            {format(exp.startDate, "MMM yyyy")} - {format(exp.endDate, "MMM yyyy")}
                            <span className="ml-2 text-primaryText">
                                ({calculateDuration(exp.startDate, exp.endDate)})
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExperiencePage;



///// 8ec2ed