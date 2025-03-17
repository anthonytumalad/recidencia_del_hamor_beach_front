import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ContactForm from "../components/contactUsForm.jsx";
import axios from "axios";

function Contact () {
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

  return (
    <>
      <Navbar />
      <div 
      className="flex flex-col md:flex-row items-left md:items-start gap-10 md:gap-50 max-w-4xl mx-auto mt-[200px] md:mt-[280px] px-8 md:px-10">
        <div className="md:w-1/3 text-left">
            <div className="group font-raleway">
            <h2 className="text-[30px] md:text-[50px] text-[#2A3B3B] font-thin leading-[1.2em] tracking-[.03em]  uppercase font-raleway">Contact</h2>
            <hr className="w-1/4 md:w-1/2 border-t-1 border-[#4a4a4a] mt-5 transition-all duration-300 group-hover:w-2/5 md:group-hover:w-3/4" />
            </div>
        </div>

        {/* Right Content */}
        <div className="md:w-2/3 font-raleway">
            <h3 className="text-[25px] text-[#2A3B3B] font-thin leading-[1.2em] tracking-[.03em] mb-5">Contact Recidencia Del Hamor Beach Front
            </h3>
            <p className="text-[14px] md:text-[16px] text-[#4a4a4a] font-light leading-[1.50em] tracking-[.07em] mb-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa autem id possimus quos omnis? Itaque at voluptatem sapiente, neque officiis, soluta laudantium fugit explicabo quaerat perferendis dolorum magnam. Deleniti, numquam.soluta laudantium fugit explicabo quaerat perferendis dolorum magnam. Deleniti, numquam.
            </p>
        </div>
      </div>

      <div className="relative mt-6 mb-6 flex flex-col md:flex-row-reverse md:items-start">
    {/* Map Section */}
        <div className="relative w-full min-h-[420px] md:min-h-[520px] bg-[rgba(42,59,59,0.1)]">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3893.30057957922!2d124.0923729!3d12.6282757!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0c96c1198dc6f%3A0x995aaec9dae2c17a!2sRecidencia%20del%20Hamor%20Beachfront!5e0!3m2!1sen!2sph!4v1742015337426!5m2!1sen!2sph"
            className="w-full h-full absolute top-0 left-0"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Fullscreen Button */}
            <button className="absolute top-3 left-3 sm:left-80 bg-white p-2 rounded-sm shadow-md">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
            >
                <path
                fillRule="evenodd"
                d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"
                />
            </svg>
            </button>
        </div>

        {/* Weather Section */}
        <div className="w-auto md:absolute md:z-10 md:top-0 md:right-0 bg-white p-4 rounded-lg shadow-lg m-4">
            <h1 className="text-[12px] md:text-[14px] my-2 text-[#4a4a4a] uppercase tracking-[.07em] font-bold font-oswald mb-6">
            Weather in Sorsogon City, Philippines
            </h1>
            {loading ? (
            <p>Loading weather...</p>
            ) : weather ? (
            <div>
                <h2 className="text-[12px] md:text-[14px] my-2 text-[#4a4a4a] uppercase tracking-[.07em] font-bold font-oswald">
                {weather.weather[0].description}
                </h2>
                <p className="text-[12px] md:text-[14px] my-2 text-[#4a4a4a] uppercase tracking-[.07em] font-bold font-oswald">
                Temperature: {weather.main.temp}°C
                </p>
                <p className="text-[12px] md:text-[14px] my-2 text-[#4a4a4a] uppercase tracking-[.07em] font-bold font-oswald">
                Humidity: {weather.main.humidity}%
                </p>
                <p className="text-[12px] md:text-[14px] my-2 text-[#4a4a4a] uppercase tracking-[.07em] font-bold font-oswald">
                Wind Speed: {weather.wind.speed} m/s
                </p>
                <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="weather icon"
                className="mx-auto"
                />
            </div>
            ) : (
            <p>Failed to load weather data.</p>
            )}
        </div>
     </div>


     
    <ContactForm />

    <div className="bg-[rgba(42,59,59,0.1)] py-10 md:py-20 px-4 font-raleway">
      <div className="max-w-6xl mx-8 md:mx-auto py-5 md:py-20">
        {/* Reservations Team Section */}
        <div className="mb-16">
          <h2 className="text-[25px] text-[#2A3B3B] font-thin leading-[1.2em] tracking-[.03em] ">Reservations Team</h2>
          <hr className="border-t-1 border-[#4a4a4a] my-5 w-24" />
          
          <div className="flex flex-col md:flex-row gap-10 md:gap-100">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#2A3B3B] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+9606644111" className="text-[16px] text-[#2A3B3B] font-bold leading-[1.50em] tracking-[.07em]  underline">+960 664 4111</a>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#2A3B3B] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:velimaldives@anantara.com" className="text-[16px] text-[#2A3B3B] font-bold leading-[1.50em] tracking-[.07em] underline">sample@gmail.com</a>
              </div>
            </div>
            
            <div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#2A3B3B] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <a href="#" className="text-[16px] text-[#2A3B3B] font-bold leading-[1.50em] tracking-[.07em]  underline">Reach us on WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Resort Info Section */}
        <div className="mb-16">
          <h2 className="text-[25px] text-[#2A3B3B] font-thin leading-[1.2em] tracking-[.03em]">Recidencia Del Hamor</h2>
          <hr className="border-t-1 border-[#4a4a4a] my-5 w-24" />
          
          <div className="flex flex-col md:flex-row gap-10 md:gap-58">
            <div className="mb-6 md:mb-0">
              <div className="flex items-start mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#2A3B3B] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <a href="#" className="text-[16px] text-[#2A3B3B] font-bold leading-[1.50em] tracking-[.07em] underline">J3HV+8X8, Santa Magdalena, Sorsogon</a>
              </div>
              <div className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#2A3B3B] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+9606644100" className="text-[16px] text-[#2A3B3B] font-bold leading-[1.50em] tracking-[.07em] underline">+960 664 4100</a>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#2A3B3B] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:velimaldives@anantara.com" className="text-[16px] text-[#2A3B3B] font-bold leading-[1.50em] tracking-[.07em] underline">ResidenciadelHamor.com</a>
              </div>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#2A3B3B] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <a href="#" className="text-[16px] text-[#2A3B3B] font-bold leading-[1.50em] tracking-[.07em]  underline">Message us on WhatsApp</a>
              </div>
              
              <div>
                <p className="text-[15px] uppercase text-[#2A3B3B] font-bold leading-[1.50em] tracking-[.07em] mb-5">FOLLOW US ON</p>
                <div className="flex gap-4">
                  <a href="#" className="text-[#2A3B3B]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a href="#" className="text-[#2A3B3B]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" className="text-[#2A3B3B]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* GDS Codes Section */}
        <hr className='border-t-1 border-[#4a4a4a] mb-5' />
        <div>
          <h3 className="text-[14px] text-[#2A3B3B] font-bold leading-[1.2em] tracking-[.03em] uppercase mb-2">GDS CODES</h3>
          <p className="text-[12px] text-[#2A3B3B] font-normal leading-[1.2em] tracking-[.03em] uppercase">
            Chain Code: OH | Amadeus: MLE250 | Galileo: 13948 | Sabre: 73677 | Worldspan: 70250 | DHISCO: 75442
          </p>
        </div>
      </div>
    </div>

      <Footer />
    </>
  );
};

export default Contact;