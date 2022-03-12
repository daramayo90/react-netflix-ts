import React, { useState, useRef } from "react";

import "./Register.css";

import { ArrowForwardIos } from "@material-ui/icons";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };

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
            <input type="password" placeholder="Password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start Membership <ArrowForwardIos className="icon" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Register;
