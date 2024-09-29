// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import RoleSelection from './components/RoleSelection';
import CustomerLoginSignup from './components/CustomerLoginSignup';
import ProviderLoginSignup from './components/ProviderLoginSignup';
import ProfileManagement from './components/ProfileManagement';
import JobManagement from './components/JobManagement';
import Earnings from './components/Earnings';
import Calendar from './components/Calendar';
import Notifications from './components/Notifications';
import Feedback from './components/Feedback';
import Support from './components/Support';
import JobTypes from './components/JobTypes';
import ProfileView from './components/ProfileView';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [showEarnings, setShowEarnings] = useState(false);

  const handleProfileClick = () => {
    setShowProfile(true);
    setShowEarnings(false); // Hide earnings when profile is clicked
  };

  const handleEarningsClick = () => {
    setShowEarnings(true);
    setShowProfile(false); // Hide profile when earnings is clicked
  };

  return (
    <Router>
      <div className="dashboard-container">
        <header className="dashboard-header">
          <h1>Service Provider Dashboard</h1>
          <div className="header-icons">
            <FontAwesomeIcon icon={faUser} className="icon" onClick={handleProfileClick} />
            <FontAwesomeIcon icon={faMoneyBillWave} className="icon" onClick={handleEarningsClick} />
          </div>
        </header>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login-signup" element={<RoleSelection />} />
          <Route path="/customer-login-signup" element={<CustomerLoginSignup />} />
          <Route path="/provider-login-signup" element={<ProviderLoginSignup />} />
        </Routes>

        <div className="dashboard-content">
          <section className="dashboard-left">
            <ProfileManagement />
            <Calendar />
            <Notifications />
          </section>

          <section className="dashboard-center">
            <JobTypes />
            <JobManagement />
          </section>

          <section className="dashboard-right">
            {showProfile && <ProfileView />}
            {showEarnings && <Earnings />}
            <Feedback />
            <Support />
          </section>
        </div>
      </div>
    </Router>
  );
}

export default App;
