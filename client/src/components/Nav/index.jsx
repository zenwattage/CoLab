import React, { Component } from "react";
import "./style.css";
import { Redirect } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "./logo5.png";
import axios from "axios";

export default class NavBarStuff extends Component {
  state = {
    logout: false
  };
  //logout function
  logout = () => {
    axios
      .get("/authentication/logout")
      .then(
        data => {
          console.log(data);
          localStorage.clear();
          localStorage.removeItem('isAuthenticated');
          this.setState({ logout: true })
        }
      ).catch(error => {
        console.log(error);
        //TODO: push user out
      })
  };

  render() {
    if (this.state.logout) {
      return <Redirect to="/" />;
    }
    return (
      <Navbar bg="light" className = "top-Nav">
        <Navbar.Brand className="Navbar-brand" href="/home">
          <img
            alt=""
            src={logo}
            width="70"
            height="90"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav navbar-expand="true" className="justify-content-end">
          <a href="/search" className="nav-search">Search</a>
          <a href="/profile" className="nav-search">Profile</a>
          <a href="/saved" className="nav-search">Saved</a>
          <a onClick={this.logout} className="nav-search navbar-item">Logout</a>
        </Nav>
      </Navbar>
    );
  }
}
