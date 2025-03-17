import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = () => {
  const [checkInDate, setCheckInDate] = useState(new Date('2025-03-21'));
  const [checkOutDate, setCheckOutDate] = useState(new Date('2025-04-21'));
  const [nights, setNights] = useState(31);
  const [rooms, setRooms] = useState(1);

  // Calculate the number of nights based on date difference
  const calculateNights = (checkIn, checkOut) => {
    if (!checkIn || !checkOut) return 0;
    const diffTime = Math.abs(checkOut - checkIn);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Handle date range selection
  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setCheckInDate(start);
    setCheckOutDate(end);
    if (start && end) {
      setNights(calculateNights(start, end));
    }
  };

  // Format the date for display
  const formatDate = (date) => {
    if (!date) return 'Select date';
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-md mb-4 border border-gray-200 relative">
      {/* Static Date Range Display */}
      <div className="flex justify-between items-center mb-4">
        <div className="w-full flex items-center justify-between px-2">
          <span className="text-gray-700 font-medium">{formatDate(checkInDate)}</span>
          <span className="text-gray-700">—</span>
          <span className="text-gray-700 font-medium">{formatDate(checkOutDate)}</span>
        </div>
      </div>

      {/* Time Display */}
      <div className="flex justify-between text-sm text-gray-500 mb-4">
        <span>14:00–24:00</span>
        <span>Before 12:00</span>
      </div>

      {/* Nights and Rooms Section with Calendar Trigger using Grid */}
      <div className="grid grid-cols-2 gap-2">
        {/* Nights Section */}
        <div className="relative">
          <div
            className="flex items-center text-gray-700 cursor-pointer border border-gray-300 rounded-md p-2 w-full"
            onClick={() => document.querySelector('.react-datepicker__input-container input').click()}
          >
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
              className="mr-1"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span className="flex-1">{nights} nights</span>
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
              className="ml-1"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </div>
          <DatePicker
            selected={checkInDate}
            onChange={handleDateChange}
            startDate={checkInDate}
            endDate={checkOutDate}
            selectsRange
            monthsShown={2}
            dateFormat="EEE, MMM d"
            placeholderText="Select dates"
            minDate={new Date()} // Disable past dates
            className="w-full border border-gray-300 rounded-md p-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer hidden"
            popperPlacement="bottom-start"
            withPortal
            renderCustomHeader={({
              date,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }) => (
              <div className="flex items-center justify-between px-2 py-2">
                <button
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                  className="text-blue-600 disabled:text-gray-400"
                >
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
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <span className="text-lg font-medium text-gray-700">
                  {date.toLocaleString('en-US', { month: 'short', year: 'numeric' })}
                </span>
                <button
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                  className="text-blue-600 disabled:text-gray-400"
                >
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
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            )}
          />
        </div>

        {/* Rooms Section */}
        <div className="relative">
          <select
            value={rooms}
            onChange={(e) => setRooms(Number(e.target.value))}
            className="appearance-none border border-gray-300 rounded-md p-2 text-gray-700 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option  key={num} value={num}>
                {num} room{num > 1 ? 's' : ''}
              </option>
            ))}
          </select>
        
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
            className="absolute right-2 top-1/3 transform -translate-y-1/2 pointer-events-none"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Calendar;