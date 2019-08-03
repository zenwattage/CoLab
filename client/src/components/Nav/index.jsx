import React, { Component } from "react";
import "./style.css";
import { Redirect } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
<<<<<<< HEAD
function NavBarStuff() {
  return (
    <Navbar bg="light">
      <Navbar.Brand className="Navbar-brand" href="#">
        <img
          alt=""
          src="./logo5.png"
          width="20"
          height="30"
          className="d-inline-block align-top"
        />
        {" CoLab"}
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/profile">Profile</Nav.Link>
        <Nav.Link href="/search">Search</Nav.Link>
        <Nav.Link href="/logout">Logout</Nav.Link>
      </Nav>
    </Navbar>
  );
=======
import logo from "./logo5.png";
import axios from "axios";

export default class NavBarStuff extends Component {
  state ={
    logout:false
  };
  //logout function
  logout = () => {
    axios
    .get("/authentication/logout")
    .then(
      data => {
        console.log(data);
        // localStorage.clear();
        localStorage.removeItem('isAuthenticated');
        this.setState({logout:true})
      }
    ).catch(error => {
      console.log(error);
      //TODO: push user out
    })
  }; 

  render(){
    if (this.state.logout) {
      return <Redirect to="/" />;
    }
    return (
      <Navbar bg="light">
        <Navbar.Brand className="Navbar-brand" href="#">
          <img
            alt=""
            src={logo}
            width="70"
            height="90"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/search">Search Creatives</Nav.Link>
          <NavDropdown title="My Account" id="basic-nav-dropdown">
            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
            <NavDropdown.Item onClick={this.logout}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
>>>>>>> 7ed148277d0bed67b6d81e52c5153127682d7d3b
}
