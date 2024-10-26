import React, { useEffect } from 'react';
import './WestBengal.css';

import Typewriter from 'typewriter-effect/dist/core';
import { useNavigate } from "react-router-dom";

const WestBengal = () => {
  let a=useNavigate()
  let changetopredict=()=>{
    a('/PredictionWestBengal')
  }
  

  
  
  const attractions = [
    {
      id: 1,
      title: "Sundarbans - The Mangrove Paradise",
      description:
        "Home to the Royal Bengal Tiger, the Sundarbans is a UNESCO World Heritage Site and the largest mangrove forest in the world.",
      image: "/Sundarbans.jpg",
    },
    {
      id: 2,
      title: "Darjeeling - The Queen of the Hills",
      description:
        "Famous for its tea plantations and views of Kanchenjunga, Darjeeling is a picturesque hill station known for its colonial charm.",
      image: "/Darjeeling.jpg",
    },
    {
      id: 3,
      title: "Victoria Memorial - Architectural Marvel",
      description:
        "An iconic monument built in memory of Queen Victoria, it reflects the rich history of British rule in India.",
      image: "/VictoriaMemorial.jpg",
    },
    {
      id: 4,
      title: "Howrah Bridge - Engineering Marvel",
      description:
        "One of Kolkata's iconic landmarks, Howrah Bridge is an engineering feat and a vital link across the Hooghly River, offering stunning views of the city.",
      image: "/HowrahBridge.jpg",
    },
  ];
  

  useEffect(() => {
    const typewriter = new Typewriter('#typewriter4', {
      strings: ["Welcome to West Bengal"],
      autoStart: true,
      loop: true,
      delay: 200,
    });
  }, []);

  return (
    <div className="WestBengal">
      <h1 className="page-title"><span id='typewriter4'></span></h1>
      <div className="tour-box">
        <h2 className="box-title">West Bengal Tourism</h2>
        <p className="box-description">
          West Bengal, a state of diverse culture and natural beauty, offers visitors an unforgettable experience.
          From the serene landscapes of Darjeeling to the spiritual heart of Kalighat, West Bengal promises a rich
          journey through history, culture, and nature.
        </p>
      
        <ul className="highlights-list">
          <li><b>Capital:</b> Kolkata</li>
          <li><b>Best Time to Visit:</b> October to March</li>
          <li><b>Popular Attractions:</b> Sundarbans, Darjeeling, Victoria Memorial, Kalighat Temple</li>
          <li><b>Activities:</b> Tea Tourism, Wildlife Safari, Heritage Tours, Cultural Festivals</li>
          <li><b>Cuisine:</b> Machher Jhol, Mishti Doi, Shorshe Ilish</li>
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

export default WestBengal;
