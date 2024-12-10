"use client";

import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import themeColors from "../lib/theme-colors";
import Image from "next/image";

import { Poppins } from "next/font/google";
import { useState, useEffect, useRef } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setMenuOpen((prevState) => !prevState);

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

  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased relative`}>
        {/* Mobile Menu - Add animation classes */}
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
              &#x2715; {/* Close symbol */}
            </button>

            <div className="flex flex-col items-center space-y-4 py-6 pt-12">
              <ul className="space-y-4 text-center">
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
                    href="/about"
                    className="font-medium text-sm hover:bg-[#dfeded] hover:text-white px-4 py-2 rounded-md transition duration-300"
                    style={{ color: themeColors.primaryText }}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs"
                    className="font-medium text-sm hover:bg-[#dfeded] hover:text-white px-4 py-2 rounded-md transition duration-300"
                    style={{ color: themeColors.primaryText }}
                  >
                    Blogs
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
                    href="/contact"
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
                  <button
                    className="px-4 py-2 border-2 text-bold rounded-md bg-white transition duration-300 hover:bg-[#dfeded]"
                    style={{
                      color: themeColors.primaryText,
                      borderColor: themeColors.primaryText,
                    }}
                  >
                    GitHub
                  </button>
                </a>
                <button
                  className="px-4 py-2 rounded-md text-white bg-gradient-to-r from-[#319795] to-[#46b97a] transition duration-300 hover:from-[#225756] hover:to-[#225756]"
                >
                  Resume
                </button>
              </div>
            </div>
          </div>
        </div>

        <header className="text-white p-4">
          <nav className="container mx-auto flex justify-between items-center">
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
                    href="/about"
                    className="font-medium text-sm hover:bg-[#dfeded] hover:text-white px-4 py-2 rounded-md transition duration-300"
                    style={{ color: themeColors.primaryText }}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs"
                    className="font-medium text-sm hover:bg-[#dfeded] hover:text-white px-4 py-2 rounded-md transition duration-300"
                    style={{ color: themeColors.primaryText }}
                  >
                    Blogs
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
                  <button
                    className="px-4 py-2 border-2 text-bold rounded-md bg-white transition duration-300 hover:bg-[#dfeded]"
                    style={{
                      color: themeColors.primaryText,
                      borderColor: themeColors.primaryText,
                    }}
                  >
                    GitHub
                  </button>
                </a>
                <button
                  className="px-4 py-2 rounded-md text-white bg-gradient-to-r from-[#319795] to-[#46b97a] transition duration-300 hover:from-[#225756] hover:to-[#225756]"
                >
                  Resume
                </button>
              </div>
            </div>

            {/* Mobile Hamburger Icon */}
            <button
              className="md:hidden absolute top-4 right-4 z-60 text-black text-3xl"
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
        {children}
      </body>
    </html>
  );
}