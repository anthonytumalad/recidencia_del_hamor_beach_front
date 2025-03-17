import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Image1 from "../assets/images/pool.webp";
import Image2 from "../assets/images/lounge.webp";
import Image3 from "../assets/images/dine_1.webp";
import Image4 from "../assets/images/act.webp";
import Image5 from "../assets/images/act_2.webp";
import Image6 from "../assets/images/accomadation3.webp";


const galleryImages = {
  "All photos": [Image1, Image2, Image3, Image4, Image5],
  "Others": [Image1, Image2, Image5],
  "Pools": [Image1, Image6],
  "Lounge": [Image2, Image3],
  "Activities": [Image4, Image5]
};

const categories = [
  { name: "All photos", count: 5 },
  { name: "Others", count: 3 },
  { name: "Pools", count: 2 },
  { name: "Lounge", count: 2 },
  { name: "Activities", count: 2 },
];

function Amenities() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All photos");

  const currentImages = galleryImages[activeCategory];

  React.useEffect(() => {
    if (isGalleryOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isGalleryOpen]);

  const openGallery = (index = 0) => {
    setSelectedImageIndex(index);
    setIsGalleryOpen(true);
  };
  const closeGallery = () => setIsGalleryOpen(false);

  const selectImage = (index) => setSelectedImageIndex(index);
  
  const goToNextImage = () => {
    setSelectedImageIndex((prevIndex) => 
      prevIndex === currentImages.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const goToPrevImage = () => {
    setSelectedImageIndex((prevIndex) => 
      prevIndex === 0 ? currentImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto mt-[150px] md:mt-[200px] px-8 md:px-10 py-20">
        <div className="text-left">
          <div className="group font-raleway">
            <h2 className="text-[30px] md:text-[50px] text-[#2A3B3B] font-thin leading-[1.2em] tracking-[.03em] uppercase font-raleway">
              Amenities & Activities
            </h2>
            <hr className="w-1/4 md:w-1/3 border-t-1 border-[#4a4a4a] mt-5 transition-all duration-300 group-hover:w-2/5 md:group-hover:w-3/5" />
          </div>
        </div>
      </div>

   

      <div className="flex flex-col md:flex-row items-left md:items-start gap-10 md:gap-30 max-w-5xl mx-auto mb-10 px-8 md:px-10">
        <div className="md:w-1/2 text-left">
          <h2 className="text-[25px] md:text-[40px] text-[#2A3B3B] font-thin leading-[1.2em] tracking-[.03em] uppercase font-raleway">
            Guest Support
          </h2>
          <button
            onClick={() => {
              setActiveCategory("Others");
              openGallery(0);
            }}
            className="mt-6 underline tracking-wide cursor-pointer"
          >
            View Gallery
          </button>
        </div>
        <div className="md:w-2/2">
          <p className="text-[14px] md:text-[16px] text-[#4a4a4a] font-light leading-[1.50em] tracking-[.07em] mb-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quidem adipisci, quae id beatae ad sunt suscipit, necessitatibus sint tempore sapiente ipsam fugit iure? Ullam ipsam impedit alias facere rem?
          </p>
          <div className="mb-8 pb-4 border-b border-gray-200 md:border-0">
            <div className="mb-2 text-[13px] font-bold">Traveler Rating</div>
            <div className="flex items-center mb-2">
              <div className="flex text-green-500 text-[13px]">
                <span>★★★★★</span>
              </div>
              <span className="ml-2 text-[13px]">3,707 reviews</span>
            </div>
            <hr className="w-1/2 mb-2 border-t-1 border-[#4a4a4a] hidden md:block md:border-[#4a4a4a]" />
            <a href="#" className="text-[#4a4a4a] font-light leading-[1.5em] tracking-[.05em] text-[15px] hidden md:inline-block">
              Read reviews
            </a>
          </div>
        </div>
      </div>


      <div className="flex flex-col md:flex-row items-left md:items-start gap-10 md:gap-30 max-w-5xl mx-auto mb-10 px-8 md:px-10">
        <div className="md:w-1/2 order-last md:order-first">
          <p className="text-[14px] md:text-[16px] text-[#4a4a4a] font-light leading-[1.50em] tracking-[.07em] mb-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </p>
          <div className="mb-8 pb-4 border-b border-gray-200 md:border-0">
            <div className="mb-2 text-[13px] font-bold">Traveler Rating</div>
            <div className="flex items-center mb-2">
              <div className="flex text-green-500 text-[13px]">
                <span>★★★★★</span>
              </div>
              <span className="ml-2 text-[13px]">3,707 reviews</span>
            </div>
            <hr className="w-1/2 mb-2 border-t-1 border-[#4a4a4a] hidden md:block md:border-[#4a4a4a]" />
            <a href="#" className="text-[#4a4a4a] font-light leading-[1.5em] tracking-[.05em] text-[15px] hidden md:inline-block">
              Read reviews
            </a>
          </div>
        </div>
        <div className="md:w-1/2 text-left order-first md:order-last">
          <h2 className="text-[25px] md:text-[40px] text-[#2A3B3B] font-thin leading-[1.2em] tracking-[.03em] uppercase font-raleway">
            Cozy Lounge Area
          </h2>
          <button
            onClick={() => {
              setActiveCategory("Lounge");
              openGallery(0);
            }}
            className="mt-6 underline tracking-wide cursor-pointer"
          >
            View Gallery
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-left md:items-start gap-10 md:gap-30 max-w-5xl mx-auto px-8 md:px-10 mb-20">
        <div className="md:w-1/2 text-left">
          <h2 className="text-[25px] md:text-[40px] text-[#2A3B3B] font-thin leading-[1.2em] tracking-[.03em] uppercase font-raleway">
            Water Activities
          </h2>
          <button
            onClick={() => {
              setActiveCategory("Activities");
              openGallery(0);
            }}
            className="mt-6 underline tracking-wide cursor-pointer"
          >
            View Gallery
          </button>
        </div>
        <div className="md:w-2/2">
          <p className="text-[14px] md:text-[16px] text-[#4a4a4a] font-light leading-[1.50em] tracking-[.07em] mb-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quidem adipisci, quae id beatae ad sunt suscipit, necessitatibus sint tempore sapiente ipsam fugit iure? Ullam ipsam impedit alias facere rem?
          </p>
          <div className="mb-8 pb-4 border-b border-gray-200 md:border-0">
            <div className="mb-2 text-[13px] font-bold">Traveler Rating</div>
            <div className="flex items-center mb-2">
              <div className="flex text-green-500 text-[13px]">
                <span>★★★★★</span>
              </div>
              <span className="ml-2 text-[13px]">3,707 reviews</span>
            </div>
            <hr className="w-1/2 mb-2 border-t-1 border-[#4a4a4a] hidden md:block md:border-[#4a4a4a]" />
            <a href="#" className="text-[#4a4a4a] font-light leading-[1.5em] tracking-[.05em] text-[15px] hidden md:inline-block">
              Read reviews
            </a>
          </div>
        </div>
      </div>

      {/* Image Gallery Modal - Traveloka Style */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center font-raleway tracking-[0.1em] p-2 sm:p-4">
          <div 
            className={`fixed inset-0 bg-[rgba(35,42,49,0.96)] transition-opacity duration-300 ${
              isGalleryOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={closeGallery}
          />
          
          <div className="relative w-full max-w-[95vw] sm:max-w-5xl transition-all duration-300 overflow-y-auto max-h-[90vh]">
            <div className="w-full py-3 mb-5 px-4 border-b border-gray-700 flex items-center justify-between sticky z-10">
              <h2 className="text-base sm:text-lg text-white font-normal truncate">{activeCategory}</h2>
              <button
                onClick={closeGallery}
                className="text-xl sm:text-2xl text-white hover:text-gray-300"
              >
                ×
              </button>
            </div>

            <div className="w-full flex flex-col">
              <div className="relative py-2 px-2 sm:px-4">
                <button
                  onClick={goToPrevImage}
                  className="absolute left-2 sm:left-4 md:left-20 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center hover:bg-opacity-50 z-10"
                >
                  <span className="text-lg sm:text-xl">&lt;</span>
                </button>
                
                <div className="w-full flex justify-center">
                  <div className="relative w-full max-w-[90vw] sm:max-w-2xl h-[200px] sm:h-[300px] md:h-[400px]">
                    <img
                      src={currentImages[selectedImageIndex]}
                      alt={`${activeCategory} image ${selectedImageIndex + 1}`}
                      className="w-full h-full object-contain sm:object-cover"
                    />
                  </div>
                </div>
                
                <button
                  onClick={goToNextImage}
                  className="absolute right-2 sm:right-4 md:right-20 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center hover:bg-opacity-50 z-10"
                >
                  <span className="text-lg sm:text-xl">&gt;</span>
                </button>
              </div>

              <div className="flex justify-between items-center px-2 sm:px-4 py-2">
                <h3 className="text-white text-sm sm:text-base truncate">{activeCategory}</h3>
                <span className="text-white text-sm">{selectedImageIndex + 1}/{currentImages.length}</span>
              </div>

              <div className="px-2 sm:px-4 py-3 overflow-x-auto">
                <div className="flex space-x-2 justify-start sm:justify-center">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => {
                        setActiveCategory(category.name);
                        setSelectedImageIndex(0);
                      }}
                      className={`whitespace-nowrap px-2 py-1 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm ${
                        activeCategory === category.name
                          ? "bg-[#2A3B3B] text-white"
                          : "bg-gray-300 text-[#2A3B3B]"
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 px-2 sm:px-4 py-3 max-h-48 sm:max-h-64 overflow-y-auto">
                {currentImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => selectImage(index)}
                    className={`${
                      selectedImageIndex === index ? "ring-2 ring-blue-400" : ""
                    } overflow-hidden rounded`}
                  >
                    <img
                      src={img}
                      alt={`${activeCategory} thumbnail ${index + 1}`}
                      className="w-full h-20 sm:h-24 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Amenities;