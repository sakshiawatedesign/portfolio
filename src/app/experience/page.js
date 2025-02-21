'use client';

import React from "react";
import { format, differenceInMonths } from "date-fns";
import { FaBriefcase } from "react-icons/fa";
import uponlyLogo from '../../assets/images/uponlyTech.jpg'; // Ensure this path is correct
import Image from 'next/image';
import themeColors from "../../lib/theme-colors";


const ExperiencePage = () => {
    const experiences = [
        {
            id: 1,
            company: "Uponly Technologies",
            position: "Flutter Developer",
            address: "Navi Mumbai, Maharashtra (On-site)", // Add this line
            startDate: new Date(2024, 5, 1),
            endDate: '-',
            // logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80",
            logo: uponlyLogo,  // Use imported logo
            website: "https://uponlytech.com/",
            achievements: [
                "Developed and launched 'Uponly One' and 'Uponly Pro' mobile applications on both Play Store and App Store",
                "Enhanced user experience and application performance with optimized Flutter codebase",
                "Implemented robust state management using GetX state management for scalable app architecture",
                "Collaborated closely with cross-functional teams to deliver high-quality products within tight deadlines",
            ],
            techStack: ["Flutter", 'Php', 'Mysql', "Firebase", "GetX", "Google Maps API"],
        },
        // {
        //     id: 2,
        //     company: "Digital Innovations",
        //     position: "Frontend Developer",
        //     startDate: new Date(2020, 6, 1),
        //     endDate: new Date(2021, 11, 31),
        //     logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80",
        //     website: "https://digitalinnovations.com",
        //     achievements: [
        //         "Developed responsive web applications",
        //         "Reduced loading time by 60%",
        //         "Mentored junior developers"
        //     ],
        //     techStack: ["JavaScript", "React", "Redux"],
        //     address: "Bangalore, India" // Add this line
        // }
    ];


    const calculateDuration = (startDate, endDate) => {
        const end = endDate === '-' ? new Date() : endDate;
        const months = differenceInMonths(end, startDate);
        const years = Math.floor(months / 12);
        const remainingMonths = months % 12;
        return `${years > 0 ? `${years} year${years > 1 ? 's' : ''}` : ''} ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
    };


    return (
        <div className="min-h-screen bg-scaffold mt:3 md:p-6 px-6 md:p-8">
            <h1 className="text-3xl font-bold  md:mb-8 mb-4 text-center"
                style={{ color: themeColors.primaryText }}
            >Work Experience</h1>

            <div className="relative max-w-4xl mx-auto">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-[#9ed8d9] transform md:-translate-x-1/2"></div>

                {experiences.map((exp, index) => (
                    <div key={exp.id} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-14`}>
                        {/* Timeline dot with logo */}
                        <div className="absolute left-0 md:left-1/2 w-14 h-14 transform -translate-x-1/2 z-10">
                            <div className="w-full h-full rounded-full border-4 border-[#4faba9] bg-white overflow-hidden">
                                <Image
                                    src={uponlyLogo}
                                    alt={`${exp.company} logo`}
                                    className="object-cover"
                                    width={60}
                                    height={60}
                                />
                            </div>
                        </div>

                        {/* Date - Visible only on mobile */}
                        <div className="md:hidden text-sm font-semibold text-gray-600 pt-4 mb-2 ml-8">
                            {format(exp.startDate, "MMM yyyy")} - {exp.endDate === '-' ? 'Present' : format(exp.endDate, "MMM yyyy")}
                            <span className="ml-2 text-primaryText font-semibold">
                                ({calculateDuration(exp.startDate, exp.endDate)})
                            </span>
                        </div>

                        {/* Content */}
                        <div className={`ml-8 md:ml-0 md:w-1/2  md:mt-4 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 lg:hover:scale-105 border-2 border-gray-200"
                                style={{ borderColor: themeColors.primaryText }}
                            >
                                {/* Company Info */}
                                {/* Company Info */}
                                <div className="mb-3">
                                    <h3 className="text-xl font-bold text-primaryText">{exp.position}</h3>
                                    <a
                                        href={exp.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-secondaryText hover:underline font-bold text-sm"
                                        style={{ color: themeColors.primaryText }}
                                    >
                                        {exp.company}
                                    </a>
                                    <p className="text-xs text-gray-500">{exp.address}</p> {/* New Line for Address */}
                                </div>


                                {/* Achievements */}
                                <div className="mb-4">
                                    <ul className="list-none space-y-2">
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i} className="text-gray-700 text-sm pl-4 relative">
                                                <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-gray-700 rounded-full"></span>
                                                <span className="inline-block">{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tech Stack */}
                                <div>
                                    <div className="flex flex-wrap gap-3">
                                        {exp.techStack.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-4 py-2 bg-[#e1ebeb] font-bold rounded-xl shadow-sm border border-[#cde3e4] text-xs"
                                                style={{ backgroundColor: themeColors.iconBg, color: themeColors.secondaryText }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Date - Visible only on desktop, positioned opposite to content */}
                        <div className={`hidden md:block font-semibold pt-4 mr-8 absolute top-0 w-1/2 ${index % 2 === 0
                            ? 'left-0 pr-8 text-right'
                            : 'right-0 pl-8 text-left'
                            } text-sm text-gray-600 pt-3`}>
                            {format(exp.startDate, "MMM yyyy")} - {exp.endDate === '-' ? 'Present' : format(exp.endDate, "MMM yyyy")}
                            <span className="ml-2  mr-2 text-primaryText">
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