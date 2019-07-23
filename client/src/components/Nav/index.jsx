import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Nav() {
  return (
    <nav className="navbar">
      <a className="navbar-brand-name" href="/">
        CoLab
      </a>
      <a className="navbar-brand" href="/login">
        Log In
      </a>
      <a className="navbar-brand" href="/signup">
        Sign Up
      </a>
      {/* <a className="navbar-brand" href="/profile">
        Profile
      </a> */}
      <a className="navbar-brand" href="/search">
        Search
      </a>
      {/* <a className="navbar-brand" href="/results">
        Results
      </a> */}


{/* 

      <Link className="navbar-brand" to="/">
        CoLab
</Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/login"
              className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
            >
              Log In
      </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/signup"
              className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}
            >
              Sign Up
      </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/profile"
              className={window.location.pathname === "/Profile" ? "nav-link active" : "nav-link"}
            >
              Profile Page
      </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/search"
              className={window.location.pathname === "/SearchArtist" ? "nav-link active" : "nav-link"}
            >
              Search
      </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/results"
              className={window.location.pathname === "/SearchResults" ? "nav-link active" : "nav-link"}
            >
              Results
      </Link>
          </li>
        </ul>
      </div>
    </nav> */}


  </nav>
  );
}


export default Nav;
