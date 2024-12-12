import LongBtn from "./components/home_page_comps.js/long_btn";
import SocialIcons from "./components/home_page_comps.js/social_icons";

export default function Home() {
  return (
    <div className="">
      {/* Wrapper for centering the button */}
      <div className="flex justify-center mt-5 mb-5">
        <LongBtn />
      </div>

      <div>
        <div className="bg-white flex flex-col justify-center items-center text-center px-6">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            I'm <span className="text-green-600">Ayush Soni</span>, <br />
            <span className="text-blue-600">fullstack developer</span> <br />
            and <span className="text-green-600">designer</span>.
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg text-gray-600">
            I design and create{" "}
            <span className="text-green-600">functional</span> and{" "}
            <span className="text-green-600">beautiful</span> applications with
            passion and a focus on <span className="text-blue-600">user experience</span> and{" "}
            <span className="text-blue-600">high quality</span>.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex space-x-4">
            <button className="px-6 py-3 text-white bg-green-600 rounded-lg shadow-lg hover:bg-green-700">
              Hire me
            </button>
            <button className="px-6 py-3 text-green-600 border-2 border-green-600 rounded-lg shadow-lg hover:bg-green-100">
              Schedule a Meeting
            </button>
          </div>

          {/* Social Icons */}
          <SocialIcons />
        </div>
        <div></div>
      </div>
    </div>
  );
}
