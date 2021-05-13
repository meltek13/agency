import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Darkmode from "components/Context";

const NavBar = () => {
  const theme = useContext(Darkmode);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand">Portfolio</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/" className="nav-item nav-link active">
            Home
          </Link>

          <Link to={"/work"} className="nav-item nav-link">
            Work
          </Link>

          <Link to="/contact" className="nav-item nav-link">
            Contact
          </Link>

          <button className="themetoggler" onClick={theme.ChangeMode}>
            <span role="img" aria-label="switch theme">
              {localStorage.client === "true" ? "🌞" : "🔅"}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
