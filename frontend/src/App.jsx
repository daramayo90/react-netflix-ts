import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";


import useAuth from "./auth/useAuth";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Landing from "./pages/landing/Landing";
import NotFound404 from "./pages/notFound404/NotFound404.jsx";

function App() {
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

          <Route path="/movies">
            {user ? <Landing /> : <Redirect to="/login" />}
          </Route>

          <Route path="/series">
            {user ? <Landing /> : <Redirect to="/login" />}
          </Route>

          <Route path="/films">
            {user ? <Landing /> : <Redirect to="/login" />}
          </Route>

          <Route path="/latest">
            {user ? <Landing /> : <Redirect to="/login" />}
          </Route>

          <Route path="/my-list">
            {user ? <Landing /> : <Redirect to="/login" />}
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
