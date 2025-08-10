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
    'Waxing crescent': waxingCrescent, // for some odd reason on the /advanced calls some of these comes back lowercase
    'First Quarter': firstQuarter,
    'Waxing Gibbous': waxingGibbous,
    'Waxing gibbous': waxingGibbous, 
    'Full Moon': fullMoon,
    'Waning Gibbous': waningGibbous,
    'Waning gibbous': waningGibbous,
    'Last Quarter': lastQuarter,
    'Waning Crescent': waningCrescent
  };
  const phasesDisplayName ={
    'New Moon': 'New Moon',
    'New moon': 'New Moon',
    'Waxing Crescent': 'Waxing Crescent',
    'Waxing crescent': 'Waxing Crescent',
    'First Quarter': 'First Quarter',
    'Waxing Gibbous': 'Waxing Gibbous',
    'Waxing gibbous': 'Waxing Gibbous',
    'Full Moon': 'Full Moon',
    'Waning Gibbous': 'Waning Gibbous',
    'Waning gibbous': 'Waning Gibbous',
    'Last Quarter': 'Last Quarter',
    'Waning Crescent': 'Waning Crescent',
    'Waning crescent': 'Waning Crescent'
  };

  useEffect(() => {
    const fetchMoonPhaseData = async () => {
      console.log("Starting API fetch...");
      console.log("API Key:", process.env.REACT_APP_RAPID_API_KEY);
      
      try {
        console.log("Sending request to API...");
        const response = await fetch("https://moon-phase.p.rapidapi.com/advanced", {
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

  const phaseImage = phaseImages[moonData.moon.phase_name] || newMoon;
  const displayPhaseName = phasesDisplayName[moonData.moon.phase_name] || moonData.moon.phase_name;
  const nextFull = moonData.moon.detailed.upcoming_phases.full_moon.next.days_ahead;
  const nextNew = moonData.moon.detailed.upcoming_phases.new_moon.next.days_ahead;
  return (
    <div className="moon-phase-container">
      <h1>Phases of the Moon</h1>
      <br />
      <h2>Current Moon Phase</h2>
      <div className="moon-visualization">
        <img 
          src={phaseImage} 
          alt={moonData.moon.phase_name} 
          className="moon-image" 
        />
      </div>
      <div className="moon-details">
        <h2 className="phase-name">{displayPhaseName}</h2>
        <p> Illumination: {moonData.moon.illumination}</p>
        <p> Current Age: {moonData.moon.age_days}</p>
        <p> Current Zodiac Sign: {moonData.moon.zodiac.moon_sign}</p>
        {nextFull < nextNew ? (
          <>
            <p>Days until next full moon: {nextFull}</p>
            <p>Days until next new moon: {nextNew}</p>
        
          </>
        ) : (
          <>
          <p>Days until next new moon: {nextNew}</p>
          <p>Days until next full moon: {nextFull}</p>
       
          </>
        )}
        <p className='line-wrap'> Next {moonData.moon.next_lunar_eclipse.type} is viewable from: {moonData.moon.next_lunar_eclipse.visibility_regions} on {moonData.moon.next_lunar_eclipse.datestamp} </p>

      </div>
    </div>
  );
};

export default MoonPhase;