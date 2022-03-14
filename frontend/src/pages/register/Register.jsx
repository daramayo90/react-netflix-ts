import React, { useState, useRef } from "react";
import useAuth from "../../auth/useAuth";

import "./Register.css";

import { ArrowForwardIos } from "@material-ui/icons";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();

  const emailRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  /*
  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setusername(usernameRef.current.value);
    try {
      await axios.post('auth/register', { email, username, password });
      history.push('/login')
    } catch (error) {
      console.log(error);
    }
  };*/

  const { register } = useAuth();

  return (
    <section className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="assets/images/netflix.svg"
            alt=""
          />
          <button className="signInButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <div className="wrapper-text">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <p>
            Ready to watch? Enter your email to create or restar your membership
          </p>
        </div>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="Email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started <ArrowForwardIos className="icon" />
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button className="registerButton" onClick={ e=> { e.preventDefault(); register({email, username, password})} }>
              Start Membership <ArrowForwardIos className="icon" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Register;
