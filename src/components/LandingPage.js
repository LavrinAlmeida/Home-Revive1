import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1>Welcome to the Landing Page</h1>
        <h3>Name: LAVRIN ALMEIDA Roll No. 02 PID: 221002 Subject: IP-Home_Assignment</h3>
      </div>
      <Link to="/album" style={styles.link}>View Album</Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundImage: 'url("https://png.pngtree.com/thumb_back/fw800/background/20240418/pngtree-photo-album-with-photos-of-travel-and-vintage-old-camera-on-image_15660332.jpg")', // Replace with your image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#ffff00', // Text color
  },
  textContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
  },
  link: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#800000',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
  },
};

export default LandingPage;
