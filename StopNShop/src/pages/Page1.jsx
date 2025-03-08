
import { useState, useEffect } from "react";
import { GlowingEffectDemoSecond } from "../components/Categories";
import Footers from "../components/footer";
import Carousel from "../components/infinitemoving";
import Navbar from "../components/navbar";
import { NewArrivals } from "../components/New";
import Stats from "../components/stats";

import image1 from "../assets/242965ed29f6d45228ece0cb5628fb70.jpg";
import image2 from "../assets/download.jpg";
import image3 from "../assets/be2f2c44c55bae4cea3b2c2557a908fe.jpg";
import image4 from "../assets/download (1).jpg";


import bgImage from "../assets/download.jpg";

function Page1() {
  // State to track screen size
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar />
      <div
        className={`relative h-screen w-screen flex flex-col lg:flex-row items-center justify-between px-4 lg:px-16 overflow-hidden transition-all duration-300 
          bg-neutral-200 lg:bg-none`}
        style={{
          backgroundImage: isLargeScreen ? "none" : `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Left Content (Text, Button, Stats) */}
        <div className="lg:w-1/2 flex flex-col items-center sm:pt-20 md:pt-20 lg:items-start text-center lg:text-left space-y-6 pt-12 lg:pt-20">
          <div
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold transition-all duration-300 xs:text-white sm:text-white md:text-white lg:text-neutral-900"
            style={{ fontFamily: "Poppins" }}
          >
            FIND CLOTHES <br /> THAT MATCH <br /> YOUR STYLE
          </div>

          <div
            className="text-lg sm:text-xl font-light transition-all duration-300 xs:text-white sm:text-white md:text-white lg:text-neutral-900"
            style={{ fontFamily: "Poppins" }}
          >
            Browse through our collection of stylish clothes and find the
            perfect outfit that suits your taste and style.
          </div>

          <button className="h-12 rounded-full w-40 sm:w-48 bg-black text-white text-sm sm:text-base">
            Shop Now
          </button>

          <Stats />
        </div>

        {/* Right Content (Images) - Show Only on Large Screens (>=1024px) */}
        {isLargeScreen && (
          <div className="hidden lg:flex lg:w-1/2 mt-10 lg:mt-0 justify-end pr-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 shadow-black lg:w-3/4">
              <img
                src={image1}
                className="w-full h-80 object-cover rounded-t-full shadow-lg"
                alt="Fashion Item 1"
              />
              <img
                src={image2}
                className="w-full h-full object-contain rounded-lg shadow-lg"
                alt="Fashion Item 2"
              />
              <img
                src={image3}
                className="w-full h-full object-cover rounded-lg shadow-lg"
                alt="Fashion Item 3"
              />
              <img
                src={image4}
                className="w-full h-80 object-cover rounded-b-full shadow-lg"
                alt="Fashion Item 4"
              />
            </div>
          </div>
        )}
      </div>
      <Carousel />
      <NewArrivals />
      <div className="h-full w-screen rounded-t-2xl bg-black mt-10 p-10">
        <GlowingEffectDemoSecond />
      </div>
      <Footers />
    </>
  );
}

export default Page1;
