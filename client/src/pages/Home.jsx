import React, { Component } from 'react';
import Footer from "../components/Footer/index";
import Button from "../components/Button/Button";
import logo from "../logo5.png";
import Login from "../components/Login/index";
import Wrapper from "../components/Wrapper/index";
// import AOS from 'aos';
import 'aos/dist/aos.css';

export default class Home extends Component {
  render() {
    // JSX
    return (
      <div className="homepage">
        <Wrapper>
          <div data-aos="zoom-out" data-aos-duration="1200">
            <img src={logo} className="logoimg" alt="logo" width="300px" />
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000" className ="quoteBlock">
          <i class="fas fa-quote-left"></i>
          <p className="quote quoteMark"> "Alone we can do so little; together we can do so much." – Helen Keller</p>
          <i class="fas fa-quote-right"></i>
          </div>

          <Login />

          <Button className="homepagebutton" link="/signup" value="signup">Sign Up</Button>

        </Wrapper>
        <Footer />
      </div>
    );
  }
}