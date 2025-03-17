import { useState, useEffect } from "react";
import Logo from "../assets/images/logo.webp";
import { LogIn, UserPlus, CalendarCheck, Menu, X, ChevronDown, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLanguageOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`w-full z-50 top-0 fixed transition-all duration-300 ${isScrolled ? "bg-[#2A3B3B] shadow-md" : "bg-[#2A3B3B] md:bg-[rgba(42,59,59,0.6)]"}`}>
      {/* Desktop Version - Hidden on Mobile */}
      <div className="hidden md:block">
        {/* Top language and utility bar - Desktop */}
        <div className="bg-[#2A3B3B] md:bg-[rgba(42,59,59,0.9)] text-white text-xs">
          <div className="container mx-auto flex justify-between items-center py-2">
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300 transition">简体中文</a>
              <a href="#" className="hover:text-gray-300 transition">日本語</a>
              <a href="#" className="hover:text-gray-300 transition">العربية</a>
              <a href="#" className="hover:text-gray-300 transition">DEUTSCH</a>
              <a href="#" className="hover:text-gray-300 transition">ESPAÑOL</a>
              <a href="#" className="hover:text-gray-300 transition">FRANÇAIS</a>
              <a href="#" className="hover:text-gray-300 transition">ITALIANO</a>
            </div>
            <div className="flex space-x-4">
              <Link to="/auth" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-gray-300 transition">
                <UserPlus size={15} className="mr-1" />  
                <span className="mr-1">LOG IN</span>
              </Link>
              <Link to="/auth" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-gray-300 transition">
                <LogIn size={15} className="mr-1" /> 
                <span className="mr-1">SIGN UP</span>
              </Link>
             
            </div>
          </div>
        </div>

        {/* Middle section with logo and buttons - Desktop */}
        <div className="bg-[rgba(42,59,59,0.6)] text-white py-3">
          <div className="container mx-auto flex items-center justify-between h-20 md:py-4 md:px-4">
            {/* Site name on desktop */}
            <div className="flex items-center space-x-6 text-[15px]">
              <a href="#" className="hover:text-gray-300 transition">ResidenciadelHamor.com</a>
            </div>
            
            {/* Center Logo */}
            <div className="flex justify-center absolute left-1/2 transform -translate-x-1/2">
              <Link to="/">
                <img src={Logo} alt="Resort Logo" className="h-25 w-auto" />
              </Link>
            </div>

            {/* Book Now button */}
            <div className="flex items-center space-x-4 text-[15px]">
              <a to="/booking"  className="px-10 py-2 text-white bg-[#518181] transition relative overflow-hidden group"><span className="relative z-10">BOOK NOW</span></a>
            </div>
          </div>
        </div>

        {/* Bottom navigation menu - Desktop */}
        <div className="text-white text-[13px]">
          <div className="container mx-auto">
            <ul className="flex justify-center space-x-8 py-4">
              <Link to="/rooms" className="hover:text-gray-300 transition uppercase">Explore Our Suites</Link>
              <Link to="/amenities" className="hover:text-gray-300 transition uppercase">AMENITIES & ACTIVITIES</Link>
              <Link to="/contact" className="hover:text-gray-300 transition uppercase">contact</Link>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Version - Match the screenshot layout */}
      <div className="md:hidden">
        {/* Top bar - Language selector */}
        <div className="bg-[#2A3B3B] border-b border-gray-700 text-white py-2 px-3 text-[13px] flex justify-end items-center">
          <div className="flex items-center">
            <Globe size={16} className="mr-1" />
            <span className="mr-1">English</span>
            <ChevronDown size={16} />
          </div>
        </div>
        
        {/* Middle bar - Account links */}
        <div className="bg-[#2A3B3B] text-white py-4 flex justify-center items-center gap-4 uppercase text-[13px]">
          <Link to="/auth" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">Log In</Link>
          <Link to="/auth" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">Sign Up</Link>
        </div>
        
        {/* Bottom bar - Menu, Logo, Book Now in a single row */}
        <div className="bg-[#2A3B3B] text-white border-t border-gray-700 grid grid-cols-3 items-center">
          {/* Menu button - Left column */}
          <div className="flex justify-start">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none  px-6 py-4"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Center Logo - Middle column */}
          <div className="flex justify-center">
            <Link to="/">
              <a href="#">
                <img src={Logo} alt="Resort Logo" className="h-15 w-auto" />
              </a>
            </Link>
          </div>
          
          {/* Book Now button - Right column */}
          <div className="flex justify-end text-[13px] px-5">
            <Link to="/booking" target="_blank" rel="noopener noreferrer"
              href="#"
              className="text-white uppercase font-medium text-center"
            >
              Book Now
            </Link>
          </div>
        </div>
        
        {/* Mobile dropdown menu */}
        <div className={`bg-[rgba(42,59,59,0.95)] border-t border-gray-700 text-white p-6 ${isOpen ? "block" : "hidden"}`}>
          <ul className="space-y-4 text-[13px] uppercase">
            <li><Link to="/rooms" className="block hover:text-gray-300 transition uppercase">Explore Our Suites</Link></li>

            <li><Link to="/amenities" className="block hover:text-gray-300 transition uppercase">AMENITIES & ACTIVITIES</Link></li>

            <li><Link to="/contact" className="block hover:text-gray-300 transition uppercase">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;