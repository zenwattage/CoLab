import React, { Component } from 'react';
import "./Home.css";

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
          <a type="button" className="login" href = "/login">Log In</a>
          <a type="button" className="login" href = "/signup">Sign Up</a>
        </div>
      </div>
    );
  }
}