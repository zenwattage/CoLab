import React from "react";
import "./style.css";
import Navbar from 'react-bootstrap/Navbar';

// CANNOT GET THIS TO WORK BUT WANT TO
function Nav() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#"> <img
        alt=""
        src=""
        width="20"
        height="30"
        className="d-inline-block align-top"
      />
        {' CoLab'}
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">Link</Nav.Link>
      </Nav>
    </Navbar>
  )
}
export default Nav;

// function Nav() {
//   return (
//     <nav className="navbar">
//       <a className="navbar-brand-name" href="/">
//         CoLab
//       </a>
//       <a className="navbar-brand" href="/signup">
//         Sign Up
//       </a>
//       <a className="navbar-brand" href="/profile">
//         Profile
//       </a>
//       <a className="navbar-brand" href="/search">
//         Search
//       </a>
//     </nav>
//   )}
// export default Nav;

