import React from 'react'
import { useEffect } from 'react';
import './About.css'
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect/dist/core';
const About = () => {
    useEffect(() => {
        const a=new Typewriter('#typewriter10', {
          strings: ["Unlock Your Next Destination!"],
          autoStart:true,
          loop:true,
          delay:200
        }); 
      }, []);
    let a=useNavigate()
    function changetomap(){
        a('/map')
    }


  return (
    <div className='main'>
        <div className="name">
            <h1> <span id="typewriter10"></span></h1></div> 
            <div className="description">
                <p>"Ready for your next adventure? <br />Discover India’s breathtaking landscapes, from the majestic Taj Mahal to the tranquil beaches of Goa. Experience history, culture, and natural beauty all in one trip!"</p>
            </div>
            <div className="button">
                <button onClick={changetomap}>Explore Now</button>
            </div>

    </div>
  )
}

export default About