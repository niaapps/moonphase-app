import React from "react";

const AstrologyPage = () => {
  return (
    <div className="page astrology-page">
      <h1>Your Moon Sign</h1>
      <div className="signs-grid">
        <div className="icon-container"><p className="sign-icon">♈️</p><p>Aries</p></div>
        <div className="icon-container"><p className="sign-icon">♉️</p><p>Taurus</p></div>
        <div className="icon-container"><p className="sign-icon">♊️</p><p>Gemini</p></div>
        <div className="icon-container"><p className="sign-icon">♋️</p><p>Cancer</p></div>
        <div className="icon-container"><p className="sign-icon">♌️</p><p>Leo</p></div>
        <div className="icon-container"><p className="sign-icon">♍️</p><p>Virgo</p></div>
        <div className="icon-container"><p className="sign-icon">♎️</p><p>Libra</p></div>
        <div className="icon-container"><p className="sign-icon">♏️</p><p>Scorpio</p></div>
        <div className="icon-container"><p className="sign-icon">♐️</p><p>Sagittarius</p></div>
        <div className="icon-container"><p className="sign-icon">♑️</p><p>Capricorn</p></div>
        <div className="icon-container"><p className="sign-icon">♒️</p><p>Aquarius</p></div>
        <div className="icon-container"><p className="sign-icon">♓️</p><p>Pisces</p></div>
      </div>
    </div>
  );
};

export default AstrologyPage;
/*
I'm thinking about what I want this page to be.
The layout. Do I want to do a grid, where you choose your moon sign and the content renders then.
Is there a way to incorporate state management?










*/