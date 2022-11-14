import React, {useEffect, useState, createContext, useContext} from "react";
import "./styles.css";

import { getPlacesData } from "./api";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import PlaceState from "./context/PlaceState";

const App = () => {

  const [places, setPlaces] = useState([]); //to log the places from the api request
  const [coordinates, setCoordinates] = useState({}); //setting the coordinates
  const [bounds, setBounds] = useState({}); //to define the boundaries of the map area

  //to set coordinates based on your current location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords : {latitude, longitude}}) => {
      setCoordinates({lat: latitude, lng: longitude});
    })
  }, []);


  //to get the places according to the changed coordinates
  useEffect(()=>{
    getPlacesData(bounds.sw, bounds.ne)
      .then((data) => {
        console.log(data);
        setPlaces(data);
      });
  }, [coordinates, bounds]);



  return (
      <PlaceState>
        <div>
          <Header />
          <div className="sidebar">
            <List places={places} />
            <Map setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates} places={places} />
          </div>
        </div>
      </PlaceState>
  );
}

export default App;