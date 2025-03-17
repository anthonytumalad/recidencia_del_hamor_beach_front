import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronDown } from 'lucide-react';
import { Link } from "react-router-dom";


import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';

import Navbar from "../components/Navbar.jsx";
import Carousel from "../components/carousel.jsx";
import Footer from "../components/Footer.jsx";


import Accomadation1 from "../assets/images/accomadation1.webp";
import Accomadation2 from "../assets/images/Accomadation2.webp";
import Accomadation3 from "../assets/images/accomadation3.webp";
import ResortImage from "../assets/images/ResortImage.webp";
import FlexibleEscape from "../assets/images/FlexibleEscapes.webp";
import Image1 from "../assets/images/backg.webp"
import FollowUs1 from "../assets/images/FollowUs1.jpg"; 
import FollowUs2 from "../assets/images/FollowUs2.webp"; 
import FollowUs3 from "../assets/images/FollowUs3.webp";
import FollowUs4 from "../assets/images/FollowUs4.webp"; 
import FollowUs5 from "../assets/images/FollowUs5.webp"; 
import FollowUs6 from "../assets/images/FollowUs6.webp"; 
import FollowUs7 from "../assets/images/FollowUs7.webp"; 




function HomePage() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = "50ceb2a86c10015047314f7cbe6c07f2";
  const city = "Sorsogon";
  const country = "PH";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather`,
          {
            params: {
              q: `${city},${country}`,
              units: "metric", // Converts to Celsius
              appid: API_KEY,
            },
          }
        );
        setWeather(response.data);
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

 
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (in milliseconds)
      once: true, // animation happens only once
      offset: 100, // how far from the element before animation starts
    });
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage(e);
      if (e.key === 'ArrowLeft') prevImage(e);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);


  const images = [
    { src: FollowUs1, caption: "@tonton" },
    { src: FollowUs2, caption: "@lorem" },
    { src: FollowUs3, caption: "@lebron" },
    { src: FollowUs4, caption: "@kobe" },
    { src: FollowUs5, caption: "@kdurant" },
    { src: FollowUs6, caption: "@lebron" },
    { src: FollowUs7, caption: "@tonton" }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipisc?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    },
  ];

  
 

  return (
    <>
      <Navbar />
      <Carousel />

      <div className="max-w-6xl mx-auto px-4 py-7 md:py-20 mt-[150px] md:mt-0">
      {/* Resort Header */}
      <div className="text-center"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div className="text-[12px] md:text-[14px] my-2 uppercase tracking-[.07em] font-bold font-oswald">Residencia del hamor</div>
        <div className="text-[25px] md:text-5xl text-[#2A3B3B] font-thin leading-[1.2em] tracking-[.03em] uppercase mb-5 md:mb-15 font-raleway">
        Enjoy stunning views, luxury, <br />and pure relaxation
        </div>
      </div>

      {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-17"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          {/* Resort Image */}
          <div className="lg:w-3/5">
            <img 
              src={ResortImage}
              alt="backimage" 
              className="w-full h-[200px] md:h-[380px] object-cover shadow-lg shadow-gray-500/50"
            />
          </div>

          <div className="lg:w-2/5 lg:px-0">
            <div className="flex items-center mb-2 md:py-0 md:border-0">
              <div className="text-[13px] md:text-[14px] text-[#4a4a4a] font-bold font-oswald
              tracking-[.07em]">
                <span>LOCAL TIME</span>
                <span className="ml-2">9:00 AM</span>
              </div>
              <span className="mx-4 text-gray-400">|</span>
              <div className="text-[13px] md:text-[14px] text-[#4a4a4a] font-bold font-oswald
              tracking-[.07em]">
                <span className="">WEATHER</span>
                <span className="ml-2">26°C</span>
                <span className="ml-1">80°F</span>
              </div>
            </div>
            
            {/* Resort Description */}
            <div className="mb-5 md:mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <p className="text-[14px] md:text-[16px] text-[#4a4a4a] font-light leading-[1.50em] tracking-[.07em]">
                Escape to My Residencia del Hamor, a luxurious retreat where elegance meets tranquility. Indulge in a world of comfort and romance, surrounded by breathtaking views and unparalleled hospitality. At My Residencia del Hamor, a premier five-star destination, we invite you to create unforgettable memories on the getaway of a lifetime.
              </p>
              
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-[14px] mt-2 md:text-[16px] text-[#4a4a4a] font-light leading-[1.50em] tracking-[.07em]">
                Nestled in the heart of Sorsogon, Residencia del Hamor
                offers a serene retreat with breathtaking views, nature-inspired accommodations, and world-class amenities.
                </p>
              </div>

              {/* Read More / Read Less Button */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-5 text-[14px] md:text-[15px] text-[#2A3B3B] font-light leading-[1.50em] tracking-[.05em] hover:text-[#2A3B3B] transition duration-300"
              >
                {isExpanded ? "Close" : "Read More"}
              </button>
            </div>
            
            {/* TripAdvisor Rating */}
            <div className="mb-8 pb-4 border-b border-gray-200 md:border-0"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="mb-2 text-[13px] font-bold">
                {window.innerWidth < 768 ? "Tripadvisor Traveler Rating" : "Traveler Rating"}
              </div>
              <div className="flex items-center mb-2">
                <div className="flex text-green-500 text-[13px]">
                  <span>★★★★★</span>
                </div>
                <span className="ml-2 text-[13px]">3,707 reviews</span>
              </div>
              <hr className="w-full mb-2 border-t-1 border-[#4a4a4a] hidden md:block md:border-[#4a4a4a]" />
              <a href="#" className="text-[#4a4a4a] font-light leading-[1.5em] tracking-[.05em] text-[13px] hidden md:inline-block">Read reviews</a>
            </div>
          </div>
      </div>
  
        <div 
        className="mt-0 md:mt-8 px-4 lg:px-0"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div className="flex flex-col md:flex-row  md:items-start">
          {/* Highlights Section - Left Side */}
          <div className="md:w-2/2">
            <h2 className="text-[13px] md:text-[14px] text-[#4a4a4a] font-bold font-oswald
              tracking-[.07em]">
              HIGHLIGHTS
            </h2>
            <ul className="space-y-4 md:space-y-2 max-w-2xl mt-3 text-[#4a4a4a] font-light md:text-[16px] leading-[1.50em] tracking-[.07em] mb-1 md:ml-5 ml-0 text-[14px]">
              <li className="flex items-start">
                <span className="mr-2 md:text-base text-lg">•</span>
                <span>67 villas, including Over Water, Ocean, and Beach Villas</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 md:text-base text-lg">•</span>
                <span>Only a 30-minute journey from Malé International Airport</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 md:text-base text-lg">•</span>
                <span>Couples' spa journeys and Designer Dining</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 md:text-base text-lg">•</span>
                <span>Enjoy access to facilities at sister resort, Anantara Dhigu</span>
              </li>
            </ul>
          </div>
          
          {/* Check-in/Check-out - Right Side */}
          <div
            className="mt-6 md:mt-0 md:w-1/3 flex justify-center md:justify-start"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="py-3 ">
              <div className="flex flex-row items-center md:flex-col md:items-start md:space-y-4 text-[13px] md:text-[18px] text-[#4a4a4a] font-bold font-oswald tracking-[.07em] gap-4 md:gap-0 ">
                <div className="flex items-center">
                  <span className="font-medium">CHECK-IN</span>
                  <span className="ml-2">2:00 PM</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium">CHECK-OUT</span>
                  <span className="ml-2">12:00 PM</span>
                </div>
              </div>
            </div>
          </div>

        </div>
        </div>
  
      </div>

      <div className="py-7 md:py-20 px-6 bg-[rgba(42,59,59,0.1)]"
      >
        {/* Header */}
        <div className="text-center"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="text-[12px] md:text-[14px] my-2 text-[#4a4a4a] uppercase tracking-[.07em] font-bold font-oswald">ACCOMMODATION</div>
          <h1 className="text-[25px] md:text-5xl text-[#2A3B3B] font-thin leading-[1.2em] tracking-[.03em] uppercase mb-5 md:mb-15 font-raleway">CHOOSE YOUR PERFECT <br /> SANCTUARY</h1>
        </div>
        <div className="container mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 justify-center">
            
            {/* Left Column - Interior Images */}
            <div className="flex flex-col gap-4 w-full md:w-auto">
              {/* Bedroom Image */}
              <div className="relative w-full h-[190px] md:w-[450px] md:h-[220px] overflow-hidden group">
                <img
                  src={Accomadation1}
                  alt="Luxury bedroom with ocean view"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay - Partially visible on mobile, fully visible on hover for desktop */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A3B3B]/80 via-[#2A3B3B]/30 to-transparent md:from-[#2A3B3B]/100 md:via-[#2A3B3B]/40 md:opacity-0 opacity-60 md:group-hover:opacity-100 transition-opacity duration-500" />
                {/* Text - Always visible on mobile, only on hover for desktop */}
                <div className="absolute bottom-4 left-4 text-white md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 leading-[1.5em] tracking-[.05em]">
                  <p className="text-[12px] md:text-[14px] text-white uppercase tracking-[.07em] font-thin font-oswald">ACCOMADATION</p>
                  <p className="text-[20px] text-white font-bold leading-[1.2em] tracking-[.07em] font-raleway">LUXURY BEDROOM</p>                
                </div>
              </div>
              
              {/* Bathroom Image */}
              <div className="relative w-full h-[190px] md:w-[450px] md:h-[220px] overflow-hidden group">
                <img
                  src={Accomadation2}
                  alt="Modern bathroom with freestanding tub"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay - Partially visible on mobile, fully visible on hover for desktop */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A3B3B]/80 via-[#2A3B3B]/30 to-transparent md:from-[#2A3B3B]/100 md:via-[#2A3B3B]/40 md:opacity-0 opacity-60 md:group-hover:opacity-100 transition-opacity duration-500" />
                {/* Text - Always visible on mobile, only on hover for desktop */}
                <div className="absolute bottom-4 left-4 text-white md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 leading-[1.5em] tracking-[.05em]">
                  <p className="text-[12px] md:text-[14px] text-white uppercase tracking-[.07em] font-thin font-oswald">ACCOMADATION</p>
                  <p className="text-[20px] text-white font-bold leading-[1.2em] tracking-[.07em] font-raleway uppercase">Modern Bathroom</p>
                </div>
              </div>
            </div>
            
            {/* Right Column - Aerial View */}
            <div className="relative w-full md:w-[900px] h-[190px] md:h-[455px] overflow-hidden group">
              <img
                src={Accomadation3}
                alt="Aerial view of beach villa"
                className="w-full h-full object-cover transition-transform duration-900 group-hover:scale-110"
              />
              {/* Overlay - Partially visible on mobile, fully visible on hover for desktop */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A3B3B]/80 via-[#2A3B3B]/30 to-transparent md:from-[#2A3B3B]/100 md:via-[#2A3B3B]/40 md:opacity-0 opacity-60 md:group-hover:opacity-100 transition-opacity duration-500" />
              {/* Text - Always visible on mobile, only on hover for desktop */}
              <div className="absolute bottom-4 left-4 text-white md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 leading-[1.5em] tracking-[.05em]">
                <p className="text-[12px] md:text-[14px] text-white uppercase tracking-[.07em] font-thin font-oswald">ACCOMADATION</p>
                <p className="text-[20px] text-white font-bold leading-[1.2em] tracking-[.07em] font-raleway uppercase">Aerial Beach View</p>
              </div>
            </div>
          </div>
        </div>
      </div>   

      <div className="w-full relative">
        {/* Banner Image Container */}
        <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
          {/* Banner Image */}
          <img
            src={FlexibleEscape}
            alt="Couple walking on beach boardwalk with overwater villas in background"
            className="w-full h-full object-cover"
          />
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}></div>
          
          {/* Text Content Centered */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          >
            <h2 className="text-3xl md:text-6xl font-light tracking-wider uppercase mb-4 animate-on-scroll fade-in-up animate-visible font-raleway">
              FLEXIBLE ESCAPES
            </h2>
            <p className="text-lg md:text-xl font-light tracking-[0.1em] mb-8 animate-on-scroll fade-in-up animate-visible">
              Enjoy exclusive savings and the freedom to change your plans
            </p>
            <div className="flex items-center space-x-4 text-[15px]">
              <Link to="/booking"
                className="px-10 py-2 text-white bg-[#518181] transition  relative overflow-hidden group"
              >
                <span className="relative z-10">BOOK NOW</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full px-10 py-15 md:py-20 lg:mt-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Image1})` }}
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between"
         data-aos="fade-up"
         data-aos-delay="200"
         data-aos-duration="1000"
         data-aos-easing="ease-in-out"
         >
          {/* Left Side: "In Their Words" and Rating */}
          <div className="flex-1 text-left md:text-left">
            <h2 className="text-[#2A3B3B] text-sm font-semibold uppercase tracking-[0.07em] mb-4 font-oswald">In Their Words</h2>
            <div className="">
              <p className="text-5xl font-light text-[#2A3B3B] mb-2">96%</p>
              <p className="text-base text-[#4a4a4a] tracking-wide mb-6 font-raleway">of our guests would <br />recommend this hotel</p>
            </div>

            {/* Rating Breakdown */}
            <div className="space-y-2 font-oswald tracking-[0.07em]">
              {[
                { label: "Service", score: 3 },
                { label: "Cleanliness", score: 4 },
                { label: "Location", score: 4 },
                { label: "Value", score: 3 },
              ].map(({ label, score }, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`w-3 h-3 ${
                          i < score ? "bg-[#2A3B3B]" : "bg-gray-300"
                        } rounded-full`}
                      ></span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 uppercase">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Testimonial Quote */}
          <div className="flex-1 mt-8 md:mt-0 md:ml-8 text-center md:text-left">
            <p className="text-lg italic text-[#4a4a4a] font-light leading-[1.50em] tracking-[.07em] font-raleway">
              From the moment we arrived, we knew we were in the ultimate paradise. We were greeted by a welcoming committee of
              drummers as our boat came ashore and each couple was welcomed by name. The bungalow has everything you could
              possibly need and more...
            </p>
            <p className="mt-4 text-sm text-[#4a4a4a] font-semibold uppercase font-oswald tracking-[0.07em]">Joanne A.</p>
            <p className="mt-1 text-sm text-[#4a4a4a] font-raleway">Sydney</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 mt-0">
      <div className="text-center mb-8"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      >
        <div className="text-[12px] md:text-[14px] my-2 text-[#4a4a4a] uppercase tracking-[.07em] font-bold font-oswald">FOLLOW US</div>
        <h1 className="text-[25px] md:text-5xl text-[#2A3B3B] font-thin leading-[1.2em] tracking-[.03em] uppercase mb-5 md:mb-15 font-raleway">
          YOUR RESIDENCIA DEL HAMOR <br /> JOURNEYS
        </h1>
      </div>
      
      <div className="flex flex-wrap h-full gap-0">
      <div className="w-full h-48 md:w-1/4 md:h-64 bg-[#2A3B3B] text-white relative"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      >
        <div className="p-6">
          <div className="text-[15px] md:text-[17px] my-2  uppercase tracking-[.07em] font-bold font-oswald">DEL HAMOR MOMENTS</div>
          <div className="text-[15px] md:text-[15px] my-2 tracking-[.03em] font-thin font-raleway">
            Share your memories with <div>@anantaraveli</div>
          </div>
        </div>
        <div className="absolute bottom-4 left-6">
          <a href="#" className="underline text-sm hover:text-gray-400">See More</a>
        </div>
      </div>

        
        {images.map((img, index) => (
          <div
            key={index}
            className="w-1/2 h-48 sm:h-48 md:w-1/4 md:h-64 relative group overflow-hidden cursor-pointer"
            onClick={() => openModal(index)}
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <img
              src={img.src}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-base font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">
                {img.caption}
              </span>
            </div>
          </div>
        ))}
        
        {isOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={closeModal}
          >
            {/* Semi-transparent background overlay */}
            <div className="fixed inset-0 bg-black opacity-90" style={{ backdropFilter: "blur(8px)" }} />
            
            {/* Modal content container - all at full opacity */}
            <div className="relative z-10 flex items-center justify-center w-full h-full">
              <button
                onClick={closeModal}
                className="absolute top-5 right-5 text-white text-4xl hover:opacity-70 transition z-20"
              >
                <FaTimes />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-5 text-white text-4xl hover:opacity-70 transition z-20"
              >
                <FaArrowLeft />
              </button>
              
              <div className="relative px-4 md:px-0 max-w-4xl mx-auto" onClick={(e) => e.stopPropagation()}>
                <img
                  src={images[currentIndex].src}
                  alt="carousel"
                  className="max-w-full max-h-screen object-contain shadow-2xl rounded-lg transition-transform duration-500 scale-100 hover:scale-105"
                />
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <p className="text-white text-lg bg-black bg-opacity-50 inline-block px-4 py-2 rounded">
                    {images[currentIndex].caption}
                  </p>
                </div>
              </div>
              
              <button
                onClick={nextImage}
                className="absolute right-5 text-white text-4xl hover:opacity-70 transition z-20"
              >
                <FaArrowRight />
              </button>
              
              <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      currentIndex === index ? "bg-white" : "bg-gray-500"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(index);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    

      <div
        className="py-7 md:py-20  bg-[rgba(42,59,59,0.1)]"
        >
        {/* Header */}
        <div className="text-center mx-auto px-4"
         data-aos="fade-up"
         data-aos-delay="200"
         data-aos-duration="1000"
         data-aos-easing="ease-in-out"
        >
          <div className="text-[12px] md:text-[14px] my-2 text-[#4a4a4a] uppercase tracking-[.07em] font-bold font-oswald">
            LOCATION
          </div>
          <h1 className="text-[25px] md:text-5xl text-[#2A3B3B] font-thin leading-[1.2em] tracking-[.03em] uppercase mb-5 md:mb-15 font-raleway">
            WHERE THE OCEAN MEETS LUXURY
          </h1>
        </div>

        {/* Map and Details Container */}
        <div 
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
          <div className="flex flex-col px-4 md:flex-row w-full justify-center"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out">
            {/* Map Section - Takes up most of the width */}
            <div className="w-full h-[300px] md:w-[1000px] md:px-0  md:h-[700px] relative">
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3893.30057957922!2d124.0923729!3d12.6282757!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0c96c1198dc6f%3A0x995aaec9dae2c17a!2sRecidencia%20del%20Hamor%20Beachfront!5e0!3m2!1sen!2sph!4v1742015337426!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              {/* Fullscreen button */}
              <button className="absolute top-4 right-4 bg-white p-2 rounded-sm shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
                </svg>
              </button>
              
              {/* Move button */}
              <button className="absolute bottom-16 right-4 bg-white p-2 rounded-full shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zm-8 0a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zm8-4a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zm-8 0a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zm.5 5.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5z"/>
                </svg>
              </button>
            </div>
            
            {/* Sidebar Information Section */}
            <div className="w-full md:w-1/4 p-6 bg-white">
              <h1 className="text-[12px] md:text-[24px] my-4 text-[#4a4a4a] uppercase tracking-[.07em] font-bold font-oswald">Residencia del Hamor Beach Front</h1>
              
              {/* Address Section */}
              <div className="mb-6">
                <div className="flex items-start">
                  <svg className="h-5 w-5 mt-1 text-[#2A3B3B] mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-[12px] md:text-[14px] my-1 text-[#4a4a4a] uppercase tracking-[.07em] font-bold font-raleway">
                    J3HV+8X8, Santa Magdalena, Sorsogon
                  </p>
                </div>
              </div>
              
              {/* GPS Section */}
              <div className="mb-6">
                <a href="https://maps.app.goo.gl/QLBrSJwcgKJ8x3iK7" target="_blank" rel="noopener noreferrer" className="text-[12px] md:text-[14px] my-2 text-[#4a4a4a] uppercase tracking-[.07em] font-bold font-oswald underline">
                  Open Google Map
                </a>
              </div>
              <div className="mt-6">
                <h1 className="text-[12px] md:text-[14px] my-2 text-[#4a4a4a] uppercase tracking-[.07em] font-bold font-oswald mb-6">Weather in Sorsogon City, Philippines</h1>
                {loading ? (
                  <p>Loading weather...</p>
                ) : weather ? (
                  <div>
                    <h2 className="text-[12px] md:text-[14px] my-2 text-[#4a4a4a] uppercase tracking-[.07em] font-bold font-oswald">{weather.weather[0].description}</h2>
                    <p className="text-[12px] md:text-[14px] my-2 text-[#4a4a4a] uppercase tracking-[.07em] font-bold font-oswald">Temperature: {weather.main.temp}°C</p>
                    <p className="text-[12px] md:text-[14px] my-2 text-[#4a4a4a] uppercase tracking-[.07em] font-bold font-oswald">Humidity: {weather.main.humidity}%</p>
                    <p className="text-[12px] md:text-[14px] my-2 text-[#4a4a4a] uppercase tracking-[.07em] font-bold font-oswald">Wind Speed: {weather.wind.speed} m/s</p>
                    <img
                      src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                      alt="weather icon"
                    />
                  </div>
                ) : (
                  <p>Failed to load weather data.</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div>

       
        <div className="max-w-5xl mx-auto py-7 md:py-20 px-4 md:px-0"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        >
          <h1 className="text-[25px] text-center md:text-5xl text-[#2A3B3B] font-thin leading-[1.2em] tracking-[.03em] uppercase mb-5 md:mb-15 font-raleway">FREQUENTLY ASKED QUESTIONS</h1>
          <div className="space-y-2 mt-2">
            {faqItems.map((item, index) => (
              <div key={index} className={`border-b border-gray-200 ${openIndex === index ? 'bg-gray-50' : ''}`}>
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex justify-between items-center w-full py-6 px-4 text-left focus:outline-none"
                >
                  <span className="text-base md:text-lg font-normal text-[#2A3B3B] leading-[1.2em] tracking-[.03em]">{item.question}</span>
                  <ChevronDown 
                    className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''}`}
                  />
                </button>
                
                {openIndex === index && (
                  <div className="px-4 pb-6">
                    <p className="text-[#2A3B3B] leading-[1.2em] tracking-[.07em] font-medium text-[14px] md:text-[15px]">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;

