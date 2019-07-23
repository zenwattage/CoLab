import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import Footer from "./Footer/index";
import Button from "./Button/Button.jsx";
// import Nav from "../components/Nav/index"; 

// import Wrapper from "./Wrapper";

export default class Login extends Component {
  state = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    errorMessage: "",
    results: [],
    statement: "",
    className: "still",
    profession: ""
  };

  handleSubmit = event => {
    // event.preventDefault();
    const { email, password, firstName, lastName } = this.state;
    axios({
      url: "/authentication/signin",
      method: "POST",
      data: {
        email,
        password,
        firstName,
        lastName
      }
    })
    .then(response => {
      //set user 
      const isAuthenticated = response.data.isAuthenticated;
      window.localStorage.setItem('isAuthenticated', isAuthenticated);
      this.props.history.push("/profile");
      console.log(response);
      
    })
    .catch(error => {
      this.setState({
        errorMessage: error.response.data.message
      });
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    const isAuthenticated = window.localStorage.getItem("isAuthenticated");

    if (isAuthenticated) {
      return <Redirect to="/profile" />;
    }
    // JSX
    return (
      // <Wrapper />
      <div>
        <h1 className="title">Log in to CoLab</h1>
        <form onSubmit={this.handleSubmit}>
          <div>Email: <input type="text" name="email" onChange={this.handleChange} /></div>
          <div>Password: <input type="password" name="password" onChange={this.handleChange} /></div>
          <Button value = "login" handleOnClick = {this.handleSubmit}>Log In</Button>
        </form>
        <p>{this.state.errorMessage}</p>

        <Footer />
      </div>
    );
  }
}
