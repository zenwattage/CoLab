import React, { Component } from 'react';
import "./Home.css";
import Footer from "./Footer/index";
import Button from "./Button/Button.jsx";
import logo from "../logo5.png"


export default class Home extends Component {
  render() {
    // JSX
    return (
      <div>        
          <img src={logo} className="logoimg" alt="logo" />

          <div className="buttons">
            <Button link = "/login" value = "login">Log In</Button>
            <Button link = "/signup" value = "signup">Sign Up</Button>
          </div>

          <Footer />
      </div>
    );
  }
}