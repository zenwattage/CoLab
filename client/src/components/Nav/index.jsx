import React from "react";
import "./style.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
function NavBarStuff() {
  return (
    <Navbar bg="light">
      <Navbar.Brand className="Navbar-brand" href="#">
        <img
          alt=""
          src="logo5.png"
          width="20"
          height="30"
          className="d-inline-block align-top"
        />
        {" CoLab"}
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/profile">Profile</Nav.Link>
        <Nav.Link href="/search">Search</Nav.Link>
        <Nav.Link href="#">Logout</Nav.Link>
      </Nav>
    </Navbar>
  );
}
export default NavBarStuff;