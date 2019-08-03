import React from "react";
import "./style.css";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
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
        <Nav.Link href="/search">Search Creatives</Nav.Link>
        <NavDropdown title="My Account" id="basic-nav-dropdown">
          <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
          <NavDropdown.Item href="#">Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
}
export default NavBarStuff;