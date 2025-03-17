import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { getCountries, getCountryCallingCode } from 'react-phone-number-input';



import Calendar from '../components/calendarPicker.jsx';
import labels from 'react-phone-number-input/locale/en'; // Import English country names
import Logo from "../assets/images/logo.png"; 
import Cards from "../assets/images/cards.png";
import CardsOther from "../assets/images/cardsother.png";
import Suite1 from "../assets/images/suite_1.webp";


const BookingForm = () => {
  const [bedPreference, setBedPreference] = useState('double');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit');
  
  // Custom Country Select Component
  const CustomCountrySelect = ({ value, onChange, options, ...rest }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const selectedCountry = value || 'PH'; // Default to Philippines if no value
    const dropdownRef = useRef(null);

    // Frequently used countries for the "Top" section (using country codes)
    const topCountries = ['US', 'TH', 'SG', 'MY', 'PH'];

    // Filter countries based on search (search by country name or calling code)
    const filteredCountries = useMemo(() => {
      if (!search) return getCountries();
      return getCountries().filter((country) =>
        labels[country]?.toLowerCase().includes(search.toLowerCase()) ||
        getCountryCallingCode(country).includes(search)
      );
    }, [search]);

    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Group filtered countries alphabetically by full country name
    const groupedCountries = useMemo(() => {
      const groups = filteredCountries
        .filter((country) => !topCountries.includes(country))
        .reduce((acc, country) => {
          const countryName = labels[country] || country; // Fallback to country code if name not found
          const firstLetter = countryName[0]?.toUpperCase() || 'A'; // Default to 'A' if undefined
          if (!acc[firstLetter]) acc[firstLetter] = [];
          acc[firstLetter].push(country);
          return acc;
        }, {});
      return Object.keys(groups)
        .sort()
        .map((letter) => ({ letter, countries: groups[letter] }));
    }, [filteredCountries]);

    return (
      <div className="relative" ref={dropdownRef}>
        {/* Country Code Display with Toggle */}
        <button
          type="button"
          className="flex items-center border-r border-gray-300 pr-2 mr-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-gray-700">+{getCountryCallingCode(selectedCountry)}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`ml-1 text-gray-500 transform ${isOpen ? 'rotate-180' : ''}`}
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </button>

        {/* Custom Dropdown */}
        {isOpen && (
          <div className="absolute z-10 w-64 bg-white border border-gray-300 rounded-md shadow-lg mt-1 max-h-96 overflow-y-auto">
            {/* Selected Country */}
            {selectedCountry && (
              <div className="px-4 py-2 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">
                    {labels[selectedCountry] || selectedCountry} +{getCountryCallingCode(selectedCountry)}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
              </div>
            )}

            {/* Search Bar */}
            <div className="px-4 py-2 border-b border-gray-200">
              <div className="flex items-center border border-gray-300 rounded-md p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-500 mr-2"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input
                  type="text"
                  className="w-full outline-none text-gray-600 placeholder-gray-400"
                  placeholder="Country or region"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            {/* Top Countries Section */}
            {topCountries.some((country) => filteredCountries.includes(country)) && (
              <div className="px-4 py-2 border-b border-gray-200">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Top</h3>
                {topCountries
                  .filter((country) => filteredCountries.includes(country))
                  .map((country) => (
                    <button
                      key={country}
                      className="w-full text-left px-2 py-2 text-gray-700 hover:bg-gray-100 rounded-md flex justify-between items-center"
                      onClick={() => {
                        onChange(country);
                        setIsOpen(false);
                      }}
                    >
                      <span>
                        {labels[country] || country} +{getCountryCallingCode(country)}
                      </span>
                      {selectedCountry === country && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-600"
                        >
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      )}
                    </button>
                  ))}
              </div>
            )}

            {/* Alphabetical List */}
            {groupedCountries.map(({ letter, countries }) => (
              <div key={letter} className="px-4 py-2">
                <h3 className="text-sm font-medium text-gray-500 mb-2">{letter}</h3>
                {countries.map((country) => (
                  <button
                    key={country}
                    className="w-full text-left px-2 py-2 text-gray-700 hover:bg-gray-100 rounded-md flex justify-between items-center"
                    onClick={() => {
                      onChange(country);
                      setIsOpen(false);
                    }}
                  >
                    <span>
                      {labels[country] || country} +{getCountryCallingCode(country)}
                    </span>
                    {selectedCountry === country && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-600"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto pb-20">
      {/* Header */}
      <header className="flex items-center justify-between p-4 font-raleway">
        <div className="flex items-center">
            <img src={Logo} alt="Trip.com Logo" className="h-30 w-40" />
        </div>
        <div className="flex items-center">
            <Link to="/auth" className="bg-white text-blue-600 px-4 py-1 rounded-md text-sm">Log In / Sign Up</Link>
        </div>
    </header>


      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-4 font-raleway">

        {/* Right Side */}
        <div className="md:col-span-1">
          <div className="px-4 py-3 bg-white rounded-md shadow-md mb-4 border border-gray-200">
              <img src={Suite1} alt="Hotel" className="w-full h-full mb-5 rounded-md" />

                <h3 className="text-[20px] text-[#2A3B3B] tracking-[.03em] font-bold mb-6">Standard Double Or Twin Room</h3>
                <div className="flex items-center">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1"
                    >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <span className='text-[16px] text-[#2A3B3B] tracking-[.03em] font-bold'>x2 • 2 Single bed or 1 Queen bed</span>
                </div>
                {/* Fixed Amenities Section */}
                <div className="flex items-center flex-wrap mt-2">
                    <span className="text-[#2A3B3B] tracking-[.03em] font-bold amenities-item">Free Wi-Fi</span>
                    <span className="text-[#2A3B3B] tracking-[.03em] font-bold amenities-item">Non-smoking</span>
                    <span className="text-[#2A3B3B] tracking-[.03em] font-bold amenities-item">Jacuzzi</span>
                    <span className="text-[#2A3B3B] tracking-[.03em] font-bold amenities-item">Private bathroom</span>
                </div>
                
                <div className="flex items-center mt-5 text-[#2A3B3B] tracking-[.03em] font-bold">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1"
                    >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <span>Non-refundable</span>
                </div>

          </div>


          <Calendar />

          <div class="px-4 py-3 bg-white rounded-md shadow-md mb-4 border border-gray-200">
            <h3 class="text-[20px] text-[#2A3B3B] tracking-[.03em] font-bold mb-6">Price Details</h3>
  
            <div class="flex justify-between items-center mb-4">
              <p class="text-[16px] text-[#2A3B3B] tracking-[.03em] font-bold">1 room x 11 nights</p>
              <p class="text-[16px] text-[#2A3B3B] tracking-[.03em] font-bold">PHP 10,685.73</p>
            </div>
            
            <div class="mb-4">
              <div class="flex justify-between items-center mb-2">
                <div class="flex items-center">
                  <p class="text-[16px] text-[#2A3B3B] tracking-[.03em] font-bold">Taxes & fees</p>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
                  </svg>
                </div>
                <p class="text-[16px] text-[#2A3B3B] tracking-[.03em] font-bold">PHP 1,891.34</p>
              </div>
              
              <div class="pl-6 border-l-2 border-gray-200 ml-4">
                <div class="flex justify-between items-center mb-2">
                  <p class="text-[16px] text-[#2A3B3B] tracking-[.03em] font-bold">VAT</p>
                  <p class="text-[16px] text-[#2A3B3B] tracking-[.07em] font-bold">PHP 748.00</p>
                </div>
                <div class="flex justify-between items-center">
                  <p class="text-[16px] text-[#2A3B3B] tracking-[.03em] font-bold">Service charge</p>
                  <p class="text-[16px] text-[#2A3B3B] tracking-[.03em] font-bold">PHP 1,143.34</p>
                </div>
              </div>
            </div>
            
            <div class="border-t border-gray-200 my-4"></div>
            
            <div class="flex justify-between items-center mb-4">
              <p class="text-[20px] text-[#2A3B3B] tracking-[.03em] font-bold mb-6">Prepay Online</p>
              <p class="text-[20px] text-[#2A3B3B] tracking-[.03em] font-bold mb-6">PHP 12,577.07</p>
            </div>
            
            <div class="flex justify-end items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p class="text-blue-400 font-medium ml-2">We Price Match</p>
            </div>
          </div>

       

          
        </div>

        {/* Left Side */}
        <div className="md:col-span-2">
          {/* Guest Info Section */}
          <div className="px-8 py-6 bg-white rounded-md shadow-md mb-4 border border-gray-200">
            <h2 className="text-[20px] text-[#2A3B3B] tracking-[.03em] font-bold mb-2">Guest Info</h2>
            <p className="text-[14px] text-[#2A3B3B] font-bold leading-[1.2em] tracking-[.03em]  mb-6">Guest names must match the valid ID which will be used at check-in.</p>

            <div className="flex justify-end mb-6">
              <button className="flex items-center text-blue-600 hover:text-blue-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
                <span>Add New Guest (Optional)</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#2A3B3B] tracking-[.03em] mb-1">
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-3 rounded-md"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label className="block text-[#2A3B3B] tracking-[.03em] mb-1">
                  Last name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-3 rounded-md"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-[#2A3B3B] tracking-[.03em] mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 p-3 rounded-md"
                  placeholder="Email"
                />
              </div>
              <div>
                <label className="block text-[#2A3B3B] tracking-[.03em] mb-1">
                  Phone number <span className="text-red-500">*</span>
                </label>
                <PhoneInput
                  international
                  defaultCountry="PH"
                  className="custom-phone-input w-full border border-gray-300 rounded-md p-3 text-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex items-center"
                  placeholder="Phone number"
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  countrySelectComponent={CustomCountrySelect}
                  countryCallingCodeEditable={false}
                />
              </div>
            </div>
          </div>

          {/* Special Requests */}
          <div className="px-8 py-6 bg-white rounded-md shadow-md mb-4 border border-gray-200">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-[20px] text-[#2A3B3B] tracking-[.03em] font-bold">
                Special Requests <span className="text-gray-400 text-sm">(Optional)</span>
              </h2>
              <button className="text-blue-600">Hide</button>
            </div>

            <p className="text-[14px] text-[#2A3B3B] tracking-[.03em] mb-6">
              The property will do its best, but cannot guarantee to fulfill all requests.
            </p>

            <div className="mb-4">
              <h3 className="text-[#2A3B3B] tracking-[.07em] font-medium mb-2">Bed Type</h3>
              <div className="flex space-x-4">
                <label className="flex items-center text-[#2A3B3B] tracking-[.03em]">
                  <input
                    type="radio"
                    name="bedType"
                    className="mr-2"
                    checked={bedPreference === 'double'}
                    onChange={() => setBedPreference('double')}
                  />
                  <span>1 double bed preferred</span>
                </label>
                <label className="flex items-center text-[#2A3B3B] tracking-[.03em]">
                  <input
                    type="radio"
                    name="bedType"
                    className="mr-2"
                    checked={bedPreference === 'single'}
                    onChange={() => setBedPreference('single')}
                  />
                  <span>2 single beds preferred</span>
                </label>
              </div>
            </div>

            <div>
              <h3 className="text-[#2A3B3B] tracking-[.03em] font-medium mb-2">Other Requests</h3>
              <textarea
                className="w-full border border-gray-300 rounded-md p-2 h-24"
                placeholder="Please enter your request here (optional)"
              ></textarea>
            </div>
          </div>

          {/* Available for This Booking */}
          <div className="px-8 py-6 bg-white rounded-md shadow-md mb-4 border border-gray-200">
            <h2 className="text-[20px] text-[#2A3B3B] tracking-[.03em] font-bold mb-6">Available for This Booking</h2>
            <div>
                <label className="block text-[#2A3B3B] tracking-[.03em] mb-1">
                  Promo Code
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 p-3 rounded-md"
                  placeholder="Enter Promo Code"
                />
              </div>
          </div>

          {/* Payment Section */}
            <div className="px-8 py-6 bg-white rounded-md shadow-md mb-4 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How would you like to pay?</h2>

            {/* Credit/Debit Card Option */}
            <div className="mb-4">
                <label className="flex items-center cursor-pointer">
                <input
                    type="radio"
                    name="paymentMethod"
                    className="form-radio h-5 w-5 text-blue-600"
                    checked={paymentMethod === 'credit'}
                    onChange={() => setPaymentMethod('credit')}
                />
                <span className="ml-2 text-[#2A3B3B] tracking-[.03em] font-medium">Credit/Debit Card</span>
                <div className="ml-auto flex space-x-2">
                    <img src={Cards} alt="Visa" className="h-5" />
                </div>
                </label>

                {paymentMethod === 'credit' && (
                <div className="mt-4">
                    <div className="mb-4">
                    <input
                        type="text"
                        className="w-full border border-gray-300 p-3 rounded-md"
                        placeholder="Bank card no."
                    />
                    </div>
                    <div className="mb-4">
                    <input
                        type="text"
                        className="w-full border border-gray-300 p-3 rounded-md"
                        placeholder="Cardholder name"
                    />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                    <div>
                        <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md p-3"
                        placeholder="Expiration date"
                        />
                    </div>
                    <div className="relative">
                        <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md p-3"
                        placeholder="CVV/CVC"
                        />
                        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 16v.01"></path>
                            <path d="M12 8v4"></path>
                        </svg>
                        </button>
                    </div>
                    </div>
                </div>
                )}
            </div>

            {/* Other Payment Methods Option */}
            <div className="border-t border-gray-200 pt-4">
                <label className="flex items-center cursor-pointer">
                <input
                    type="radio"
                    name="paymentMethod"
                    className="form-radio h-5 w-5 text-blue-600"
                    checked={paymentMethod === 'other'}
                    onChange={() => setPaymentMethod('other')}
                />
                <span className="ml-2 text-[#2A3B3B] tracking-[.03em] mb-1 font-medium">Other payment methods</span>
                <div className="ml-auto flex space-x-2">
                    <img src={CardsOther} alt="Google Pay" className="h-5" />
                    
                </div>
                </label>

                {paymentMethod === 'other' && (
                <div className="mt-2">
                    <p className="text-[14px] text-[#2A3B3B] tracking-[.03em] ml-7">Select another payment method</p>
                    {/* Add more payment method options here if needed */}
                </div>
                )}
            </div>
            </div>


            <div className="px-8 py-6 bg-white rounded-md shadow-md mb-4 border border-gray-200">
            <div>
                <label className="block text-[14px] text-[#2A3B3B] tracking-[.03em] font-bold mb-8">
                By submitting this booking, I acknowledge that I have read and agree to Trip.com's <a className='text-[#2A3B3B] font-bold cursor-pointer underline'>Terms of Use</a> and <a className='text-[#2A3B3B] font-bold cursor-pointer underline'>Privacy Statement</a>.
                </label>
                <button className="bg-[#518181] hover:bg-[#518181] text-white py-2 px-25 rounded  cursor-pointer w-full uppercase tracking-[.03em]">Book now</button>
              </div>
          </div>
        </div>

        
      </div>

      {/* Custom CSS for PhoneInput */}
      <style jsx global>{`
        /* Hide the flag in the input */
        .custom-phone-input .PhoneInputCountryIcon {
          display: none !important;
        }

        /* Style the input field */
        .custom-phone-input .PhoneInputInput {
          border: none !important;
          outline: none !important;
          width: 100%;
          padding: 0 !important;
        }

        /* Ensure the country code is visible */
        .custom-phone-input .PhoneInputCountry {
          display: flex !important;
          align-items: center;
          padding-right: 0 !important;
        }

        /* Adjust spacing for country code */
        .custom-phone-input {
          display: flex;
          align-items: center;
        }

        .amenities-item {
            position: relative;
            margin-right: 1rem; /* Space between items */
        }

        .amenities-item:not(:first-child)::before {
            content: '•';
            position: absolute;
            left: -0.75rem; /* Adjust the position of the bullet */
            color: #6b7280; /* Gray color for the bullet */
        }

        .amenities-item:last-child {
            margin-right: 0; /* Remove margin from the last item */
        }
      `}</style>
    </div>
  );
};

export default BookingForm;