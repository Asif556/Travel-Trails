import React, { useEffect } from 'react';
import './Kerala.css';

import Typewriter from 'typewriter-effect/dist/core';
import { useNavigate } from 'react-router-dom';
const Kerala = () => {
  let a=useNavigate()
  let changetopredict=()=>{
    a('/PredictionKerala')
  }
  
  
  const attractions = [
    {
      id: 1,
      title: "Alleppey - The Venice of the East",
      description:
        "Famous for its picturesque backwaters and houseboat rides, Alleppey is a must-visit destination in Kerala.",
      image: "/alleppey.jpg",
    },
    {
      id: 2,
      title: "Munnar - The Tea Garden",
      description:
        "Known for its lush green tea plantations and cool climate, Munnar is perfect for nature lovers.",
      image: "/munnar.jpg",
    },
    {
      id: 3,
      title: "Kochi - The Queen of the Arabian Sea",
      description:
        "A vibrant city that blends modernity with tradition, Kochi is known for its historical sites and seafood.",
      image: "/kochi.jpg",
    },
    {
      id: 4,
      title: "Wayanad - The Green Paradise",
      description:
        "Known for its scenic beauty, wildlife, and waterfalls, Wayanad is ideal for adventure seekers.",
      image: "/wayanad.jpg",
    },
  ];

  useEffect(() => {
    const typewriter = new Typewriter('#typewriter5', {
      strings: ["Welcome to Kerala"],
      autoStart: true,
      loop: true,
      delay: 200,
    });
  }, []);

  return (
    <div className="App">
      <h1 className="page-title"><span id='typewriter5'></span></h1>
      <div className="tour-box">
        <h2 className="box-title">Kerala Tourism</h2>
        <p className="box-description">
          Kerala, known as 'God's Own Country,' is famous for its lush landscapes, serene backwaters, and rich cultural heritage. 
          It offers a unique blend of relaxation and adventure, making it a perfect travel destination.
        </p>
      
        <ul className="highlights-list">
          <li><b>Capital:</b> Thiruvananthapuram</li>
          <li><b>Best Time to Visit:</b> September to March</li>
          <li><b>Popular Attractions:</b> Alleppey, Munnar, Kochi, Wayanad</li>
          <li><b>Activities:</b> Houseboat Cruises, Tea Plantation Tours, Wildlife Sanctuaries, Ayurvedic Treatments</li>
          <li><b>Cuisine:</b> Appam, Karimeen Pollichathu, Sadhya</li>
        </ul>

        <button className="explore-button" onClick={changetopredict}>Explore More</button>
      </div>
      
      <div className="cards-container">
        {attractions.map((attraction) => (
          <div className="card" key={attraction.id}>
            <img
              src={attraction.image}
              alt={attraction.title}
              className="card-image"
            />
            <div className="card-content">
              <h2 className="card-title">{attraction.title}</h2>
              <p className="card-description">{attraction.description}</p>
              <button className="explore-button" onClick={changetopredict}>Explore More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kerala;
