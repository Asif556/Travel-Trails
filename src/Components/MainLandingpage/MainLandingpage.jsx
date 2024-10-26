import React from 'react';
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import "./MainLandingpage.css";
const MainLandingpage = () => {
  return (
    <div className='elements'>
        <video className='background-video' autoPlay muted loop>
            <source src="/bg-video.mp4" type="video/mp4" />
           
        </video>
        <Navbar />
        <About />
    </div>
  );
}

export default MainLandingpage;
