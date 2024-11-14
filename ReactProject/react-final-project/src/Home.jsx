import React, { useState } from 'react';

const Home = () => {
  const [isReadMoreVeg, setIsReadMoreVeg] = useState(false);
  const [isReadMoreNonVeg, setIsReadMoreNonVeg] = useState(false);

  const toggleReadMoreVeg = () => {
    setIsReadMoreVeg(!isReadMoreVeg);
  };

  const toggleReadMoreNonVeg = () => {
    setIsReadMoreNonVeg(!isReadMoreNonVeg);
  };

  return (
    <div className="container">
      {/* Vegetables Section */}
      <div className="section">
        <div style={{ flex: 1 }}>
          <img 
            src="https://img.freepik.com/free-photo/vegetables-herbs-basket_23-2147694078.jpg?t=st=1731230742~exp=1731234342~hmac=4e0265e7eb9a0e46b3c095faecef827320276a0b922ff5f905f1c7d3324ef949&w=996"
            alt="Vegetables and Herbs Basket"
          />
        </div>
        <div className="section-text">
          <h2 className="vegetable-heading">Fresh Vegetables</h2>
          <p>
            Welcome to our vegetable section! We offer a wide variety of fresh vegetables, 
            sourced directly from farms to ensure maximum freshness. Our vegetables are 
            grown with care, using eco-friendly farming practices to support sustainable living.
          </p>
          {isReadMoreVeg && (
            <p>
              From leafy greens to root vegetables, we provide healthy options for every meal. 
              Join us in promoting healthy eating and sustainable farming practices!
            </p>
          )}
          <button onClick={toggleReadMoreVeg}>
            {isReadMoreVeg ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>

      {/* Non-Veg Section */}
      <div className="section">
        
        <div className="section-text">
          <h2 className="non-veg-heading">Fresh Non-Veg Delights</h2>
          <p>
            Our website offers a wide selection of fresh non-veg products, sourced from trusted suppliers. 
            We guarantee that our products are of the highest quality, ensuring you get the best taste and nutritional value.
          </p>
          {isReadMoreNonVeg && (
            <p>
              From tender chicken cuts to succulent beef and pork, our offerings cater to all your meat needs. 
              We believe in quality, freshness, and ethical sourcing to provide you with the best non-veg experience.
            </p>
          )}
          <button onClick={toggleReadMoreNonVeg}>
            {isReadMoreNonVeg ? 'Read Less' : 'Read More'}
          </button>
        </div>
        <div style={{ flex: 1 }}>
          <img 
            src="public/nonveg3.avif"
            alt="Non-Veg Food"
          />
        </div>
      </div>

      {/* Additional Non-Veg Image */}
      <div className="section">
  <div style={{ flex: 1 }}>
    <img 
      src="public/chicken1.avif"
      alt="Fresh Chicken"
      className="non-veg-second-image"
    />
  </div>
  <div className="section-text">
    <h2 className="non-veg-heading">Fresh Chicken</h2>
    <p>
      Our fresh chicken is sourced from trusted farms that prioritize animal welfare 
      and sustainable practices. Each piece is carefully selected to ensure premium 
      quality and tenderness. We believe in providing only the freshest and healthiest 
      options for our customers, making every meal a delicious and nutritious experience.
    </p>
    <p>
      Whether you’re cooking a family dinner or preparing a special dish, our chicken 
      offers versatility, flavor, and convenience. Taste the difference with our fresh chicken— 
      it’s the perfect ingredient for your next meal.
    </p>
  </div>
</div>

    </div>
  );
};

export default Home;
