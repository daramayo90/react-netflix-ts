import { useState } from "react";
import useAuth from "../../auth/useAuth";

import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /**
   * Llamamos a la función que se encuentra en el contextValue
   * El contextValue es el valor enviado por el AuthProvider a todos los componentes hijos
   * La función 'login' toma las userCredentials del backend y realiza un setUser con dichas credentials
   */
  const { login } = useAuth();

  return (
    <section className="login">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src="assets/images/netflix.svg" alt="" />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={ e=> { e.preventDefault(); login({email, password})} }>
            Sign In
          </button>
          <span>
            New to Netflix? <b>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>
          </small>
        </form>
      </div>
    </section>
  );
}

export default Login;
