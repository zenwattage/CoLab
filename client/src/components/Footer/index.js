import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import "./style.css";

function Footer() {
  return (
    <Navbar navbar-expand navbar-light bg-light className="footer">
      <div>
        <p className="center">© CoLab: 2019</p>
      </div>
    </Navbar>
  );
}

export default Footer;
