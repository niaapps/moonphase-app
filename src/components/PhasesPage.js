import React, { useState, useEffect } from 'react';

import newMoon from '../assets/images/new.jpg';
import waxingCrescent from '../assets/images/waxing_crescent.jpg';
import firstQuarter from '../assets/images/first_quarter.jpg';
import waxingGibbous from '../assets/images/waxing_gibbous.jpg';
import fullMoon from '../assets/images/full.jpg';
import waningGibbous from '../assets/images/waning_gibbous.jpg';
import lastQuarter from '../assets/images/third_quarter.jpg';
import waningCrescent from '../assets/images/waning_crescent.jpg';



const PhasesPage = () => {

  const phases = [
    { name: 'New Moon', image: newMoon, description: 'The Moon is between Earth and the Sun, and the side facing Earth is not illuminated by the Sun.' },
    { name: 'Waxing Crescent', image: waxingCrescent, description: 'The Moon appears to be partly but less than half illuminated by the Sun. The fraction of the Moon\'s disk that is illuminated is increasing.' },
    { name: 'First Quarter', image: firstQuarter, description: 'One-half of the Moon appears to be illuminated by the Sun. The fraction of the Moon\'s disk that is illuminated is increasing.' },
    { name: 'Waxing Gibbous', image: waxingGibbous, description: 'The Moon appears to be more than half but not fully illuminated by the Sun. The fraction of the Moon\'s disk that is illuminated is increasing.' },
    { name: 'Full Moon', image: fullMoon, description: 'The Moon is on the opposite side of Earth from the Sun, and the side facing Earth is fully illuminated by the Sun.' },
    { name: 'Waning Gibbous', image: waningGibbous, description: 'The Moon appears to be more than half but not fully illuminated by the Sun. The fraction of the Moon\'s disk that is illuminated is decreasing.' },
    { name: 'Last Quarter', image: lastQuarter, description: 'One-half of the Moon appears to be illuminated by the Sun. The fraction of the Moon\'s disk that is illuminated is decreasing.' },
    { name: 'Waning Crescent', image: waningCrescent, description: 'The Moon appears to be partly but less than half illuminated by the Sun. The fraction of the Moon\'s disk that is illuminated is decreasing.' }
  ];

  return (
    <div className="phases-page">
      <h1>Moon Phases</h1>
      <p className="phases-intro">The Moon goes through a complete cycle of phases approximately every 29.5 days.</p>
      
      <div className="phases-grid">
        {phases.map((phase, index) => (
          <div key={index} className="phase-card">
            <h2>{phase.name}</h2>
            <img src={phase.image} alt={phase.name} className="phase-image" />
            <p>{phase.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhasesPage;