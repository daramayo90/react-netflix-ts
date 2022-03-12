import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import "./Landing.css";

import { Profile as ProfileModel } from "../../models/profile/Profile";
import Navbar from "../../components/navbar/Navbar";
import Profiles from "../../components/profiles/Profiles";
import Browse from "../browse/Browse";

interface Props {
  type?: string;
}

function Landing({ type }: Props) {
  const [user, setUser] = useState<ProfileModel | undefined>(undefined);

  function onProfileClick(profile: ProfileModel) {
    setUser((user) => profile);
  }

  return (
    <Switch>
      <div className="landing-container">
        <Navbar only_logo={user === undefined} profile_url={user?.image_src} />
        {user === undefined ? (
          <Profiles onProfileClick={onProfileClick} />
        ) : (
          <>
            <Route exact path="/">
              <Browse />
            </Route>
            <Route path="/movies">
              <Browse />
            </Route>
            <Route path="/series">
              <Browse />
            </Route>
            <Route path="/films">
              <Browse />
            </Route>
            <Route path="/latest">
              <Browse />
            </Route>
            <Route path="/my-list">
              <Browse />
            </Route>
          </>
        )}
      </div>
    </Switch>
  );
}

export default Landing;
