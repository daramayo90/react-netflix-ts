import React, {useState} from "react";

import "./Landing.css";

import { Profile as ProfileModel } from "../../models/profile/Profile";
import Profiles from '../profiles/Profiles'
import Browse from '../browse/Browse'

function Landing () {
  const [user, setUser] = useState <ProfileModel | undefined> (undefined);

  function onProfileClick (profile: ProfileModel) {
    setUser(user => profile);
  }

  return (
    <div className="landing-container">
      <img className="logo" src="assets/images/netflix.svg" />
      {user === undefined ? <Profiles onProfileClick={onProfileClick} /> : <Browse />}
    </div>
  );
}

export default Landing;
