import React from "react";
import './Navbar.css'

function Navbar () {
    return (
        <div className="navbar-container">
            <img className="logo" src="assets/images/netflix.svg" />
            <button className="button-tertiary button-tertiary-active">Home</button>
            <button className="button-tertiary">Series</button>
            <button className="button-tertiary">Films</button>
            <button className="button-tertiary">Latest</button>
            <button className="button-tertiary">My List</button>
        </div>
    )
}

export default Navbar;