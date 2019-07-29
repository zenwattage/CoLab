import React, { Component } from 'react';
import Footer from "../components/Footer/index";
import Button from "../components/Button/Button";
import logo from "../logo5.png";
import Login from "../components/Login/index";
import Wrapper from "../components/Wrapper/index";

export default class Home extends Component {
  render() {
    // JSX
    return (
      <div>
        <img src={logo} className="logoimg" alt="logo" width="300px" />
      
        <Wrapper>
        {/* RENDER THE LOGIN COMPONENT */}
        <Login />

        {/* LINK TO SIGNUP COMPONENT PAGE */}
        <Button link="/signup" value="signup">Sign Up</Button>
        </Wrapper>

        <Footer />
      </div>
    );
  }
}