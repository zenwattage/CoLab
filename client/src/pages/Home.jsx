import React, { Component } from 'react';
import Footer from "../components/Footer/index";
import Button from "../components/Button/Button";
import logo from "../logo5.png";
import Login from "../components/Login/index";

export default class Home extends Component {
  render() {
    // JSX
    return (
      <div>
        <img src={logo} className="logoimg" alt="logo" width="300px" />

        {/* RENDER THE LOGIN COMPONENT */}
        <Login />

        {/* LINK TO SIGNUP COMPONENT PAGE */}
        <Button link="/signup" value="signup">Sign Up</Button>

        <Footer />
      </div>
    );
  }
}