import { useState } from "react";

import "./Landing.css";

import { Profile as ProfileModel } from "../../models/profile/Profile";
import Navbar from "../../components/navbar/Navbar";
import Profiles from "../../components/profiles/Profiles";
import Browse from "../browse/Browse";


function Landing() {
  const [user, setUser] = useState<ProfileModel | undefined>(undefined);

  function onProfileClick(profile: ProfileModel) {
    setUser(profile);
    localStorage.setItem('avatar', JSON.stringify(profile.image_src));
  }

  return (
    <div className="landing-container">
      <Navbar only_logo={!localStorage.getItem('avatar') || localStorage.getItem('avatar') === 'null'} profile_url={JSON.parse(localStorage.getItem('avatar') || '{}')} />
      {!localStorage.getItem('avatar') || localStorage.getItem('avatar') === 'null' ? <Profiles onProfileClick={onProfileClick} /> : <Browse />}
    </div>
  );
}

export default Landing;
