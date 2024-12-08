"use client";
import React, { useState } from 'react';


const ResponsiveNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Theme colors defined directly in the component
  const themeColors = {
    primaryText: '#1a202c', // Dark gray, replace with your preferred color
    primaryBackground: '#ffffff', // White background
    accentGradientFrom: '#319795', // Teal
    accentGradientTo: '#46b97a' // Green
  };

  const poppins = Poppins({
    subsets: ["latin"], // Use the correct subset(s) based on your language
    weight: ["400", "600", "700", "800", "900"], // Add weights as needed
    variable: "--font-poppins", // Define a custom CSS variable for this font
  });

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/contact", label: "About" },
    { href: "/about", label: "Blogs" },
    { href: "/about", label: "Experience" },
    { href: "/about", label: "Contact" }
  ];

  return (
    <header className="text-white p-4">
      <nav className="container mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <div className="text-xl font-bold">
          <svg
            width="43"
            height="43"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="45" fill="#319795" />
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="white"
              fontSize="40"
            >
              P
            </text>
          </svg>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Navigation Links */}
          <ul className="flex space-x-6 font-sans">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-medium text-sm hover:bg-gray-200 px-4 py-2 rounded-md transition duration-300"
                  style={{ color: themeColors.primaryText }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex space-x-4">
            {/* GitHub Button */}
            <button
              className="px-4 py-0 border-2 text-bold rounded-md bg-white transition duration-300 hover:bg-gray-100"
              style={{
                color: themeColors.primaryText,
                borderColor: themeColors.primaryText,
              }}
            >
              Github
            </button>

            {/* Resume Button */}
            <button
              className="px-4 py-2 rounded-md text-white bg-gradient-to-r from-[#319795] to-[#46b97a] transition duration-300 hover:opacity-90"
            >
              Resume
            </button>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 border-2 rounded-md"
            style={{
              color: themeColors.primaryText,
              borderColor: themeColors.primaryText,
            }}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 mt-4">
            <div className="flex flex-col items-center space-y-4 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-medium text-sm px-4 py-2 rounded-md transition duration-300"
                  style={{ color: themeColors.primaryText }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile Buttons */}
              <div className="flex space-x-4">
                {/* GitHub Button */}
                <button
                  className="px-4 py-2 border-2 text-bold rounded-md bg-white transition duration-300 hover:bg-gray-100"
                  style={{
                    color: themeColors.primaryText,
                    borderColor: themeColors.primaryText,
                  }}
                >
                  Github
                </button>

                {/* Resume Button */}
                <button
                  className="px-4 py-2 rounded-md text-white bg-gradient-to-r from-[#319795] to-[#46b97a] transition duration-300 hover:opacity-90"
                >
                  Resume
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default ResponsiveNavbar;