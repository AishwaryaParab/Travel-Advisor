import React from "react";
import { Autocomplete } from "@react-google-maps/api";

import "./Header.css";
import { Search } from "@material-ui/icons"; 

const Header = () => {
    return (
        <div className="header">
            <h3>Travel Advisor</h3>
            <div className="explore">
                <p>Explore new places</p>
                <div className="search">
                    <Search className="search-icon"/>
                    <input placeholder="Search" />
                </div>
            </div>
        </div>
    );
}

export default Header;