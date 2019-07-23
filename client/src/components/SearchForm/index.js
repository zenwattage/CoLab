import React, { Fragment, Component } from 'react';
import Button from "../Button/Button";
import axios from 'axios';
import Filter from "../Filter/Filter";
import "./style.css";

<<<<<<< HEAD
// Using the datalist element we can  autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="breed">Profession:</label>
        {/* <input
          value={props.search}
          onChange={props.handleInputChange}
          name=""
          list=""
          type="text"
          className="form-control"
          placeholder="Type in a dog breed to begin"
          id="breed"
        />
        <datalist id="">
          {props.breeds.map(breed => (
            <option value={breed} key={breed} />
          ))}
        </datalist> */}
        <Button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
          </Button>
      </div>
    </form>
  );
}
=======
// Using the datalist element we can create autofill suggestions based on the props.breeds array
export default class SearchForm extends Component {
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
  }

  handleSubmit = event => {
    event.preventDefault();
    
    const { email, password, firstName, lastName } = this.state;
    console.log({email, password, firstName, lastName});
    
    axios({
      url: "/authentication/signup",
      method: "POST",
      data: {
        email,
        password,
        firstName,
        lastName
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
      this.setState({ statement: "The type of dancer I want is:" });
    }
    else if (option === "photographer") {
      this.setState({ results: ["Landscape", "Portrait", "Street", "Motion"] });
      this.setState({ statement: "The photographer I am looking for is:" })
    }
  };

  handleFilter = () => {
    if (this.state.className === "still") {
      this.setState({ className: "active" })
    }
    else {
      this.setState({ className: "still" })
    }
  };

  render() {
    // JSX
    return (
      <Fragment>
        {/* <Nav /> */}
        {/* <Wrapper /> */}
        <div className="signuppage">
          {/* <h1 className="title">Welcome to CoLab!</h1>
          <p>Please fill out the registration form to sign-up.</p>
          <p>You will complete your profile on the next page.</p> */}
>>>>>>> master

          <form onSubmit={this.handleSubmit}>

            <p className="IMA">I am looking for a:</p>
            <Button value="dancer" handleOnClick={this.renderFilter}>Dancer</Button>
            <Button value="photographer" handleOnClick={this.renderFilter}>Photographer</Button>
            <Filter results={this.state.results} statement={this.state.statement} handleFilter={this.handleFilter} className={this.state.className} />

            <hr />

            {/* <div>First name:
              <input type="text" name="firstName" onChange={this.handleChange} />
            </div>
            <div>Last name:
              <input type="text" name="lastName" onChange={this.handleChange} />
            </div>
            <div>Email:
              <input type="text" name="email" onChange={this.handleChange} />
            </div>
            <div>Password:
              <input type="password" name="password" onChange={this.handleChange} />
            </div> */}

            <button>Submit</button>
          </form>
          <p>{this.state.errorMessage}</p>
          {console.log(this.state.errorMessage)}
        </div>

        {/* <Footer /> */}
      </Fragment>
    )
  }
}
