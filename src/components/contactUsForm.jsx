import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    contactNumber: '',
    enquiryType: '',
    message: '',
    acceptedPrivacy: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="max-w-6xl mx-8 md:mx-auto py-5 md:py-20 font-raleway">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <h1 className="text-[25px] md:text-[40px] text-[#2A3B3B] font-thin leading-[1.2em] tracking-[.03em]  mb-5">
            Reservations &<br />
            Enquiries
          </h1>
          <p className="text-[16px] text-[#4a4a4a] font-light leading-[1.50em] tracking-[.07em] mb-7">
            Our team would be happy to assist you with any enquiries. Please note: Fields marked with an asterisk (*) are mandatory.
          </p>
        </div>
        
        <div className="md:w-2/3">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              
              <div className="">
                <label className="block text-[#2A3B3B] tracking-[.07em] mb-1">First Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              
              <div>
                <label className="block text-[#2A3B3B] tracking-[.07em] mb-1">Last Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              
              <div>
                <label className="block text-[#2A3B3B] tracking-[.07em] mb-1">Email <span className="text-red-500">*</span></label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              
              <div>
                <label className="block text-[#2A3B3B] tracking-[.07em] mb-1">Country/Region of Residence</label>
                <select 
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2.5"
                >
                  <option value="">Select Country/Region</option>
                  <option value="USA">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-[#2A3B3B] tracking-[.07em] mb-1">Contact Number <span className="text-red-500">*</span></label>
                <input 
                  type="tel" 
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              
              <div>
                <label className="block text-[#2A3B3B] tracking-[.07em] mb-1">Nature Of Enquiry <span className="text-red-500">*</span></label>
                <select 
                  name="enquiryType"
                  value={formData.enquiryType}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-2.5"
                >
                  <option value="">Select Enquiry Type</option>
                  <option value="Booking">Booking</option>
                  <option value="Information">Information</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-[#2A3B3B] tracking-[.07em] mb-1">Message <span className="text-red-500">*</span></label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full border border-gray-300 p-2"
              ></textarea>
            </div>
            
            <div className="flex items-start gap-2 mb-15">
              <input 
                type="checkbox" 
                name="acceptedPrivacy"
                checked={formData.acceptedPrivacy}
                onChange={handleChange}
                required
                className="mt-1 mr-2"
              />
              <div>
                <p className="text-[14px] leading-[1.50em] text-[#2A3B3B] tracking-[.07em]">
                  I have read and accepted the <a href="#" className="text-[14px] leading-[1.50em] text-[#2A3B3B] tracking-[.07em]">Privacy Policy</a>.
                  <span className="ml-2 inline-block bg-gray-300 rounded-full w-5 h-5 text-center text-white">i</span>
                </p>
                <p className="text-[14px] leading-[1.50em] text-[#2A3B3B] tracking-[.07em]">
                  By submitting this form, I agree to the <a href="#" className="text-[14px] leading-[1.50em] text-[#2A3B3B] tracking-[.07em]">Terms & Conditions</a>.
                </p>
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <button 
                type="submit" 
                className="bg-[#518181] hover:bg-[#518181] text-white py-2 px-25 rounded flex items-center cursor-pointer uppercase"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      
      
    </div>
  );
};

export default ContactForm;