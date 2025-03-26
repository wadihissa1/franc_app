import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import FrancPage from './pages/FrancPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import ResumePage from './pages/services/ResumePage';
import ChattingPage from './pages/services/ChattingPage';
import CoverLetterPage from './pages/services/CoverLetterPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/franc" element={<FrancPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/resume-evaluation" element={<ResumePage />} />
        <Route path="/chatting" element={<ChattingPage />} />
        <Route path="/cover-letter-evaluation" element={<CoverLetterPage />} />
      </Routes>
    </Router>
  );
};

export default App;
