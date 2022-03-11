import React, {useState} from "react";

import "./Landing.css";

import { Profile as ProfileModel } from "../../models/profile/Profile";
import Navbar from '../../components/navbar/Navbar'
import Profiles from '../../components/profiles/Profiles'
import Browse from '../browse/Browse'

function Landing () {
  const [user, setUser] = useState <ProfileModel | undefined> (undefined);

  function onProfileClick (profile: ProfileModel) {
    setUser(user => profile);
  }

  return (
    <div className="landing-container">
      <Navbar only_logo={user === undefined} profile_url={user?.image_src}/>
      {user === undefined ? <Profiles onProfileClick={onProfileClick} /> : <Browse />}
    </div>
  );
}

export default Landing;
