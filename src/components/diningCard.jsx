import Dining1 from "../assets/images/dine_1.jpg"; 
import Dining2 from "../assets/images/dining_2.jpg"; 

import { Link } from "react-router-dom";

import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, BedDouble, Users, Circle, Clock, HandPlatter } from 'lucide-react';

const VillaCardSimple = ({ villa, onOpenModal }) => {
  // Use villa.size to determine bed information
  const bedText = villa.size || '1 Queen bed';
 

  // Get the first highlight (limit to one), use Circle icon as fallback
  const displayedHighlight = villa.highlights[0] || { icon: <Circle size={16} className="text-gray-500" />, text: 'No highlight available' };

  return (
    <div 
      onClick={() => onOpenModal(villa)}
      className="w-full h-full bg-white shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
    >
      <div className="h-64 overflow-hidden relative">
        <img 
          src={villa.images[0]} // Fallback image
          alt={villa.title} 
          className="w-full h-full object-cover"
          onError={(e) => console.log('Image failed to load:', villa.images[0])}
        />
      </div>
      <div className="px-6 py-6">
        <h3 className="text-[24px] mb-6 text-[#4a4a4a]  tracking-[.07em] font-bold font-raleway truncate">
          {villa.title}
        </h3>
        {/* Display bed information with BedDouble icon */}
        <p className="flex items-center text-[16px] my-2 text-[#4a4a4a] tracking-[.07em] font-bold font-raleway">
          <HandPlatter size={16} className="mr-2 font-bold text-[#4a4a4a]" />
          {bedText}
        </p>
        {/* Display maximum adults with Users icon */}
        <p className="flex mb-10 items-center text-[16px] my-2 text-[#4a4a4a] uppercase tracking-[.07em] font-bold font-raleway">
          <Clock size={16} className="mr-2 font-bold text-[#4a4a4a]" />
            {villa.maxAdults}
        </p>
        {/* Display one highlight with its icon (or Circle as fallback) */}
       
        <p className="text-[14px]  text-[#2A3B3B]  tracking-[.07em] font-extrabold font-raleway hover:underline"  onClick={() => onOpenModal(villa)}>See Room Details</p>
      </div>
    </div>
  );
};

