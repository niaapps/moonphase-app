import React, { useState, useEffect } from 'react';

import newMoon from '../assets/images/new.jpg';
import waxingCrescent from '../assets/images/waxing_crescent.jpg';
import firstQuarter from '../assets/images/first_quarter.jpg';
import waxingGibbous from '../assets/images/waxing_gibbous.jpg';
import fullMoon from '../assets/images/full.jpg';
import waningGibbous from '../assets/images/waning_gibbous.jpg';
import lastQuarter from '../assets/images/third_quarter.jpg';
import waningCrescent from '../assets/images/waning_crescent.jpg';

import PhaseAnimation from './PhaseAnimation';


const PhasesPage = () => {

  const phases = [
    { name: 'New Moon', image: newMoon, description: 'During the New Moon, the moon is between the Earth and the Sun, and the side facing Earth is not illuminated by the Sun. Astrologically, the New Moon represents a new beginning. Some people like to do introspections and reflection, or shadow work doing the new moon, but all around it is a great time to start setting intentions for the upcoming cycle. Getting clear on what you wish to achieve throughout the upcoming phases.' },
    { name: 'Waxing Crescent', image: waxingCrescent, description: 'During the Waxing Crescent, the Moon appears to be partly but less than half illuminated by the Sun. The fraction of the Moon\'s disk that is illuminated is increasing. Astrologically the Waxing Crescent phase is good for initiating steps towards goals proclaimed during the new moon. Waxing phases are all about growth as more and more of the moon becomes illuminated.' },
    { name: 'First Quarter', image: firstQuarter, description: 'During the First Quarter, one-half of the Moon appears to be illuminated by the Sun.  Astrologically, the First Quarter is a great time for committment, action and decisiveness. To continue to build and act towards your goals. Sustaining any efforts.' },
    { name: 'Waxing Gibbous', image: waxingGibbous, description: 'During the Waxing Gibbous, the Moon appears to be more than half but not fully illuminated by the Sun. Astrologically, the Waxing Gibbous is a time for refinement and adjustment. It\'s a good time to take stock of your progress and make any necessary changes. Waxing phases are all about growth as more and more of the moon becomes illuminated.' },
    { name: 'Full Moon', image: fullMoon, description: 'During the Full Moon, the Moon is on the opposite side of Earth from the Sun, and the side facing Earth is fully illuminated by the Sun. Astrologically the Full Moon is a time of culmination and clarity. It\'s a powerful time for self-reflection, releasing what no longer serves you and for celebrating your achievements. Many fall prey to the high-energy this phase brings, sometimes causing conflicts, which is why online, the Full Moon gets a bad rap. At it\'s core, Full Moons enchance whatever energy you have going on, so taking time to ground, and self reflect can help you avoid engaging in unecessary conflict.' },
    { name: 'Waning Gibbous', image: waningGibbous, description: 'During the Waning Gibbous, the Moon appears to be more than half but not fully illuminated by the Sun. The fraction of the Moon\'s disk that is illuminated is decreasing. Astrologically the Waning Phase is our first taste of release. We tend to continue to ruminate on no longer serves us and to reflect on the lessons learned during the Full Moon. This can also be a powerful time for gratitude, having just felt the gift of the Full Moon\'s energy. Waning Phases are all about letting go and making space.' },
    { name: 'Last Quarter', image: lastQuarter, description: 'During the Last Quarter, one-half of the Moon appears to be illuminated by the Sun. The fraction of the Moon\'s disk that is illuminated is decreasing. Astrologically the Last Quarter is a time for reflection and evaluation. It\'s a good time to reflect on the past phases. This phase is associated with forgivness, for yourself or others, and again releasing any remaining burdens. Waning Phases are all about letting go and making space.' },
    { name: 'Waning Crescent', image: waningCrescent, description: 'During the Waning Crescent, the Moon appears to be partly but less than half illuminated by the Sun. The fraction of the Moon\'s disk that is illuminated is decreasing. Astrologically the Waning Crescent is a time for rest and recuperation. It\'s time to prepare for the new cycle ahead. Waxing Phases are all about letting go and making space.' }
  ];

  return (
    <div className="phases-page">
      <h1>Moon Phases</h1>
      <h2 className="phases-intro">The Moon goes through a complete cycle of phases approximately every 29.5 days.</h2>

      <PhaseAnimation phasesArray={phases} />

      <p className='phases-intro'>In Astrology, the Moon represents the personal self, the feelings and the unconscious. It is a reflection of your internal influence, as opposed to the Sun, which is your alignment given external influence. The Moon also stands for security and instinctual or habitual patterns, as well as the ability to relate to others. The Moon rules Cancer and is exalted in Taurus. The Moon represents the feminine and nurturing part of oneself. The Moon also represents an attunement from the past, which operates at an instinctive or habitual level in your present life.</p>
      <br/>

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