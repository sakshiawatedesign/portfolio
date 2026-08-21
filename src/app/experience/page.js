"use client";

import React from "react";
import { format, differenceInMonths } from "date-fns";
import mypcotLogo from "../../assets/images/mypcotInfotech.jpeg";
import sundayTechLogo from "../../assets/images/sunday_tech_logo.jpeg";
import porlobLogo from "../../assets/images/porlob_technologies_logo.jpeg";
import imdLogo from "../../assets/images/imd_img.jpeg";
import Image from "next/image";
import themeColors from "../../lib/theme-colors";
import { 
  FaBriefcase, 
  FaLaptopCode, 
  FaPalette, 
  FaCloudSun, 
  FaHandHoldingHand,
  FaCalendarDays,
  FaLocationDot 
} from "react-icons/fa6";
import AnimateOnScroll from "../components/AnimateOnScroll";

const ExperiencePage = () => {
  const experiences = [
    {
      id: 1,
      company: "Mypcot Infotech",
      position: "UI/UX Designer",
      address: "Mumbai, Maharashtra (On-site)",
      startDate: new Date(2025, 11, 1), // Dec 2025
      endDate: "-",
      logo: mypcotLogo,
      icon: <FaPalette className="text-white w-6 h-6" />,
      accentColor: "#2c7a7b",
      website: "https://www.mypcot.com/",
      achievements: [
        "UI/UX Designer at Mypcot Infotech with hands-on experience in end-to-end product design.",
        "Designed and improved user experiences for dating apps, chatting platforms, and enquiry-based applications.",
        "Created user flows, wireframes, high-fidelity UI designs, interactive prototypes, and reusable design systems.",
        "Collaborated directly with clients and cross-functional teams to deliver user-centered digital solutions.",
      ],
      techStack: [
        "Figma",
        "Figma Jam",
        "UI Design",
        "UX Strategy",
        "Design Systems",
        "Wireframing",
        "Prototyping",
      ],
    },
    {
      id: 2,
      company: "SundayTech",
      position: "UI/UX Designer",
      address: "Mumbai, Maharashtra",
      startDate: new Date(2024, 5, 1), // June 2024
      endDate: new Date(2025, 7, 31), // Aug 2025
      logo: sundayTechLogo,
      icon: <FaLaptopCode className="text-white w-6 h-6" />,
      accentColor: "#6366f1",
      website: "#",
      achievements: [
        "Designed responsive web and mobile interfaces using Figma for diverse client applications.",
        "Created scalable design systems, wireframes, component libraries, and high-fidelity prototypes.",
        "Collaborated closely with cross-functional engineering teams to deliver seamless user-centered design solutions.",
        "Conducted usability testing and iteration cycles to optimize user flows and engagement metrics.",
      ],
      techStack: [
        "Figma",
        "Design Systems",
        "Wireframing",
        "High-Fidelity Prototyping",
        "Responsive Web & Mobile",
        "Cross-Functional Collaboration",
      ],
    },
    {
      id: 3,
      company: "Porlob Technology",
      position: "UI/UX Designer",
      address: "Mumbai, Maharashtra",
      startDate: new Date(2023, 10, 1), // Nov 2023
      endDate: new Date(2024, 4, 31), // May 2024
      logo: porlobLogo,
      icon: <FaBriefcase className="text-white w-6 h-6" />,
      accentColor: "#ec4899",
      website: "#",
      achievements: [
        "Partnered with clients to design intuitive user interfaces for digital platforms.",
        "Delivered end-to-end design solutions strictly aligned with target user needs and business goals.",
        "Structured information architecture, user journeys, and component guidelines for client platforms.",
      ],
      techStack: [
        "UI Design",
        "UX Research",
        "Information Architecture",
        "Figma",
        "Client Collaboration",
      ],
    },
    {
      id: 4,
      company: "Freelancing",
      position: "UI/UX Design Freelancer",
      address: "Remote / Client-based",
      startDate: new Date(2023, 5, 1), // June 2023
      endDate: new Date(2023, 9, 31), // Oct 2023
      icon: <FaHandHoldingHand className="text-white w-6 h-6" />,
      accentColor: "#f59e0b",
      website: "#",
      achievements: [
        "Partnered with multiple independent clients to design intuitive user interfaces for digital platforms.",
        "Delivered custom UX/UI solutions tailored to specific user pain points and growth metrics.",
        "Created wireframes, interactive mobile prototypes, and visual assets for startup MVPs.",
      ],
      techStack: [
        "UI/UX Design",
        "Wireframing",
        "Figma",
        "Interaction Design",
        "User Flow Mapping",
      ],
    },
    {
      id: 5,
      company: "IMD (India Meteorological Department)",
      position: "UI/UX Design Intern",
      address: "Mumbai / Pune, Maharashtra",
      startDate: new Date(2022, 5, 1), // June 2022
      endDate: new Date(2023, 4, 31), // May 2023
      logo: imdLogo,
      icon: <FaCloudSun className="text-white w-6 h-6" />,
      accentColor: "#0ea5e9",
      website: "#",
      achievements: [
        "Analyzed user needs and designed intuitive features for a real-time weather application.",
        "Focused on clear data visualization, easy navigation, and real-time weather updates for better user experience.",
        "Created low and high-fidelity mockups for weather forecasting maps, temperature alerts, and localized widgets.",
      ],
      techStack: [
        "User Research",
        "Data Visualization",
        "Information Architecture",
        "Wireframing",
        "Weather App UX",
      ],
    },
  ];

  const calculateDuration = (startDate, endDate) => {
    const end = endDate === "-" ? new Date() : endDate;
    const months = Math.max(1, differenceInMonths(end, startDate));
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    if (years > 0 && remainingMonths > 0) {
      return `${years} yr${years > 1 ? "s" : ""} ${remainingMonths} mo${remainingMonths > 1 ? "s" : ""}`;
    } else if (years > 0) {
      return `${years} yr${years > 1 ? "s" : ""}`;
    } else {
      return `${remainingMonths} mo${remainingMonths > 1 ? "s" : ""}`;
    }
  };

  const sortedExperiences = [...experiences].sort((a, b) => {
    if (a.endDate === "-" && b.endDate !== "-") return -1;
    if (a.endDate !== "-" && b.endDate === "-") return 1;
    return b.startDate - a.startDate;
  });

  return (
    <div className="min-h-screen bg-scaffold mt-3 md:p-6 px-4 md:p-8 max-w-5xl mx-auto">
      <AnimateOnScroll>
        <div className="text-center mb-10">
          <h1
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: themeColors.primaryText }}
          >
            Work Experience
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
            Over 3.5+ years of combined experience designing user-centric web and mobile products across diverse industries and teams.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-[#2c7a7b] via-[#46b97a] to-[#9ed8d9] transform md:-translate-x-1/2"></div>

        {sortedExperiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`relative flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
            {/* Timeline dot with logo/icon */}
            <div className="absolute left-6 md:left-1/2 w-12 h-12 transform -translate-x-1/2 z-10">
              <div 
                className="w-full h-full rounded-2xl shadow-lg border-2 border-white flex items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-110 bg-white"
                style={{ backgroundColor: exp.logo ? "#ffffff" : (exp.accentColor || "#2c7a7b") }}
              >
                {exp.logo ? (
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="object-contain w-full h-full p-1"
                    width={48}
                    height={48}
                  />
                ) : (
                  exp.icon
                )}
              </div>
            </div>

            {/* Date - Visible only on mobile */}
            <div className="md:hidden text-xs font-semibold text-gray-600 pt-2 mb-2 ml-16 flex items-center gap-1.5">
              <FaCalendarDays className="text-[#2c7a7b] w-3.5 h-3.5" />
              <span>
                {format(exp.startDate, "MMM yyyy")} -{" "}
                {exp.endDate === "-"
                  ? "Present"
                  : format(exp.endDate, "MMM yyyy")}
              </span>
              <span className="text-[#2c7a7b] font-bold">
                ({calculateDuration(exp.startDate, exp.endDate)})
              </span>
            </div>

            {/* Content Card */}
            <div
              className={`ml-14 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? "md:pl-10" : "md:pr-10"
              }`}
            >
              <div
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#2c7a7b] group"
              >
                {/* Company Info */}
                <div className="mb-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-[#2c7a7b] transition-colors">
                      {exp.position}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className="font-bold text-sm"
                      style={{ color: themeColors.primaryText }}
                    >
                      {exp.company}
                    </span>
                  </div>

                  <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                    <FaLocationDot className="text-gray-400 w-3 h-3" />
                    {exp.address}
                  </p>
                </div>

                {/* Achievements */}
                <div className="mb-5">
                  <ul className="space-y-2.5">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-gray-700 text-xs sm:text-sm pl-4 relative leading-relaxed"
                      >
                        <span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-[#2c7a7b] rounded-full"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech & Tools Stack */}
                <div className="pt-3 border-t border-gray-100">
                  <p className="text-[11px] font-semibold uppercase text-gray-400 tracking-wider mb-2">
                    Key Tools & Skills
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-teal-50/70 hover:bg-teal-100/70 font-semibold rounded-lg border border-teal-200/60 text-[11px] text-[#2c7a7b] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Date - Visible only on desktop, positioned opposite to content */}
            <div
              className={`hidden md:block font-semibold absolute top-3 w-1/2 ${
                index % 2 === 0
                  ? "left-0 pr-12 text-right"
                  : "right-0 pl-12 text-left"
              } text-sm text-gray-600`}
            >
              <div className="flex items-center gap-1.5 justify-end" style={{ justifyContent: index % 2 === 0 ? "flex-end" : "flex-start" }}>
                <FaCalendarDays className="text-[#2c7a7b] w-4 h-4" />
                <span>
                  {format(exp.startDate, "MMM yyyy")} -{" "}
                  {exp.endDate === "-"
                    ? "Present"
                    : format(exp.endDate, "MMM yyyy")}
                </span>
              </div>
              <span className="text-[#2c7a7b] font-bold text-xs block mt-1">
                {calculateDuration(exp.startDate, exp.endDate)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;

