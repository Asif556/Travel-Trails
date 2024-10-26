import React, { useEffect } from 'react';
import './Sikkim.css'; 

import Typewriter from 'typewriter-effect/dist/core';
import { useNavigate } from "react-router-dom";

const Sikkim = () => {
  let a=useNavigate()
  let changetopredict=()=>{
    a('/PredictionSikkim')
  }
  
  const attractions = [
    {
      id: 1,
      title: "Gangtok - The Capital City",
      description:
        "Nestled in the Himalayas, Gangtok offers stunning views of the Kanchenjunga and a vibrant culture.",
      image: "/NathulaPass.jpg",
    },
    {
      id: 2,
      title: "Pelling - The Scenic Beauty",
      description:
        "Famous for its breathtaking views of the Himalayas, Pelling is home to the iconic Kanchenjunga Falls.",
      image: "/Pelling.jpg",
    },
    {
      id: 3,
      title: "Nathula Pass - Indo-China Border",
      description:
        "A stunning mountain pass that offers breathtaking views and is a crucial trade route between India and China.",
      image: "/NathulaPass.jpg",
    },
    {
      id: 4,
      title: "Yuksom - The Gateway to Kanchenjunga",
      description:
        "Known for its rich history and as a starting point for treks to Kanchenjunga Base Camp.",
      image: "/yuksom.jpg",
    },
  ];

  useEffect(() => {
    const typewriter = new Typewriter('#typewriter3', {
      strings: ["Welcome to Sikkim"],
      autoStart: true,
      loop: true,
      delay: 200,
    });
  }, []);

  return (
    <div className="Sikkim">
      <h1 className="page-title"><span id='typewriter3'></span></h1>
      <div className="tour-box">
        <h2 className="box-title">Sikkim Tourism</h2>
        <p className="box-description">
          Sikkim, nestled in the eastern Himalayas, is known for its stunning landscapes, rich biodiversity, 
          and vibrant culture. This small state offers a unique blend of adventure and serenity, 
          making it a must-visit destination.
        </p>
      
        <ul className="highlights-list">
          <li><b>Capital:</b> Gangtok</li>
          <li><b>Best Time to Visit:</b> March to June and September to December</li>
          <li><b>Popular Attractions:</b> Pelling, Nathula Pass, Yuksom, Tsomgo Lake</li>
          <li><b>Activities:</b> Trekking, River Rafting, Monastery Visits, Shopping</li>
          <li><b>Cuisine:</b> Momo, Thukpa, Gundruk</li>
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
              <button className="explore-button"onClick={changetopredict()}>Explore More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sikkim;
