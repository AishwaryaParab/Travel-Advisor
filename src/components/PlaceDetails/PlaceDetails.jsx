import React from "react";
import "./PlaceDetails.css";
import CardMedia from "./CardMedia";
import CardContent from "./CardContent";
import Chip from "./Chip";
import LocationOnOutlined from "@material-ui/icons/LocationOnOutlined";
import PhoneIcon from "@material-ui/icons/Phone";
import RatingComp from "./RatingComp";


const PlaceDetails = ({place}) => {
    console.log(place);
    return (
        <div>
            {place.photo && place.name && 
                <div className="placeDetails">
                <CardMedia image={place.photo ? place.photo.images.large.url : null} /> 
                <p className="restaurantName">{place.name}</p>
                <RatingComp rating={place.rating} reviews={place.num_reviews} />
    
                <CardContent contentKey="Price" contentValue={place.price_level} />
                <CardContent contentKey="Ranking" contentValue={place.ranking} />
    
                {place?.awards?.map((award) => {
                    return (
                        <div className="card-content">
                            <img src={award.images.small} alt={award.display_name}  ></img>
                            <p>{award.display_name}</p>
                        </div>
                    )
                })}
    
                <div className="cuisinebar">
                    {place?.cuisine?.map((item, index) => (
                        <Chip key={index} name={item.name}  />
                    ))}
                </div>
    
                {place?.address && (
                    <div className="card-content address">
                        <LocationOnOutlined /> 
                        <p>{place.address}</p>
                    </div>
                )}
    
                {place?.phone && (
                    <div className="card-content phone">
                        <PhoneIcon /> 
                        <p>{place.phone}</p>
                    </div>
                )}
    
                <div className="actions">
                    {place?.web_url && (
                        <a target="_blank" href={place.web_url}>TRIP ADVISOR</a>
                    )}
    
                    {place?.website && (
                        <a target="_blank" href={place.website}>WEBSITE</a>
                    )}
                </div>
    
              </div>
                 /* <h2>{place.name}</h2> */
            }
        </div>
    );
}

export default PlaceDetails;