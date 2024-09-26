import React, { useState } from 'react';

function ProfileManagement() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    location: 'New York, NY',
    serviceCategory: 'Plumber',
    availability: 'Available'
  });

  return (
    <div className="profile-management">
      <h2>Profile Management</h2>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Location:</strong> {profile.location}</p>
      <p><strong>Service Category:</strong> {profile.serviceCategory}</p>
      <p><strong>Availability:</strong> {profile.availability}</p>
      <button>Edit Profile</button>
    </div>
  );
}

export default ProfileManagement;
