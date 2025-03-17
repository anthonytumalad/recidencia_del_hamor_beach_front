import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import VillaGallery from "../components/roomCards.jsx";


function Rooms () {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row items-left md:items-start gap-10 md:gap-50 max-w-4xl mx-auto mt-[200px] md:mt-[280px] px-8 md:px-10">
      {/* Left Heading */}
      <div className="md:w-1/3 text-left">
        <p className="text-[16px] md:text-[18px] text-[#4a4a4a] font-thin leading-[1.2em] tracking-[.03em] uppercase font-oswald mb-2">Accomadation</p>
        <div className="group">
          <h2 className="text-[40px] md:text-[50px] text-[#2A3B3B] font-thin leading-[1.2em] tracking-[.03em]  uppercase font-raleway">Suites</h2>
          <hr className="w-1/4 md:w-1/2 border-t-1 border-[#4a4a4a] mt-5 transition-all duration-300 group-hover:w-2/5 md:group-hover:w-3/4" />
        </div>
      </div>

      {/* Right Content */}
      <div className="md:w-2/3">
        <h3 className="text-[20px] md:text-[25px] text-[#2A3B3B] font-thin leading-[1.2em] tracking-[.03em]  mb-5 font-raleway">Luxurious Suites in Del Hamor</h3>
        <p className="text-[14px] md:text-[16px] text-[#4a4a4a] font-light leading-[1.50em] tracking-[.07em] mb-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa autem id possimus quos omnis? Itaque at voluptatem sapiente, neque officiis, soluta laudantium fugit explicabo quaerat perferendis dolorum magnam. Deleniti, numquam.
        </p>

        {/* TripAdvisor Rating */}
        <div className="mb-8 pb-4 border-b border-gray-200 md:border-0">
            <div className="mb-2 text-[13px] font-bold">
                Traveler Rating
            </div>
            <div className="flex items-center mb-2">
              <div className="flex text-green-500 text-[13px]">
                  <span>★★★★★</span>
              </div>
                <span className="ml-2 text-[13px]">3,707 reviews</span>
              </div>
              <hr className="w-1/2 mb-2 border-t-1 border-[#4a4a4a] hidden md:block md:border-[#4a4a4a]" />
              <a href="#" className="text-[#4a4a4a] font-light leading-[1.5em] tracking-[.05em] text-[15px] hidden md:inline-block">Read reviews</a>
        </div>
      </div>
      </div>
    <VillaGallery />
      
      <Footer />
    </>  
  );
}
export default Rooms;