import React from "react";
import "./PlaceDetails.css";

const CardContent = ({contentKey, contentValue}) => {
    return (
        <div className="card-content">
            <p>{contentKey}</p>
            <p>{contentValue}</p>
        </div>
    );
}

export default CardContent;