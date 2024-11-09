import React from 'react'
import Navbar from './Navbar'
import "../style/hero.css"

const Hero = () => {
  return (
    <div id="hero" className="hero-container">
      <Navbar />
      <div className="hero-grid">
        <div className="hidden lg:block"></div>
        <div className="hero-text">
          <div>
            <p data-aos="zoom-in-up" className="hero-text-cyan">I'm</p>
            <p data-aos="zoom-in-up" className="hero-text-white">Anoosha</p>
            <p data-aos="zoom-in-up" className="hero-text-cyan">Naz</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
