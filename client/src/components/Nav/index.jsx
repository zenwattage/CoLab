import React from "react";
import "./style.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "./logo5.png";

function NavBarStuff() {
  return (
    <Navbar bg="light">
      <Navbar.Brand className="Navbar-brand" href="#">
        <img
          alt=""
          src={logo}
          width="70"
          height="90"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <a href="/profile" className = "navbar">Profile</a>
        <a href="/search" className = "navbar">Search</a>
        <a href="#" className = "navbar">Logout</a>
      </Nav>
    </Navbar>
  );
}
export default NavBarStuff;