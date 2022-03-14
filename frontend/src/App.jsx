import React, { useContext } from "react";
import "./App.css";
import Landing from "./pages/landing/Landing";
import NotFound404 from "./pages/notFound404/NotFound404.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import useAuth from "./auth/useAuth";

function App() {
  //const { user } = useContext(AuthContext);

  /**
   * Llamamos a los objetos/funciones que se encuentran en el contextValue
   * El contextValue es el valor enviado por el AuthProvider a todos los componentes hijos
   */
  const { user } = useAuth();

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

          <Route path="*">
            <NotFound404 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
