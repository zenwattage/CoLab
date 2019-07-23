import React, { Component } from 'react';
import "./Home.css";
import Footer from "./Footer/index";
import Button from "./Button/Button.jsx";
import colab from "../pic.png"


export default class Home extends Component {
  render() {
    // JSX
    return (
      <div>
        {/* <Col size="md-8"> */}
                <img src={colab} className="portfolioimg" alt="portfolio" />
              {/* </Col> */}
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