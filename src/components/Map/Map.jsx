import React, {useContext} from "react";
import "../../styles.css";
import GoogleMapReact from "google-map-react";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { Rating } from "@material-ui/lab";
import { Marker } from "@react-google-maps/api";
import PlacesOnMap from "./PlacesOnMap";
import PlaceContext from "../../context/PlaceContext";

const Map = ({setCoordinates, setBounds, coordinates, places}) => {

    const {childClicked, setChildClicked} = useContext(PlaceContext);

    return (
        <div className="map-container">
            <GoogleMapReact 
                // bootstrapURLKeys={{key:'AIzaSyC0xPemQAsgiMEldato1iB4pMAjJ4bk9cM'}}
                bootstrapURLKeys={{key:'AIzaSyAtAaBt-mdLX4sdlUT_0AnV60tiP-CqUQk'}} 
                defaultCenter={coordinates} 
                center={coordinates} 
                defaultZoom={14} 
                margin={[50, 50, 50, 50]} 
                options={''} 
                onChange={(e) => {
                    // console.log(e);
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw }); //setting tr and bl 
                }} 
                onChildClick={''}>
                
                {/* displaying the places on the map itself */}
                {places?.map((place, index) => {
                    return <PlacesOnMap key={index} lat={Number(place.latitude)} lng={Number(place.longitude)} place={place} />
                })}


            </GoogleMapReact>
        </div>
    );
}

export default Map;