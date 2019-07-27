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
    profession: ""
  };

  handleLogin = event => {
    this.setState({
      test: !this.state.test,
    })
  }

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
        this.props.history.push("/search");
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
    // const isAuthenticated = window.localStorage.getItem("isAuthenticated");

    // if (isAuthenticated) {
    //   return <Redirect to="/profile" />;
    // }
    // JSX
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <Button value="login" handleOnClick={this.handleLogin}>Log In</Button>
            <div className="login">
            {this.state.test && 
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control onChange={this.handleChange} type="email" placeholder="Enter email" />
                </Form.Group>
            </Form> }
            {this.state.test && 
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Password</Form.Label>
                  <Form.Control onChange={this.handleChange} type="password" placeholder="Enter password" />
                </Form.Group>
            </Form> }
            {this.state.test && 
              <Form>
                <button className="loginsubmit" value="submit" handleOnClick={this.handleSubmit}>Submit</button>
            </Form> }
            


                {/* <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicChecbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
  </Button>
              </Form> */}


              {/* {this.state.test && <div className="loginform">Email: <input type="text" className="loginform" name="email" onChange={this.handleChange} /></div>}
              {this.state.test && <div className="loginform">Password: <input type="password" className="loginform" name="password" onChange={this.handleChange} /></div>}
              {this.state.test && <button className="loginsubmit" value="submit" handleOnClick={this.handleSubmit}>Submit</button>} */}

            </div>
          </div>
        </form>
        <p>{this.state.errorMessage}</p>
      </div>
    );
  }
}
