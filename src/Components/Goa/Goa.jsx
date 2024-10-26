import React, { useEffect } from 'react';
import './Goa.css';

import Typewriter from 'typewriter-effect/dist/core';
import { useNavigate } from "react-router-dom";

const Goa = () => {
  let navigate = useNavigate();
  
    let changetopredict=()=> {
    navigate('/PredictionGoa');
  }
  
  const attractions = [
    {
      id: 1,
      title: "Baga Beach - The Vibrant Hangout",
      description:
        "Known for its lively nightlife, water sports, and bustling shacks, Baga Beach is a favorite spot among tourists.",
      image: "/BagaBeach.jpg",
    },
    {
      id: 2,
      title: "Old Goa - The Historic Heart",
      description:
        "Famous for its centuries-old churches and Portuguese architecture, Old Goa is a UNESCO World Heritage Site.",
      image: "/OldGoa.jpg",
    },
    {
      id: 3,
      title: "Dudhsagar Falls - Nature's Spectacle",
      description:
        "One of India’s tallest waterfalls, Dudhsagar offers breathtaking views and is popular for trekking and photography.",
      image: "/DudhsagarFalls.jpg",
    },
    {
      id: 4,
      title: "Anjuna Flea Market - Shopper’s Paradise",
      description:
        "A popular spot for buying handicrafts, souvenirs, and jewelry, the Anjuna Flea Market captures Goa's unique vibe.",
      image: "/AnjunaMarket.jpg",
    },
  ];

  useEffect(() => {
    const typewriter = new Typewriter('#typewriter2', {
      strings: ["Welcome to Goa"],
      autoStart: true,
      loop: true,
      delay: 200,
    });
  }, []);

  return (
    <div className="Goa">
      <h1 className="page-title"><span id='typewriter2'></span></h1>
      <div className="tour-box">
        <h2 className="box-title">Goa Tourism</h2>
        <p className="box-description">
          Goa, India's smallest state, is famous for its beaches, vibrant nightlife, and Portuguese heritage. 
          Known as the "Pearl of the Orient," Goa offers a mix of sun, sand, and rich history, making it a 
          top destination for beach lovers and culture enthusiasts alike.
        </p>
      
        <ul className="highlights-list">
          <li><b>Capital:</b> Panaji</li>
          <li><b>Best Time to Visit:</b> November to February</li>
          <li><b>Popular Attractions:</b> Baga Beach, Old Goa, Dudhsagar Falls, Anjuna Market</li>
          <li><b>Activities:</b> Beach Hopping, Water Sports, Nightlife, Shopping</li>
          <li><b>Cuisine:</b> Goan Fish Curry, Bebinca, Vindaloo</li>
        </ul>

        <button className="explore-button" onClick={changetopredict} >Explore More</button>
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

export default Goa;
