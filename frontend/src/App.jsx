import React from "react";
import "./App.css";
import Landing from "./pages/landing/Landing";
import { BrowserRouter as Router } from "react-router-dom";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Login />
      </Router>
    </div>
  );
}

export default App;
