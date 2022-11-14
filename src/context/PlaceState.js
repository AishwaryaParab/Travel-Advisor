import PlaceContext from "./PlaceContext";
import { useState } from "react";

const PlaceState = (props) => {
    const [childClicked, setChildClicked] = useState(null);

    return (
        <PlaceContext.Provider value={{childClicked, setChildClicked}}>
            {props.children}
        </PlaceContext.Provider>
    );
}

export default PlaceState;