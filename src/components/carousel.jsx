import React, { useState, useRef, useEffect, useCallback } from "react";
import backgroundVideo from "../assets/videos/background.mp4";
import Image1 from "../assets/images/image1.webp";
import Image2 from "../assets/images/image1.jpg";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

const CAROUSEL_ITEMS = [
  {
    video: backgroundVideo,
    title: "Ocean Paradise",
  },
  {
    image: Image1,
    title: "Beach Bliss",
    direction: "right",
  },
  {
    image: Image2,
    title: "Tropical Escape",
    direction: "left",
  },
  {
    image: Image1,
    title: "Tropical Escape Redux",
    direction: "left",
  },
];

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const timerRef = useRef(null);

  // Memoized function to go to a specific slide
  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
    if (videoRef.current && CAROUSEL_ITEMS[index].video) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    if (timerRef.current) {
      clearInterval(timerRef.current);
      startAutoSlide();
    }
  }, []);

  // Navigate to previous slide
  const goToPrevSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const newSlide = (prev - 1 + CAROUSEL_ITEMS.length) % CAROUSEL_ITEMS.length;
      if (videoRef.current && CAROUSEL_ITEMS[newSlide].video) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
      return newSlide;
    });
    if (timerRef.current) {
      clearInterval(timerRef.current);
      startAutoSlide();
    }
  }, []);

  // Navigate to next slide
  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const newSlide = (prev + 1) % CAROUSEL_ITEMS.length;
      if (videoRef.current && CAROUSEL_ITEMS[newSlide].video) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
      return newSlide;
    });
    if (timerRef.current) {
      clearInterval(timerRef.current);
      startAutoSlide();
    }
  }, []);

  // Toggle play/pause for the video
  const togglePlayPause = useCallback(() => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
        startAutoSlide();
      }
    }
  }, []);

  // Function to start or restart the auto-slide timer
  const startAutoSlide = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = (prev + 1) % CAROUSEL_ITEMS.length;
        if (CAROUSEL_ITEMS[nextSlide].video && videoRef.current) {
          videoRef.current.pause();
          setIsPlaying(false);
        }
        return nextSlide;
      });
    }, 6000); // 6 seconds for image slides
  }, []);

  // Auto-slide effect with video handling
  useEffect(() => {
    const handleVideoEnd = () => {
      if (CAROUSEL_ITEMS[currentSlide].video) {
        setCurrentSlide((prev) => {
          const nextSlide = (prev + 1) % CAROUSEL_ITEMS.length;
          setIsPlaying(false);
          startAutoSlide();
          return nextSlide;
        });
      }
    };

    if (CAROUSEL_ITEMS[currentSlide].video && videoRef.current) {
      if (!isPlaying) {
        videoRef.current.pause();
        startAutoSlide();
      }
      videoRef.current.addEventListener("ended", handleVideoEnd);
    } else {
      startAutoSlide();
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      if (videoRef.current) {
        videoRef.current.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, [currentSlide, isPlaying, startAutoSlide]);

  // Get current and next slide for pagination
  const nextSlideIndex = (currentSlide + 1) % CAROUSEL_ITEMS.length;
  const visiblePaginationItems = [
    CAROUSEL_ITEMS[currentSlide],
    CAROUSEL_ITEMS[nextSlideIndex],
  ];

  return (
    <div className="hidden lg:block relative w-full h-[900px] overflow-hidden font-poppins">
      <div className="relative w-full h-full">
        {/* Carousel Slides */}
        {CAROUSEL_ITEMS.map((item, index) => (
          <div
            key={index}
            className={`carousel-slide absolute inset-0 transition-all duration-1000 ease-in-out ${
              currentSlide === index
                ? "opacity-100 z-10 translate-x-0"
                : "opacity-0 z-0 translate-x-full"
            }`}
            style={{
              transform: `translateX(${
                currentSlide === index
                  ? "0"
                  : item.direction === "left"
                  ? "-100%"
                  : "100%"
              })`,
            }}
          >
            {item.video ? (
              <video
                ref={currentSlide === index ? videoRef : null}
                autoPlay={false}
                loop={false}
                muted={false}
                className="absolute inset-0 w-full h-full object-cover"
                preload="auto"
              >
                <source src={item.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            )}
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-20 pointer-events-none" />
          </div>
        ))}

       {/* Left Arrow */}
        <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 flex items-center justify-center shadow-lg transition-all duration-300"
        aria-label="Previous Slide"
        style={{
            width: "50px",
            height: "50px",
            backgroundColor: "rgba(255, 255, 255, 0.1)", // Light transparent white
            borderRadius: "50%",
            backdropFilter: "blur(8px)", // Smooth glass effect
            color: "rgba(255, 255, 255, 0.8)", // Keeps icon bright
            border: "1px solid rgba(255, 255, 255, 0.3)", // Subtle border to define button
            transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)"}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)"}
        >
        <ChevronLeft size={32} />
        </button>

        {/* Right Arrow */}
        <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 flex items-center justify-center shadow-lg transition-all duration-300"
        aria-label="Next Slide"
        style={{
            width: "50px",
            height: "50px",
            backgroundColor: "rgba(255, 255, 255, 0.1)", // Light transparent white
            borderRadius: "50%",
            backdropFilter: "blur(8px)", // Smooth glass effect
            color: "rgba(255, 255, 255, 0.8)", // Keeps icon bright
            border: "1px solid rgba(255, 255, 255, 0.3)", // Subtle border
            transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)"}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)"}
        >
        <ChevronRight size={32} />
        </button>


        {/* Pagination (Horizontal at Bottom, Sliding One by One) */}
        <div className="absolute bottom-6 right-6 flex space-x-4 z-20 overflow-hidden">
            <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{
                transform: `translateX(-${currentSlide * 200}px)`, // Adjust 200px based on item width
                }}
            >
                {CAROUSEL_ITEMS.map((item, index) => (
                <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`carousel-pagination-btn text-white text-[15px] uppercase tracking-wider flex items-center transition-opacity duration-300 min-w-[200px] ${
                    currentSlide === index
                        ? "font-bold opacity-100"
                        : "opacity-70 hover:opacity-90"
                    }`}
                >
                    <span>{`0${index + 1}`}</span>
                    <span className="ml-2">{item.title}</span>
                </button>
                ))}
            </div>
        </div>


        {/* Play/Pause Button */}
        {CAROUSEL_ITEMS[currentSlide].video && (
            <button
                onClick={togglePlayPause}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center shadow-lg transition-all duration-300"
                aria-label={isPlaying ? "Pause" : "Play"}
                style={{
                    width: "80px",
                    height: "80px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)", // Light transparent white
                    borderRadius: "50%",
                    backdropFilter: "blur(2px)", // Smooth glass effect
                    color: "rgba(255, 255, 255, 0.8)", // Keeps icon bright
                    transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)"}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)"}
            >
                {isPlaying ? (
                    <Pause size={50} className="flex-shrink-0" />
                ) : (
                    <Play size={50} className="flex-shrink-0" />
                )}
            </button>
        )}
      </div>
    </div>
  );
}

export default Carousel;