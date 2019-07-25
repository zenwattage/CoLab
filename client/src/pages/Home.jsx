import React, { Component } from 'react';
import Footer from "../components/Footer/index";
import Button from "../components/Button/Button";
import logo from "../logo5.png";
// import Login from "../components/Login/index";
// import Signup from "../components/Signup/index";


export default class Home extends Component {
  render() {
    // JSX
    return (
      <div>        
          <img src={logo} className="logoimg" alt="logo" width="300px" />

       {/* HERE WE WILL RENDER THE LOGIN COMPONENT */}
          <div className="buttons">
            <Button link = "/login" value = "login">Log In</Button>
          {/* <Login /> */}


            {/* HERE WE WILL RENDER THE SIGNUP COMPONENT */}
            <Button link = "/signup" value = "signup">Sign Up</Button>
            {/* <Signup /> */}


          </div>

          <Footer />
      </div>
    );
  }
}