import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./Login.css";
// import Wrapper from "./Wrapper";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    errorMessage: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    axios({
      url: "/authentication/signin",
      method: "POST",
      data: {
        email,
        password
      }
    })
    .then(response => {
      //set user 
      const isAuthenticated = response.data.isAuthenticated;
      window.localStorage.setItem('isAuthenticated', isAuthenticated);
      this.props.history.push("/profile");
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
        <h1>Log in to CoLab</h1>
        <form onSubmit={this.handleSubmit}>
          <div>Email: <input type="text" name="email" onChange={this.handleChange} /></div>
          <div>Password: <input type="password" name="password" onChange={this.handleChange} /></div>
          <button>Login</button>
        </form>
        <p>{this.state.errorMessage}</p>
      </div>
    );
  }
}
