import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './index.css'

import HomePage  from './pages/HomePage.jsx'
import Rooms  from './pages/roomsPage.jsx'
import Amenities  from './pages/amenitiesPage.jsx'
import AnantaraForms from './pages/authPage.jsx';
import Contact from './pages/contactUsPage.jsx'; 
import BookingForm from './pages/bookingFormPage.jsx'; 




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/auth" element={<AnantaraForms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<BookingForm />} />
      </Routes>
    </Router>
  </StrictMode>
)
