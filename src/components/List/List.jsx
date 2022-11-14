import React, {useState, useContext} from "react";
import { Typography, InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";
import "./List.css";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import PlaceContext from "../../context/PlaceContext";

const List = ({places}) => {
    const [type, setType] = useState("restaurants");
    const [rating, setRating] = useState(0);

    const {childClicked, setChildClicked} = useContext(PlaceContext);

    return (
        <div className="list-container">
            {childClicked}
            <p className="heading">Restaurants, Hotels & Attractions around you</p>

            <div className="choice">
                <div className="form-main">
                    <FormControl>
                        <InputLabel>Type</InputLabel>
                        <Select value={type} onChange={(e) => setType(e.target.value)}>
                            <MenuItem value="restaurants">Restaurants</MenuItem>
                            <MenuItem value="hotels">Hotels</MenuItem>
                            <MenuItem value="attractions">Attractions</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className="form-main">
                    <FormControl>
                        <InputLabel>Rating</InputLabel>
                        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                            <MenuItem value={0}>All</MenuItem>
                            <MenuItem value={3}>Above 3.0</MenuItem>
                            <MenuItem value={4}>Above 4.0</MenuItem>
                            <MenuItem value={4.5}>Above 4.5</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>

            {places?.map((place, index) => {
                return (
                    <div className="places" key={index}><PlaceDetails place={place} /></div>
                );
            })}
        </div>
    );
}

export default List;