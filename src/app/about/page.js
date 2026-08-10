"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import themeColors from "../../lib/theme-colors";
import AnimateOnScroll from '../components/AnimateOnScroll';
import OutLinedBtn from '../components/common_copmps.js/outlined_btn';
import GradientBtn from '../components/common_copmps.js/gradient_btn';
import { FaGraduationCap, FaAward, FaPalette, FaUsers, FaLayerGroup, FaBezierCurve } from 'react-icons/fa6';

function AboutPage() {
  return (
    <div className="min-h-screen py-10 px-4 md:px-8 max-w-5xl mx-auto">
      <AnimateOnScroll>
        <div className="text-center mb-12">
          <h1
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: themeColors.primaryText }}
          >
            About Me
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
            Discover my journey, human-centered design philosophy, and passion for crafting impactful digital experiences.
          </p>
        </div>
      </AnimateOnScroll>

      {/* Main Intro Card */}
      <AnimateOnScroll delay={100} duration={800}>
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-gray-200 flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="w-40 h-40 md:w-52 md:h-52 relative flex-shrink-0">
            <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-tr from-[#319795] to-[#46b97a] shadow-lg">
              <Image
                src="/profile-img.jpg"
                alt="Sakshi Awate"
                fill
                className="rounded-full object-cover p-1"
              />
            </div>
          </div>

          <div className="flex-1 space-y-4 text-left">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-[#2c7a7b] border border-teal-200">
                UI/UX Designer • 3.5+ Years Experience
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
                Sakshi Sunil Awate
              </h2>
              <p className="text-sm font-medium text-gray-500">
                Based in Thane, Maharashtra, India
              </p>
            </div>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              I am a passionate UI/UX Designer with over 3.5+ years of combined experience (2.5+ years full-time and 1 year internship) specializing in end-to-end product design across diverse domains including social platforms, fintech, enterprise cloud applications, and e-commerce.
            </p>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              My approach bridges the gap between deep user empathy and measurable business outcomes. Whether researching complex workflows, architecting scalable design systems, or crafting intuitive interactive prototypes in Figma, I focus on delivering seamless, accessible, and delightful digital experiences.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <GradientBtn
                text="View CV / Resume"
                onClick={() => window.open('/sakshiResume.pdf', '_blank')}
              />
              <Link href="/contact">
                <OutLinedBtn text="Let's Connect" />
              </Link>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Design Pillars */}
      <AnimateOnScroll delay={200} duration={800}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-[#2c7a7b] mb-4">
              <FaUsers className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-2">User-Centered Focus</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Grounding design decisions in authentic user research, usability feedback, and empathy to solve real customer pain points.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4">
              <FaLayerGroup className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-2">Design System Scale</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Creating reusable component libraries and unified tokens that maintain design consistency and accelerate engineering velocity.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center text-pink-600 mb-4">
              <FaBezierCurve className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-2">Pixel-Perfect Execution</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Crafting aesthetic visual layouts, intuitive micro-interactions, and high-fidelity interactive prototypes ready for development handoff.
            </p>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
}

export default AboutPage;