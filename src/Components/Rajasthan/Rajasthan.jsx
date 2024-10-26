import React from 'react'
import './Rajasthan.css'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect/dist/core';
const Rajasthan = () => {
  const a=useNavigate()
  let changetopredict=()=>{
    a('/predictionRajasthan')

  }
  
const attractions = [
  {
    id: 1,
    title: "Jaipur - The Pink City",
    description:
      "Known for its iconic Hawa Mahal and the bustling bazaars, Jaipur offers a blend of heritage and modern culture.",
    image: "/image1.jpg",
  },
  {
    id: 2,
    title: "Udaipur - City of Lakes",
    description:
      "The serene Lake Pichola and the grand City Palace make Udaipur a romantic getaway.",
    image: "/image2.webp",
  },
  {
    id: 3,
    title: "Jaisalmer - The Golden City",
    description:
      "Explore the majestic Jaisalmer Fort and enjoy camel rides on the Thar Desert dunes.",
    image: "/image3.jpg",
  },
  {
    id: 4,
    title: "Pushkar - Land of Temples",
    description:
      "Known for its annual Camel Fair and the sacred Pushkar Lake, it attracts thousands of pilgrims every year.",
    image: "/image4.webp",
  },
];
useEffect(() => {
  const a=new Typewriter('#typewriter2', {
    strings: ["Welcome to Rajasthan"],
    autoStart:true,
    loop:true,
    delay:200
  }); 
}, []);

  
  return (
    <div className="App">
      <h1 className="page-title"><span id='typewriter2'></span></h1>
      <div className="tour-box">
        <h2 className="box-title">Rajasthan Tourism</h2>
        <p className="box-description">
          Rajasthan, the Land of Kings, is one of the most popular tourist destinations 
          in India. Known for its magnificent forts, opulent palaces, vibrant festivals, 
          and golden deserts, Rajasthan offers a unique blend of history, culture, and adventure.
        </p>
      
      <ul className="highlights-list">
          <li><b>Capital:</b> Jaipur (The Pink City)</li>
          <li><b>Best Time to Visit:</b> October to March</li>
          <li><b>Popular Attractions:</b> Udaipur, Jaisalmer, Jodhpur, Pushkar, Mount Abu</li>
          <li><b>Activities:</b> Desert Safari, Camel Ride, Cultural Festivals, Shopping</li>
          <li><b>Cuisine:</b> Dal Baati Churma, Gatte ki Sabzi, Laal Maas</li>
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
  )
}

export default Rajasthan