const CustomModal = ({ isOpen, onClose, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling on the body when modal is open
      document.body.style.overflow = 'hidden';
      // Slight delay for entrance animation
      setTimeout(() => setIsVisible(true), 10);
    } else {
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = 'auto';
      setIsVisible(false);
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
    {/* Backdrop */}
    <div 
      className={`fixed inset-0 bg-black transition-opacity duration-300 ${
        isVisible ? 'opacity-50' : 'opacity-0'
      }`}
      onClick={onClose}
    />
  
    {/* Modal Content */}
    <div 
      className={`fixed inset-4 sm:inset-6 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 
                 bg-white rounded-lg shadow-lg w-full max-w-[90vw] sm:max-w-4xl md:max-w-6xl 
                 h-auto max-h-[85vh] sm:max-h-[90vh] 
                 transition-all duration-300 overflow-y-auto
                 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
    >
      {children}
    </div>
  </div>
  );
};

const VillaModal = ({ isOpen, onClose, villa }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === villa?.images?.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? villa?.images?.length - 1 : prev - 1));
  };

  const goToImage = (index) => {
    setCurrentImage(index);
  };

  if (!villa) return null;

  return (
     <CustomModal isOpen={isOpen} onClose={onClose}>
          <div className="flex flex-col md:flex-row h-full overflow-hidden font-raleway">
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute right-4 top-4  z-10 bg-white/80 p-0.5 sm:p-1  rounded-full hover:bg-white"
            >
              <X 
                size={18} 
                className="text-gray-800" 
              />
            </button>
            {/* Gallery Section - Moves Above on Small Screens */}
            <div className="w-full md:w-1/2 bg-gray-100 relative h-60 md:h-auto order-1 md:order-2">
              {/* Main Image */}
              <div className="h-full">
                <img
                  src={villa.images[currentImage]}
                  alt={`${villa.title} - Image ${currentImage + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/60 hover:bg-white/90 p-2 rounded-full transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={18} className="text-gray-800" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/60 hover:bg-white/90 p-2 rounded-full transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={20} className="text-gray-800" />
              </button>
              
              {/* Thumbnail Navigation */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 px-4">
                {villa.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-12 h-12 rounded overflow-hidden border-2 transition-all ${
                      currentImage === index ? "border-white scale-110" : "border-transparent opacity-80"
                    } hover:opacity-100`}
                    aria-label={`Go to image ${index + 1}`}
                  >
                    <img 
                      src={villa.images[index]} 
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
    
            {/* Details Section - Moves Below on Small Screens */}
            <div className="w-full md:w-1/2 p-6 overflow-y-auto order-2 md:order-1">
              <h2 className="text-[18px] md:text-[24px] mb-4 md:mb-6 text-[#4a4a4a] tracking-[.07em] font-bold font-raleway md:truncate hover:text-[#518181]">{villa.title}</h2>
              
              {/* Size & Capacity */}
              <div className="mb-6">
                <p className="flex items-center mb-2 text-[#4a4a4a]">
                  <BedDouble size={16} className="mr-2 font-bold" />
                  {typeof villa.size === 'string' ? villa.size : `${villa.size} sqm / ${villa.sqft} sqft`}
                </p>
                <p className="flex items-center text-[#4a4a4a]">
                  <Users size={16} className="mr-2 font-bold " />
                  Maximum {villa.maxAdults} adults
                </p>
              </div>
              
              {/* Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Features</h3>
                <ul className="space-y-1">
                  {villa.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="mr-2 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Highlights */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Highlights</h3>
                <div className="grid grid-cols-2 gap-2">
                  {villa.highlights.map((highlight, index) => (
                    <p key={index} className="flex items-center text-gray-700">
                     - {highlight.text}
                    </p>
                  ))}
                </div>
              </div>
              
              {/* Price */}
              <div className="mb-6">
                <h3 className="text-sm font-medium uppercase text-gray-500">From</h3>
                <h2 className="text-2xl font-bold text-gray-900">
                  {villa.currency} {villa.price.toLocaleString()}
                </h2>
              </div>
              
              {/* Action Buttons */}
              <div className="flex items-center space-x-4 text-[15px]">
                <Link to="/booking" target="_blank" rel="noopener noreferrer" className="px-10 py-2 text-white bg-[#518181] transition relative overflow-hidden group">
                  <span className="relative z-10">BOOK NOW</span>
                </Link>
              </div>
            </div>
          </div>
        </CustomModal>
  );
};

const VillaGallery = () => {
  const [selectedVilla, setSelectedVilla] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // These would normally be imported from your assets
  const placeholderImages = [
    Dining1,
    Dining2,
  ];

  const placeholderImagesSecondCard= [
    Dining2,
    Dining1
  ];

  const placeholderImagesThirdCard= [
    Dining1,
    Dining2
  ];

  const placeholderImagesFourthCard= [
    Dining2,
    Dining1
  ];

  const villaData = [
    {
      title: "Origami",
      size: "Japanese", 
      sqft: "Dinner: 6.30 pm – 10.00 pm",
      maxAdults: "Dinner: 6.30 pm – 10.00 pm",
      features: [
        "Direct lagoon access",
        "Sundeck with daybed and coffee table"
      ],
      highlights: [
        { text: "Non-smoking" },
        { text: "Private bathroom" },
        { text: "7m²" },
        { text: "Jacuzzi" }
      ],
      price: 31814,
      currency: "PHP",
      images: placeholderImages
    },
    {
      title: "Single Room",
      size: 66,
      sqft: 710,
      maxAdults: 3,
      features: [
        "Direct lagoon access with more privacy",
        "Sundeck with daybed and coffee table"
      ],
      highlights: [
        { text: "Direct lagoon access" },
        { text: "Sundeck" },
        { text: "Complimentary WiFi" },
        { text: "55\" flat-screen TV" }
      ],
      price: 33419,
      currency: "PHP",
      images: placeholderImagesSecondCard
    },
    {
      title: "Beach View Room",
      size: 92,
      sqft: 990,
      maxAdults: 3,
      features: [
        "Direct lagoon access",
        "Terrazzo tub for with Indian Ocean Views"
      ],
      highlights: [
        { text: "Direct lagoon access" },
        { text: "Sundeck" },
        { text: "Terrazzo tub for two" },
        { text: "Complimentary WiFi" }
      ],
      price: 44539,
      currency: "PHP",
      images: placeholderImagesThirdCard
    },
    {
      title: "Double Or Twin Room",
      size: 120,
      sqft: 1292,
      maxAdults: 4,
      features: [
        "Private beach access",
        "Spacious living area with sofa"
      ],
      highlights: [
        { text: "Ocean views" },
        { text: "Living area" },
        { text: "Complimentary WiFi" },
        { text: "King-size bed" }
      ],
      price: 52890,
      currency: "PHP",
      images: placeholderImagesFourthCard
    },
    {
      title: "Luxury Pool Villa",
      size: 150,
      sqft: 1615,
      maxAdults: 4,
      features: [
        "Private infinity pool",
        "Outdoor dining area"
      ],
      highlights: [
        { text: "Private pool" },
        { text: "Outdoor dining" },
        { text: "Complimentary WiFi" },
        { text: "Sun terrace" }
      ],
      price: 67250,
      currency: "PHP",
      images: placeholderImages
    }
  ];

  const openModal = (villa) => {
    setSelectedVilla(villa);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:py-20">
      
      {/* Grid of Simple Villa Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {villaData.map((villa, index) => (
          <VillaCardSimple 
            key={index} 
            villa={villa} 
            onOpenModal={openModal} 
          />
        ))}
      </div>
          <VillaModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        villa={selectedVilla} 
      />
    </div>
  );
};

export default VillaGallery;