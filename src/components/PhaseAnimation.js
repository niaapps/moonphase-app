import React from "react";

const PhaseAnimation = ({ phasesArray }) => {
    return (
        <div className="phase-animation-container">
        <div className="phase-animation">
            {phasesArray.map((phase, index) => (
                <div className="phase-item"
                >
                    <img src={phase.image} alt={`${phase.name} phase`} />
                </div>
            ))}
        </div>
        </div>
    );
}

export default PhaseAnimation;
