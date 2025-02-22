"use client";
import { useEffect, useState } from 'react';
import LongBtn from "./components/home_page_comps.js/long_btn";
import SocialIcons from "./components/home_page_comps.js/social_icons";
import OutLinedBtn from "./components/common_copmps.js/outlined_btn";
import GradientBtn from "./components/common_copmps.js/gradient_btn";
import Spacer from "./components/common/spacer";
import FeatureCard from './components/home_page_comps.js/featured_card';
import AnimateOnScroll from './components/AnimateOnScroll';
import Image from 'next/image';

export default function Home() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 770);

      const brElement = document.getElementById('break');
      if (brElement) {
        brElement.style.display = window.innerWidth <= 1080 ? 'none' : 'block';
      }
    };

    // Initial check
    handleResize();

    // Debounce resize events
    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 100);
    };

    window.addEventListener('resize', debouncedResize);

    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, []);

  const redirectToEmail = () => {
    window.location.href = 'mailto:arunvishwakarma3009@gmail.com';
  };

  return (
    <div className="">
      {/* Wrapper for centering the button */}
      <AnimateOnScroll>
        <div className="flex justify-center mt-6">
          <LongBtn />
        </div>
      </AnimateOnScroll>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between py-4 md:py-6 px-3">
        {/* Content Column - First wrap just the content */}
        <div className="w-full md:w-[65%] text-start">
          <AnimateOnScroll delay={200} duration={1200}>
            <div> {/* Extra wrapper div to contain animated content */}
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
              <div className="mt-4 md:mt-8 flex space-x-4">
                <OutLinedBtn text={"Hire me"} onClick={redirectToEmail} />

                <div>
                  {isLargeScreen ? (
                    <GradientBtn text={"View Projects"} onClick={() => window.location.href = '/projects'} />
                  ) : (
                    <GradientBtn
                      text={"View CV"}
                      onClick={() => window.open('/arunResume.pdf', '_blank')}
                    />
                  )}
                </div>
              </div>

              {/* Social Icons */}
              <SocialIcons />
            </div>
          </AnimateOnScroll>
        </div>

        {/* Image Column */}
        <div className="w-full md:w-[35%] mb-6 md:mb-0 md:ml-6">
          <AnimateOnScroll delay={300} duration={1200} direction="right">
            <div className="aspect-square relative">  {/* This ensures width and height are equal */}
              <div className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #319795 0%, #46b97a 100%)',
                  padding: '4px'  // This creates the border thickness
                }}
              >  {/* This wrapper helps maintain the circular shape */}
                <Image
                  src="/profile-img.jpg"
                  alt="Arun Vishwakarma"
                  fill
                  priority
                  className="rounded-full object-cover p-1"
                  sizes="(max-width: 768px) 100vw, 35vw"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      <AnimateOnScroll delay={400} distance={30}>
        <div className='text-3xl md:text-3xl lg:text-4xl font-bold leading-tight text-center mb-5 mt-10 md:mt-15 lg:mt-20'>
          The full product development stack.
        </div>
        <div className='text-gray-600 text-center mt-4 lg:w-[70%] md:w-[80%] w-[98%] mx-auto'>
          From designing the interface to implementing your fully featured application - I can provide the full product design process from an idea to a finished hiqh quality app, polished with fantastic design and running on state of the art software.
        </div>
      </AnimateOnScroll>

      <Spacer className="lg:h-20 h-10" />

      <AnimateOnScroll staggerChildren distance={40} duration={800} easing="cubic-bezier(0.16, 1, 0.3, 1)">
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
            iconClass="fas fa-code"
            title="Data Structures & Algorithms"
            description="Mastering fundamental data structures and algorithms to build efficient and optimized solutions."
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
      </AnimateOnScroll>
    </div>
  );
}