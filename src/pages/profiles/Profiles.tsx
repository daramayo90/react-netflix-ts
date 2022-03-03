import React from "react";

import './Profiles.css'

import profiles from "../../data/profiles/profiles.json";
import Button from "../../components/button/Button";

interface Props {
    onProfileClick: Function;
}

function Profiles ({onProfileClick}: Props) {
    return (
        <div className="content">
        <span className="title">Who's watching?</span>
        <div className="profiles">

          {profiles.map((profile, index) => (
            <div className="profile" key={index} onClick={(e) => onProfileClick(profile)}>
              <img className="image" src={profile.image_src} />
              <span className="username">{profile.username}</span>
            </div>
          ))}

        </div>
        <Button label="MANAGE PROFILES" />
      </div>
    )
}

export default Profiles;