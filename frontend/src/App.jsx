import React, { useContext } from "react";
import "./App.css";
import Landing from "./pages/landing/Landing";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { AuthContext } from "./context/authContext/AuthContext";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {user ? <Landing /> : <Redirect to="/register" />}
          </Route>

          <Route path="/register">
            {!user ? <Register /> : <Redirect to="/" />}
          </Route>

          <Route path="/login">
            {!user ? <Login /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
