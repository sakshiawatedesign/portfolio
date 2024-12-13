"use client";
import { useEffect, useState } from 'react';
import LongBtn from "./components/home_page_comps.js/long_btn";
import SocialIcons from "./components/home_page_comps.js/social_icons";
import OutLinedBtn from "./components/common_copmps.js/outlined_btn";
import GradientBtn from "./components/common_copmps.js/gradient_btn";

export default function Home() {

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 770);
    };

    // Set initial value
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const brElement = document.getElementById('break');
      if (window.innerWidth <= 1080) {
        brElement.style.display = 'none';
      } else {
        brElement.style.display = 'block';
      }
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const redirectToEmail = () => {
    window.location.href = 'mailto:arunvishwakarma3009@gmail.com';
  };
  return (
    <div className="">
      {/* Wrapper for centering the button */}
      <div className="flex justify-center mt-3">
        <LongBtn />
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between py-6 px-6">
        {/* Content Column - Full width on mobile, half width on desktop */}
        <div className="w-full md:w-[65%] text-start">
          {/* Main Heading - Smaller text on mobile */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            I'm <span className="gradient-text">Arun Vishwakarma,</span> <br />
            <span>Mobile</span> <span className="gradient-text">App Developer</span> <br />
            <span>both</span> <span className="gradient-text">Android</span> <br />
            <span>and</span> <span className="gradient-text">IOS</span> <br />
          </h1>

          {/* Subheading */}
          <p className="mt-4 md:mt-6 text-base md:text-md text-gray-600">
            I design and develop{" "}
            <span style={{ fontWeight: "700" }} className="gradient-text">functional</span> and{" "}
            <span style={{ fontWeight: "700" }} className="gradient-text">beautiful</span> mobile applications with{" "}
            passion and <br id="break" style={{ display: 'block' }} /> a focus on <span style={{ fontWeight: "700" }} className="gradient-text">user experience</span> and{" "}
            <span style={{ fontWeight: "700" }} className="gradient-text">high quality</span>.
          </p>

          {/* Buttons */}
          <div className="mt-6 md:mt-8 flex space-x-4">
            <OutLinedBtn text={"Hire me"} onClick={redirectToEmail} />

            <div>
              {isLargeScreen ? (
                <GradientBtn text={"View Projects"} onClick={() => { }} />
              ) : (
                <GradientBtn text={"View CV"} onClick={() => { }} />
              )}
            </div>
          </div>

          {/* Social Icons */}
          <SocialIcons />
        </div>

        {/* Image Column - Full width on mobile, half width on desktop */}
        <div className="w-full md:w-[35%] mb-6 md:mb-0 md:ml-6">
          {/* Placeholder for image - replace with actual image component */}
          <div className="bg-gray-200 h-64 md:h-96 flex items-center justify-center">
            Image Here
          </div>
        </div>
      </div>
    </div >
  );
}
