import { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

import SearchIcon from "@material-ui/icons/Search";
import CardGiftIcon from "@material-ui/icons/CardGiftcard";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import useAuth from "../../auth/useAuth";


function Navbar({ only_logo, profile_url }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  /**
   * Llamamos a la función que se encuentra en el contextValue
   * El contextValue es el valor enviado por el AuthProvider a todos los componentes hijos
   */
  const { logout } = useAuth();

  if (only_logo) {
    return (
      <div className="navbar-container">
        <img className="logo" src="assets/images/netflix.svg" alt="Netflix Logo" />
      </div>
    );
  } else {
    return (
      <div className={isScrolled ? "scrolled" : "navbar"}>
        <div className="navbar-container">
          <img className="logo" src="assets/images/netflix.svg" alt="Netflix Logo"/>

          <Link to="/" className="link">
            <button className="button-tertiary button-tertiary-active">
              Home
            </button>
          </Link>

          <Link to="/series">
            <button className="button-tertiary">Series</button>
          </Link>

          <Link to="/films">
            <button className="button-tertiary">Films</button>
          </Link>

          <Link to="/latest">
            <button className="button-tertiary">Latest</button>
          </Link>

          <Link to="/my-list">
            <button className="button-tertiary">My List</button>
          </Link>

          <div className="spacer"></div>

          <SearchIcon className="icon" />
          <CardGiftIcon className="icon" />
          <NotificationsIcon className="icon" />
          {profile_url && <img className="profile-image" src={profile_url}  alt="Netflix Profile Avatar"/>}
          <div className="profile">
            <ArrowDropDownIcon className="iconArrow" onClick={() => setOpen(!open)} />
            {console.log(open)}
          {open && <>
            <div className="options">
              <span>Settings</span>
              <span onClick={() => logout()}>Logout</span>
          </div> </>}
            </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
