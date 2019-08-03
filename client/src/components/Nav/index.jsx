import React from "react";
import "./style.css";
import "./logo5.png";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
function NavBarStuff() {
  return (
    <Navbar bg="light">
      <Navbar.Brand className="Navbar-brand" href="#">
        <img
          alt=""
          src="./logo5.png"
          width="20"
          height="30"
          className="d-inline-block align-top"
        />
        {" CoLab"}
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