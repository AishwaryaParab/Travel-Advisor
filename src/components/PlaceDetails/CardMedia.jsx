import React from 'react';
import "./PlaceDetails.css";

const CardMedia = ({image}) => {
    return (
        <img className="restaurantImg" src={image} />
    );
}

export default CardMedia;