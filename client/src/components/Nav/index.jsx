import React from "react";
import "./style.css"; 
// import Navbar from 'react-bootstrap/Navbar';

// function Nav() {
//   return (
//   <Navbar bg="light" variant="light">
//     <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//     <Nav className="mr-auto">
//       <Nav.Link href="#home">Home</Nav.Link>
//       <Nav.Link href="#signup">Features</Nav.Link>
//       <Nav.Link href="#search">Pricing</Nav.Link>
//       <Nav.Link href="#profile">Pricing</Nav.Link>
//     </Nav>
//   </Navbar>
// )}

// export default Nav;

function Nav() {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/">
        CoLab
      </a>
      <a className="navbar-brand" href="/signup">
        Sign Up
      </a>
      <a className="navbar-brand" href="/profile">
        Profile
      </a>
      <a className="navbar-brand" href="/search">
        Search
      </a>
    </nav>
  )}

export default Nav;
