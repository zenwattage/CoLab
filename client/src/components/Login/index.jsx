import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./style.css";
import Button from "../Button/Button";
import Form from "react-bootstrap/Form";

export default class Login extends Component {
  state = {
    test: false,
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    errorMessage: "",
    results: [],
    statement: "",
    className: "still",
    errorStatement: ""
  };

  handleShowLoginForms = event => {
    // event.preventDefault()
    console.log("inside handleLogin");
    this.setState({
      test: !this.state.test
    });
  };

  handleSubmit = event => {
    // event.preventDefault();
    const { email, password } = this.state;
    console.log({ email, password });
    axios({
      url: "/authentication/signin",
      method: "POST",
      data: {
        email,
        password
      }
    })
      .then(response => {
        console.log(response);
        //set user
        const isAuthenticated = response.data.isAuthenticated;
        window.localStorage.setItem("isAuthenticated", isAuthenticated);
        //redirect
        // this.props.history.push("/profile");
        //onSubmit - checking that user is Authed -if not logging them out
        if (response.data === 0) {
          this.logout();
        }
        this.setState({
          //window.localstorage.removeitem('isAuthenticated');
        });
      })
      .catch(error => {
        // this.setState({
        //   errorMessage: error.response.data.message
        // });
        console.log(error);
        this.setState({ errorStatement: "Your email or password is incorrect. Please try again." });
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    console.log(this.state.errorMessage);

    const isAuthenticated = window.localStorage.getItem("isAuthenticated");
    if (isAuthenticated) {
      return <Redirect to="/profile" />;
    }
    // JSX
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <Button value="login" handleOnClick={this.handleShowLoginForms} enableChangeState>Log In</Button>
            <div className="login">
              {this.state.test && (
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      onChange={this.handleChange}
                      name="email"
                      value={this.state.email}
                      type="email"
                      className="form-control-home"
                      placeholder="Enter email"
                    />
                  </Form.Group>
                </Form>
              )}
              {this.state.test && (
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      onChange={this.handleChange}
                      name="password"
                      value={this.state.password}
                      type="password"
                      className="form-control-home"
                      placeholder="Enter password"
                    />
                  </Form.Group>
                </Form>)}
              {this.state.test &&
                <Button className="loginsubmit" handleOnClick={this.handleSubmit} value="submit">Submit</Button>
              }
              <p className="error">{this.state.errorStatement}</p>
            </div>
          </div>
        </form>
        {/* <p>{this.state.errorMessage}</p> */}
      </div>
    );
  }
}
