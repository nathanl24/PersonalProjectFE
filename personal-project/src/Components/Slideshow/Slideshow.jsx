import React, { useState, useEffect } from 'react';

const Slideshow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Function to cycle through images
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds (adjust as needed)

    return () => {
      clearInterval(intervalId); // Clean up interval on component unmount
    };
  }, [images]); // Re-run effect when images change

  return (
    <div className="slideshow">
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        style={{ width: '50%', height: '50%' }}
      />
    </div>
  );
};

export default Slideshow;
