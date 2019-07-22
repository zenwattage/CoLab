import React, { Fragment, Component } from 'react';
import axios from 'axios';
import Wrapper from "./Wrapper";
import Filter from "./Filter/Filter";
import Footer from "./Footer/index";
import Button from "./Button/Button.jsx";

export default class Signup extends Component {

  state = {
    email: "",
    password: "",
    errorMessage: "",
    results: [],
    statement:"",
    className:"still",
    profession:""
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


  renderFilter = (option) => {
    if (option === "dancer") {
      this.setState({ results: ["Hip-hop", "Ballet", "Contemporary", "Latin"] });
      this.setState({statement:"Here's the dance I'm good at:"});
    }
    else if (option === "photographer") {
      this.setState({ results: ["Landscape", "Portrait", "Street", "Motion"] });
      this.setState({statement:"Here's the photography I'm good at:"})
    }
  };

  handleFilter=()=>{
    if (this.state.className === "still"){
      this.setState({className:"active"})
    }
    else{
      this.setState({className:"still"})
    }
  }; 

  render() {
    // JSX
    return (
      <Fragment>
        <Nav />
        <Wrapper />
        <div className="loginpage main">
          <h1>Welcome to CoLab!</h1>
          <p>Please fill out the registration form to sign-up.</p>
          <p>You will complete your profile on the next page.</p>

          {/* <form onSubmit={this.handleSubmit}> */}
            <p className="IMA">I am a:</p>
            <Button value="dancer" handleOnClick={this.renderFilter}>Dancer</Button>
            <Button value="photographer" handleOnClick={this.renderFilter}>Photographer</Button>
            <Filter results={this.state.results}  statement = {this.state.statement} handleFilter={this.handleFilter} className= {this.state.className}/>
            <hr />

            <div>First name: <input type="text" name="firstName" onChange={this.handleChange}></input></div>
            <div>Last name: <input type="text" name="lastName" onChange={this.handleChange}></input></div>
            <div>Email: <input type="text" name="email" onChange={this.handleChange}></input></div>
            <div>Password: <input type="password" name="password" onChange={this.handleChange}></input></div>
            <hr />

          <div className="signupbutton">
            <Button value="signup">Sign up</Button>
            <Button value="submit" >Submit</Button>
          </div>
          
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

