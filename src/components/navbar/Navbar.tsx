import React, { useState } from "react";

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
          <button className="button-tertiary button-tertiary-active">
            Home
          </button>
          <button className="button-tertiary">Series</button>
          <button className="button-tertiary">Films</button>
          <button className="button-tertiary">Latest</button>
          <button className="button-tertiary">My List</button>

          <div className="spacer"></div>

          <SearchIcon />
          <CardGiftIcon />
          <NotificationsIcon />
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
