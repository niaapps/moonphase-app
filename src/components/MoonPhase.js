import React, { useState, useEffect } from 'react';

import newMoon from '../assets/images/new.jpg';
import waxingCrescent from '../assets/images/waxing_crescent.jpg';
import firstQuarter from '../assets/images/first_quarter.jpg';
import waxingGibbous from '../assets/images/waxing_gibbous.jpg';
import fullMoon from '../assets/images/full.jpg';
import waningGibbous from '../assets/images/waning_gibbous.jpg';
import lastQuarter from '../assets/images/third_quarter.jpg';
import waningCrescent from '../assets/images/waning_crescent.jpg';

const MoonPhase = () => {
  const [moonData, setMoonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Map phase names to their corresponding images
  const phaseImages = {
    'New Moon': newMoon,
    'Waxing Crescent': waxingCrescent,
    'First Quarter': firstQuarter,
    'Waxing Gibbous': waxingGibbous,
    'Full Moon': fullMoon,
    'Waning Gibbous': waningGibbous,
    'Last Quarter': lastQuarter,
    'Waning Crescent': waningCrescent
  };

  useEffect(() => {
    const fetchMoonPhaseData = async () => {
      console.log("Starting API fetch...");
      console.log("API Key:", process.env.REACT_APP_RAPID_API_KEY);
      
      try {
        console.log("Sending request to API...");
        const response = await fetch("https://moon-phase.p.rapidapi.com/basic", {
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "moon-phase.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY
          }
        });
        
        console.log("Response received:", response.status, response.statusText);
        
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
        }
        
        console.log("Parsing JSON response...");
        const data = await response.json();
        console.log("Moon Phase Data:", data);
        
        setMoonData(data);
        setLoading(false);
      } catch (error) {
        console.error("Fetch error:", error);
        setLoading(false);
      }
    };

    fetchMoonPhaseData();
  }, []);

  if (loading) return <div>Loading moon data...</div>;
  if (error) return <div>{error}</div>;

  const phaseImage = phaseImages[moonData.phase_name] || newMoon;

  return (
    <div className="moon-phase-container">
      <h2>Current Moon Phase</h2>
      <div className="moon-visualization">
        <img 
          src={phaseImage} 
          alt={moonData.phase_name} 
          className="moon-image" 
        />
      </div>
      <div className="moon-details">
        <p className="phase-name">{moonData.phase_name}</p>
        <p>Days until next full moon: {moonData.days_until_next_full_moon}</p>
        <p>Days until next new moon: {moonData.days_until_next_new_moon}</p>
      </div>
    </div>
  );
};

export default MoonPhase;