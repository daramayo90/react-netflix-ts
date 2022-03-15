import { Link } from 'react-router-dom';

import "./notFound404.css";

function NotFound404() {
  return (
    <section className="error404">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src="assets/images/netflix.svg" alt="" />
        </div>
      </div>
      <div className="container">
        <div className="wrapper-text">
          <h1>Lost your way?.</h1>
          <p>
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.
          </p>
        </div>
        <Link to="/">
          <button className="button404">Netflix Home</button>
        </Link>
      </div>
    </section>
  );
}

export default NotFound404;
