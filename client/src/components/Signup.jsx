import React, { Fragment, Component } from 'react';
import axios from 'axios';
import Wrapper from "./Wrapper";
import Filter from "./Filter/Filter";
import Footer from "./Footer/index";

export default class Signup extends Component {

  state = {
    email: "",
    password: "",
    errorMessage: "",
    results: []
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
    })};
 
    renderFilter(option) {
      if (option === "dancer"){
        this.setState({results :["Hip-hop", "Ballet", "Contemporary", "Latin"]})
      }
      else if (option === "photographer"){
        this.setState({results : ["Landscape","Portrait", "Street", "Motion"]})
      }
    };

    render() {
      // JSX
      return (
        <Fragment>
          <Wrapper />
          <div className="loginpage main">
            <h1>Welcome to CoLab!</h1>
            <p>Please fill out the registration form to sign-up.</p>
            <p>You will complete your profile on the next page.</p>

            <form onSubmit={this.handleSubmit}>
              <p className="IMA">I am a:</p>
              <button className="login" id="dancer" onClick={() => this.renderFilter("dancer")}>Dancer</button>
              <button className="login" id="photographer" onClick={() => this.renderFilter("photographer")}>Photographer</button>
              <Filter results={this.state.results}/>
              

              <hr />

              <div>First name: <input type="text" name="firstName" onChange={this.handleChange}></input></div>
              <div>Last name: <input type="text" name="lastName" onChange={this.handleChange}></input></div>
              <div>Email: <input type="text" name="email" onChange={this.handleChange}></input></div>
              <div>Password: <input type="password" name="password" onChange={this.handleChange}></input></div>
              <hr />

              <button className="login">Sign Up</button>

              <input type="submit" value="Submit"></input>
            </form>

            {console.log(this.state.errorMessage)}

            {/* <form onSubmit={this.handleSubmit}>
            <input type="text" name="firstname" onChange={this.handleChange} />
            <input type="text" name="lastname" onChange={this.handleChange} />
            <input type="text" name="email" onChange={this.handleChange} />
            <input type="password" name="password" onChange={this.handleChange} />
            <input type="text" name="talent" onChange={this.handleChange} />

            <button>Signup</button>
          </form> */}
            {/* <p>{this.state.errorMessage}</p> */}
          </div>
          <Footer />
        </Fragment>
      );
    }
  }

