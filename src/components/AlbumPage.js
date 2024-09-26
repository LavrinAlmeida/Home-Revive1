import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

// Array of photo objects, each containing an id, url, title, and description
const photos = [
  { 
    id: 1, 
    url: 'https://deih43ym53wif.cloudfront.net/large_taj-mahal-india-shutterstock_540619192_89f0fb9375.jpeg', 
    title: 'Photo 1', 
    description: 'The Taj Mahal glowing in soft light makes it one of the best sunset locations in the world.' 
  },
  { 
    id: 2, 
    url: 'https://deih43ym53wif.cloudfront.net/large_atacama-chile-shutterstock_320675879_d1091be545.jpeg', 
    title: 'Photo 2', 
    description: 'Sunset hits different in the Atacama Desert in Chile.' 
  },
  { 
    id: 3, 
    url: 'https://deih43ym53wif.cloudfront.net/large_Quiraing-Isle-of-Skye-scotland-shutterstock_759487645_10b16292ce.jpeg', 
    title: 'Photo 3', 
    description: 'This is Isle of Skye, Scotland.' 
  },
  { 
    id: 4, 
    url: 'https://deih43ym53wif.cloudfront.net/large_kuta-bali-beach-indonesia-shutterstock_297303287.jpg_9b516347e5.jpg', 
    title: 'Photo 4', 
    description: 'Bali is known for its special sunsets.' 
  },
  { 
    id: 5, 
    url: 'https://deih43ym53wif.cloudfront.net/large_borneo-shutterstock_392409886_e8e80fca80.jpeg', 
    title: 'Photo 5', 
    description: 'Borneo’s coastal town of Kota Kinabalu beautiful mountain sunset.' 
  },
  { 
    id: 6, 
    url: 'https://deih43ym53wif.cloudfront.net/large_dramatic-sunset-over-mountains-sea-lofoten-norway-shutterstock_1044207412.jpg_0aa907795a.jpg', 
    title: 'Photo 6', 
    description: 'Dramatic sunset over the mountains and the sea of Lofoten islands in Norway.' 
  },
  { 
    id: 7, 
    url: 'https://deih43ym53wif.cloudfront.net/large_santorini-sunset-fira-greece-shutterstock_108913793_546b70c27e.jpeg', 
    title: 'Photo 7', 
    description: 'The magical sunset is taking a sunset cruise on a luxurious catamaran.' 
  },
  { 
    id: 8, 
    url: 'https://deih43ym53wif.cloudfront.net/large_shutterstock_589533806-1680x735_cca629ae51.jpeg', 
    title: 'Photo 8', 
    description: 'Where the Atlantic and Indian oceans meet Cape Town, South Africa.' 
  },
];

// Functional component named AlbumPage
const AlbumPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current photo index
  const [isPhotoVisible, setIsPhotoVisible] = useState(false); // State to toggle photo visibility
  const navigate = useNavigate(); // Use the navigate function from useNavigate

  // Function to handle click on "See My Photo" button
  const handleSeeMyPhoto = () => {
    // Check if the photo is visible, then update the index
    if (!isPhotoVisible) {
      setIsPhotoVisible(true); // Show the photo
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length); // Move to the next photo
    }
  };

  // Function to handle click on "Secondary Action" button
  const handleSecondaryAction = () => {
    navigate(-1); // Always navigate back to the previous page
  };

  // Return JSX for rendering the component
  return (
    <div style={styles.container}>
      <h2>Photo Album</h2>
      <p>Preserve your memories with our beautifully crafted photo album</p>
      <div style={styles.buttonContainer}>
        <button style={styles.seeMyPhotoButton} onClick={handleSeeMyPhoto}>
          See My Photo
        </button>
        <button style={styles.secondaryActionButton} onClick={handleSecondaryAction}>
          Secondary Action
        </button>
      </div>
      <p> </p>
      {isPhotoVisible && (
        <div style={styles.selectedPhotoCard}>
          <img src={photos[currentIndex].url} alt={photos[currentIndex].title} style={styles.photo} />
          <h3>{photos[currentIndex].title}</h3>
          <p>{photos[currentIndex].description}</p>
        </div>
      )}
      <div style={styles.grid}>
        {photos.map((photo) => (
          <div key={photo.id} style={styles.photoCard}>
            <img src={photo.url} alt={photo.title} style={styles.photo} />
            <h3>{photo.title}</h3>
            <p>{photo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles for the AlbumPage component
const styles = {
  container: {
    textAlign: 'center',
    marginTop: '30px',
    backgroundColor: '#77DD77',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    padding: '20px',
    maxWidth: '1000px',
    margin: 'auto',
    backgroundColor: '#4DB6B0',
  },
  photoCard: {
    border: '1px solid #ddd',
    padding: '10px',
    borderRadius: '5px',
    textAlign: 'center',
    backgroundColor: '#E6E6FA',
  },
  selectedPhotoCard: {
    margin: '20px',
    padding: '10px',
    border: '2px solid #FF6F61',
    borderRadius: '5px',
    textAlign: 'center',
    backgroundColor: '#E6E6FA',
  },
  photo: {
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
  },
  buttonContainer: {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  seeMyPhotoButton: {
    padding: '10px 20px',
    backgroundColor: '#FF6F61', 
    color: 'white',
    border: '2px solid #FF6F61', 
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  secondaryActionButton: {
    padding: '10px 20px',
    backgroundColor: 'white', 
    color: '#FF6F61',
    border: '2px solid #FF6F61', 
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};
// Exporting the AlbumPage component
export default AlbumPage;
