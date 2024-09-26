import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';

function ProfileView() {
  const profile = {
    name: 'John Doe',
    location: 'New York, NY',
    earnings: 1200
  };

  return (
    <div className="profile-view">
      <h2>Profile</h2>
      <div className="profile-card">
        <FontAwesomeIcon icon={faUser} className="profile-icon" />
        <div>
          <p><strong>{profile.name}</strong></p>
          <p>{profile.location}</p>
        </div>
      </div>
      <div className="earnings">
        <FontAwesomeIcon icon={faMoneyBillWave} className="money-icon" />
        <p><strong>${profile.earnings}</strong> Earned</p>
      </div>
    </div>
  );
}

export default ProfileView;
