import "./Register.css";

import { useState, useRef } from "react";
import { Link } from "react-router-dom";

import { ArrowForwardIos } from "@material-ui/icons";

import useAuth from "../../auth/useAuth";
import validator from "validator";

function Register() {
  const error = useRef();
  const emailRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(false);

  const emailValidation = () => {
    if (validator.isEmail(emailRef.current.value)) {
      setEmail(emailRef.current.value);
      error.current.innerText = "";
      setErrors(false);
    } else {
      error.current.innerText = "Please, enter a valid email to continue";
      setErrors(true);
    }
  };

  const passwordValidation = (e) => {
    e.preventDefault();

    const uppercaseRegExp = /(?=.*?[A-Z])/;
    const lowercaseRegExp = /(?=.*?[a-z])/;
    const digitsRegExp = /(?=.*?[0-9])/;
    const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
    const minLengthRegExp = /.{8,}/;

    const passwordLength = password.length;
    const uppercasePassword = uppercaseRegExp.test(password);
    const lowercasePassword = lowercaseRegExp.test(password);
    const digitsPassword = digitsRegExp.test(password);
    const specialCharPassword = specialCharRegExp.test(password);
    const minLengthPassword = minLengthRegExp.test(password);

    if (passwordLength === 0) {
      error.current.innerText = "Password is empty";
      setErrors(true);
      return;
    }
    if (!uppercasePassword) {
      error.current.innerText = "At least one Uppercase";
      setErrors(true);
      return;
    }

    if (!lowercasePassword) {
      error.current.innerText = "At least one Lowercase";
      setErrors(true);
      return;
    }

    if (!digitsPassword) {
      error.current.innerText = "At least one digit";
      setErrors(true);
      return;
    }

    if (!specialCharPassword) {
      error.current.innerText = "At least one Special Characters";
      setErrors(true);
      return;
    }

    if (!minLengthPassword) {
      error.current.innerText = "At least minumum 8 characters";
      setErrors(true);
      return;
    }

    register({ email, password });
  };

  const { register } = useAuth();

  return (
    <section className="register">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src="assets/images/netflix.svg" alt="" />
          <Link to="/login">
            <button className="signInButton">Sign In</button>
          </Link>
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
          <>
            <div className="input">
              <input type="email" placeholder="Email address" ref={emailRef} />
              <button className="registerButton" onClick={emailValidation}>
                Get Started <ArrowForwardIos className="icon" />
              </button>
            </div>
          </>
        ) : (
          <form className="input">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="registerButton"
              onClick={(e) => {
                passwordValidation(e);
              }}
            >
              Start Membership <ArrowForwardIos className="icon" />
            </button>
          </form>
        )}
        {errors ? <span ref={error}></span> : <span ref={error}></span>}
      </div>
    </section>
  );
}

export default Register;
