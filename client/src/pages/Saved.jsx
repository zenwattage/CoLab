import React, { Fragment, Component } from "react";
import Nav from "../components/Nav/index";
import Footer from "../components/Footer/index";
import Wrapper from "../components/Wrapper/index";

export default class Saved extends Component {
  state = {
  };

 
  render() {
    return (
      <Fragment>
        <Nav />
        <Wrapper>
         <p>test</p>
        </Wrapper>
        <Footer />
      </Fragment>
    );
  }
}
