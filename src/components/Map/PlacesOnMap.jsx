import React, { useContext } from "react";
import "../../styles.css";
import { Rating } from "@material-ui/lab";
import PlaceContext from "../../context/PlaceContext";

const PlacesOnMap = ({place, index}) => {

    const {childClicked, setChildClicked} = useContext(PlaceContext);

    return (<div>
        {place.name && place.photo && place.rating &&
                <div 
                 onClick={() => {
                    setChildClicked(place.name);
                 }}
                 className="map-places">
                        <p>{place.name}</p>
                        <img src={place.photo.images.large.url} />
                        <br></br>
                        <Rating size="small" value={Number(place.rating)} readonly/>
                </div>}
    </div>);
            
}

export default PlacesOnMap;