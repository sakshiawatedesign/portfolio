"use client";
import { useEffect, useState } from 'react';
import LongBtn from "./components/home_page_comps.js/long_btn";
import SocialIcons from "./components/home_page_comps.js/social_icons";
import OutLinedBtn from "./components/common_copmps.js/outlined_btn";
import GradientBtn from "./components/common_copmps.js/gradient_btn";
import Spacer from "./components/common/spacer";
import FeatureCard from './components/home_page_comps.js/featured_card'


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

      <div className="flex flex-col-reverse md:flex-row items-center justify-between py-6 px-3">
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
      <div className='text-3xl md:text-3xl lg:text-4xl font-bold leading-tight text-center mb-5  mt-10 md:mt-15 lg:mt-20'>
        The full product development stack.
      </div>
      <div className='text-gray-600 text-center mt-4 lg:w-[70%] md:w-[80%] w-[98%] mx-auto'>
        From designing the interface to implementing your fully featured application - I can provide the full product design process from an idea to a finished hiqh quality app, polished with fantastic design and running on state of the art software.
      </div>

      {/* <Spacer  height={'20px'} className="h-8 md:h-12 lg:h-16" /> */}
      <Spacer className="lg:h-20 h-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 lg:w-[70%] md:w-[80%] w-[98%] mx-auto">


        {/* Card 1 */}
        <FeatureCard
          iconClass="fas fa-mobile-alt"
          title="Mobile App Development"
          description="Developing cross-platform mobile applications with great performance and elegant UI."
          circleAvatarBgColor="#0bc5ea"
        />

        {/* Card 2 */}
        <FeatureCard
          iconClass="fas fa-server"
          title="Backend Development"
          description="Building robust and scalable backend systems with modern technologies."
          circleAvatarBgColor="#ed8936"
        />

        {/* Card 3 */}
        <FeatureCard
          iconClass="fas fa-paint-brush"
          title="UI/UX Design"
          description="Creating intuitive and beautiful user interfaces with great user experience."
          circleAvatarBgColor="#9f7aea"
        />

        {/* Card 4 */}
        <FeatureCard
          iconClass="fas fa-database"
          title="Database Management"
          description="Ensuring data integrity, security, and performance with optimized database solutions."
          circleAvatarBgColor="#38b2ac"
        />
      </div>

    </div >
  );
}
