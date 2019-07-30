import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import "./style.css";

function Footer() {
  return (
    <Navbar className="footer" fixed="sticky" bg="light">
      <Navbar.Brand className="footer2">© CoLab: 2019</Navbar.Brand>
    </Navbar>
  );
}

export default Footer;
