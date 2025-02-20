"use client";

import "./globals.css";
import Link from "next/link";
import React, { useCallback } from "react";
import themeColors from "../lib/theme-colors";
import Image from "next/image";
import OutLinedBtn from "./components/common_copmps.js/outlined_btn";
import GradientBtn from "./components/common_copmps.js/gradient_btn";
import { Poppins } from "next/font/google";
import { useState, useEffect, useRef } from "react";
import { usePathname } from 'next/navigation';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const mainContentRef = useRef(null);
  const pathname = usePathname(); // Get the current path

  const toggleMenu = () => setMenuOpen((prevState) => !prevState);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest('button[aria-label="Toggle Menu"]')
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // Initialize and handle scroll animations - runs on mount and when path changes
  const initializeAnimations = useCallback(() => {
    // Make sure we're in the browser
    if (typeof window === 'undefined') return;
    
    // Add the ready class to body
    document.body.classList.add("scroll-animation-ready");
    
    // Small timeout to ensure DOM is ready after navigation
    setTimeout(() => {
      const animatableElements = document.querySelectorAll('.animate-on-scroll');
      
      // Create observer
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else if (entry.boundingClientRect.top > 0) {
            // Only remove visible class if element is above viewport
            entry.target.classList.remove("visible");
          }
        });
      }, {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px"
      });
      
      // Observe all elements
      animatableElements.forEach(element => {
        // Reset animation state on route change
        element.classList.remove("visible");
        observer.observe(element);
      });
      
      return () => {
        animatableElements.forEach(element => observer.unobserve(element));
      };
    }, 100);
  }, []);

  // Run animation initialization on mount and route changes
  useEffect(() => {
    const cleanup = initializeAnimations();
    return () => {
      if (cleanup) cleanup();
    };
  }, [pathname, initializeAnimations]);

  return (
    <html lang="en">
      <head>
        <style jsx global>{`
        .scroll-animation-ready .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                     opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, opacity;
        }

        .scroll-animation-ready .animate-on-scroll[data-direction="right"] {
          transform: translateX(30px);
        }

        .scroll-animation-ready .animate-on-scroll[data-direction="left"] {
          transform: translateX(-30px);
        }

        .scroll-animation-ready .animate-on-scroll[data-direction="down"] {
          transform: translateY(-30px);
        }

        .scroll-animation-ready .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0) translateX(0);
        }
        `}</style>
      </head>
      <body className={`${poppins.variable} antialiased relative`}>
        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`
            md:hidden 
            fixed 
            top-0 
            left-0 
            w-full 
            h-full 
            z-50 
            bg-white 
            shadow-md 
            transform 
            transition-all 
            duration-300 
            ease-in-out 
            ${menuOpen
              ? "opacity-100 scale-y-100 pointer-events-auto"
              : "opacity-0 scale-y-0 pointer-events-none"
            } 
            origin-top
          `}
        >
          <div className="relative">
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-2xl font-bold"
              style={{ color: "#2c7a7b" }}
              aria-label="Close Menu"
            >
              &#x2715;
            </button>

            <div className="flex flex-col items-center space-y-4 py-6 pt-12">
              <ul className="space-y-4 text-center">
                <li>
                  <Link
                    href="/"
                    onClick={toggleMenu}
                    className="font-medium text-sm hover:bg-[#dfeded] hover:text-white px-4 py-2 rounded-md transition duration-300"
                    style={{ color: themeColors.primaryText }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    onClick={toggleMenu}
                    className="font-medium text-sm hover:bg-[#dfeded] hover:text-white px-4 py-2 rounded-md transition duration-300"
                    style={{ color: themeColors.primaryText }}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/experience"
                    onClick={toggleMenu}
                    className="font-medium text-sm hover:bg-[#dfeded] hover:text-white px-4 py-2 rounded-md transition duration-300"
                    style={{ color: themeColors.primaryText }}
                  >
                    Experience
                  </Link>
                </li>
                <li>
                  <Link
                    href="/skills"
                    onClick={toggleMenu}
                    className="font-medium text-sm hover:bg-[#dfeded] hover:text-white px-4 py-2 rounded-md transition duration-300"
                    style={{ color: themeColors.primaryText }}
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    onClick={toggleMenu}
                    className="font-medium text-sm hover:bg-[#dfeded] hover:text-white px-4 py-2 rounded-md transition duration-300"
                    style={{ color: themeColors.primaryText }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/ArunVishwakarma30"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <OutLinedBtn
                    onClick={toggleMenu}
                    text="GitHub"
                  />
                </a>
                <GradientBtn
                  text="Resume"
                  onClick={toggleMenu}
                />
              </div>
            </div>
          </div>
        </div>

        <header className="fixed top-0 left-0 right-0 bg-white z-40">
          <nav className="container mx-auto flex justify-between items-center p-4">
            {/* Logo */}
            <div className="text-xl font-bold">
              <a href="/">
                <Image
                  src="/portfolio_logo.svg"
                  alt="Portfolio Logo"
                  width={43}
                  height={43}
                />
              </a>
            </div>

            {/* Desktop Navigation and Buttons */}
            <div className="flex items-center space-x-6">
              <ul className="hidden md:flex space-x-6 font-poppins">
                <li>
                  <Link
                    href="/"
                    className="font-medium text-sm hover:bg-[#dfeded] hover:text-white px-4 py-2 rounded-md transition duration-300"
                    style={{ color: themeColors.primaryText }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="font-medium text-sm hover:bg-[#dfeded] hover:text-white px-4 py-2 rounded-md transition duration-300"
                    style={{ color: themeColors.primaryText }}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/experience"
                    className="font-medium text-sm hover:bg-[#dfeded] hover:text-white px-4 py-2 rounded-md transition duration-300"
                    style={{ color: themeColors.primaryText }}
                  >
                    Experience
                  </Link>
                </li>
                <li>
                  <Link
                    href="/skills"
                    className="font-medium text-sm hover:bg-[#dfeded] hover:text-white px-4 py-2 rounded-md transition duration-300"
                    style={{ color: themeColors.primaryText }}
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="font-medium text-sm hover:bg-[#dfeded] hover:text-white px-4 py-2 rounded-md transition duration-300"
                    style={{ color: themeColors.primaryText }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>

              {/* Desktop Buttons */}
              <div className="hidden md:flex space-x-4">
                <a
                  href="https://github.com/ArunVishwakarma30"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <OutLinedBtn
                    text="GitHub"
                  />
                </a>
                <GradientBtn
                  text="Resume"
                />
              </div>
            </div>

            {/* Mobile Hamburger Icon */}
            <button
              className="md:hidden absolute top-6 right-4 z-60 text-black text-3xl"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#2c7a7b"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </nav>
        </header>
        <main ref={mainContentRef} className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}