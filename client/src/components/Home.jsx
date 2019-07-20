import React, { Component } from 'react';
import "./Home.css";
import Footer from "./Footer/index";
import Button from "./Button/Button.jsx";

export default class Home extends Component {
  render() {
    // JSX
    return (
      <div>
        <h1 className="logo">CoLab Logo - THIS WILL BE AN IMAGE</h1>
        <article className="container">
          <blockquote>
            <strong>Welcome</strong> to <em>our creative</em>  <strong className="community">community</strong>
          </blockquote>
        </article>

        <div className="buttons">
          <Button link = "/login" value = "login">Log In</Button>
          <Button link = "/signup" value = "signup">Sign Up</Button>
        </div>

        <Footer />
      </div>
    );
  }
}