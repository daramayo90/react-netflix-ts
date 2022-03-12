import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

import SearchIcon from "@material-ui/icons/Search";
import CardGiftIcon from "@material-ui/icons/CardGiftcard";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

interface Props {
  only_logo: boolean;
  profile_url?: string;
}

function Navbar({ only_logo, profile_url }: Props) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  if (only_logo) {
    return (
      <div className="navbar-container">
        <img className="logo" src="assets/images/netflix.svg" />
      </div>
    );
  } else {
    return (
      <div className={isScrolled ? "scrolled" : "navbar"}>
        <div className="navbar-container">
          <img className="logo" src="assets/images/netflix.svg" />

          <Link to="/" className="link">
            <button className="button-tertiary button-tertiary-active">
              Home
            </button>
          </Link>

          <Link to="/series" className="link">
            <button className="button-tertiary">Series</button>
          </Link>

          <Link to="/films" className="link">
            <button className="button-tertiary">Films</button>
          </Link>

          <Link to="/latest" className="link">
            <button className="button-tertiary">Latest</button>
          </Link>

          <Link to="/my-list" className="link">
            <button className="button-tertiary">My List</button>
          </Link>

          <div className="spacer"></div>

          <SearchIcon className="icon" />
          <CardGiftIcon className="icon" />
          <NotificationsIcon className="icon" />
          {profile_url && <img className="profile-image" src={profile_url} />}
          <div className="profile">
            <ArrowDropDownIcon className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
