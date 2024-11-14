import React, { useState } from 'react';


function AboutUs() {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="about-us-container">
      <div className="image-container">
        <img 
          src="public/aboutus.avif"
          alt="Vegetables and Herbs Basket"
          className="about-us-image"
        />
      </div>
      <div className="text-container">
        <h2 className="about-us-title">About Us</h2>
        <p className="about-us-description">
          Welcome to our website! We are dedicated to providing the best quality
          products to our customers. Our mission is to deliver fresh and healthy
          produce directly from farms to your table. We believe in sustainable
          and eco-friendly farming practices to ensure the well-being of our
          planet and our customers. Join us on this journey to make the world a
          healthier place, one basket at a time.
        </p>
        {isReadMore && (
          <p className="about-us-description">
            Our team is passionate about bringing you the freshest produce and
            the best service. We work closely with local farmers to ensure that
            every product you receive is of the highest quality. Thank you for
            choosing us as your trusted source for fresh produce.
          </p>
        )}
        <button onClick={toggleReadMore} className="read-more-button">
          {isReadMore ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  
  );
}

export default AboutUs;
