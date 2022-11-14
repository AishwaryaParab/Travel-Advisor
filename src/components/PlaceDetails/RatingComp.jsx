import React from "react";
import { Rating } from "@material-ui/lab";
import "./PlaceDetails.css";

const RatingComp = ({rating, reviews}) => {
    return (
        <div className="rating">
            <Rating size="small" value={Number(rating)} readonly />
            <p>out of {reviews} reviews</p>
        </div>
    );
}

export default RatingComp;