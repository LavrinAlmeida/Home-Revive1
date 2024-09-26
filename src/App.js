import React from 'react';
import './App.css';
import ProfileManagement from './components/ProfileManagement';
import JobManagement from './components/JobManagement';
import Earnings from './components/Earnings';
import Calendar from './components/Calendar';
import Notifications from './components/Notifications';
import Feedback from './components/Feedback';
import Support from './components/Support';
import JobTypes from './components/JobTypes';
import ProfileView from './components/ProfileView';

function App() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Service Provider Dashboard</h1>
      </header>
      
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
          <ProfileView />
          <Earnings />
          <Feedback />
          <Support />
        </section>
      </div>
    </div>    
  );
}

export default App;
