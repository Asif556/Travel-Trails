import React from 'react';
import './Info.css';
import Navbar from '../Navbar/Navbar';
import { useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';
const Info = () => {
    useEffect(() => {
        const typewriter = new Typewriter('#typewriter4', {
          strings: ["Travel-Trails"],
          autoStart: true,
          loop: true,
          delay: 200,
        });
      }, []);

  return (
    <div className="maininfo">
        <Navbar />
        <div className='info'>
            <div className="title">
               <span id='typewriter4'></span>
            </div>
            <div className="boxes">
                <div className="box">
                    <div className="headline">
                        <h3>Welcome to Travel-Trails: Your Guide to Budget-Friendly Adventures! 🌍</h3>
                    </div>
                    <div className="content">
                        <p>"Planning your dream trip just got easier! Travel-Trails is here to predict your travel expenses, offering a seamless way to budget for your journey. Let us take care of the numbers so you can focus on the adventure!"</p>
                    </div>
                </div>
                <div className="box">
                    <div className="headline">
                        <h3>Unlock the Magic of Smart Travel Planning:</h3>
                    </div>
                    <div className="content">
                        <p>Travel-Trails empowers you to estimate and manage your trip costs with ease. Whether it's accommodation, travel, or dining expenses, our advanced algorithms provide accurate estimates, making it easier to plan your ideal trip.</p>
                    </div>
                </div>
                <div className="box">
                    <div className="headline">
                        <h3>Budgeting Made Simple:</h3>
                    </div>
                    <div className="content">
                        <p>With Travel-Trails, budgeting is a breeze. Just input your travel details, and we'll handle the rest, giving you real-time predictions for travel expenses and helping you make informed decisions effortlessly.</p>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
  );
}

export default Info;
