import LongBtn from "./components/home_page_comps.js/long_btn";
import SocialIcons from "./components/home_page_comps.js/social_icons";

export default function Home() {
  return (
    <div className="">
      {/* Wrapper for centering the button */}
      <div className="flex justify-center mt-5 mb-0">
        <LongBtn />
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between py-12 px-6">
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
          <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600">
            I design and create{" "}
            <span className="text-green-600">functional</span> and{" "}
            <span className="text-green-600">beautiful</span> applications with{" "}
            passion and <br></br> a focus on <span className="text-blue-600">user experience</span> and{" "}
            <span className="text-blue-600">high quality</span>.
          </p>

          {/* Buttons */}
          <div className="mt-6 md:mt-8 flex space-x-4">
            <button className="px-4 md:px-6 py-2 md:py-3 text-sm md:text-base text-white bg-green-600 rounded-lg shadow-lg hover:bg-green-700">
              Hire me
            </button>
            <button className="px-4 md:px-6 py-2 md:py-3 text-sm md:text-base text-green-600 border-2 border-green-600 rounded-lg shadow-lg hover:bg-green-100">
              Schedule a Meeting
            </button>
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
    </div>
  );
}
