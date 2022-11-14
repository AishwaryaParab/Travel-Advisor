import React from 'react';
import "./PlaceDetails.css";

const Chip = ({name}) => {
    return (
        <p className="cuisine">{name}</p>
    );
}

export default Chip;