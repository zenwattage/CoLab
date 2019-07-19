import React, { Fragment, Component } from 'react';
import axios from 'axios';
import Wrapper from "./Wrapper";
import Filter from "./Filter/Filter"

export default class Signup extends Component {

  state = {
    email: "",
    password: "",
    errorMessage: "",
    results: ["filter1", "filter2"]
  }

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    axios({
      url: "/authentication/signup",
      method: "POST",
      data: {
        email,
        password
      }
    })
      .then((response) => {
        this.props.history.push('/profile');
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.response.data.message
        });
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };
  render() {
    // JSX
    return (
      <Fragment>
      <Wrapper />
      <div className="main">
        <h1>Welcome to CoLab!</h1>
        <p>Please fill out the registration form to sign-up.</p>
        <p>You will complete your profile on the next page.</p>

        <form onSubmit={this.handleSubmit}>
          <p className="IMA">I am a:</p>
          <select name="professions" id="talent">
            <option value="dancer">Dancer</option>
            <option value="photographer">Photographer</option>
          </select>
          <Filter results= {this.state.results} />
          <hr />
          <div>First name: <input type="text" id="firstName"></input></div>
          <div>Last name: <input type="text" id="lastName"></input></div>
          <div>Email: <input type="text" id="email"></input></div>
          <div>Password: <input type="password" id="password"></input></div>
          <hr />

          <input type="submit" value="Submit"></input>
        </form>
        {/* <p>{this.state.errorMessage}</p> */}

        {/* <form onSubmit={this.handleSubmit}>
          <p>First name:</p>
          <input type="text" name="firstname" value="First name" onChange={this.handleChange} />
          <input type="text" name="lastname" onChange={this.handleChange} />
          <input type="text" name="email" onChange={this.handleChange} />
          <input type="password" name="password" onChange={this.handleChange} />
          <input type="text" name="talent" onChange={this.handleChange} />

          <button>Signup</button>
        </form>
        <p>{this.state.errorMessage}</p> */}
      </div>
      </Fragment>
    );
  }
}

