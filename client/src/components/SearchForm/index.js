import React, { Fragment, Component } from 'react';
import Button from "../Button/Button";
import axios from 'axios';
import Filter from "../Filter/Filter";
import "./style.css";

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
      this.setState({ statement: "The type of photographer I want is:" })
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
          <form onSubmit={this.handleSubmit}>
            <h4 className="IMA">I am looking for a:</h4>
            <Button value="dancer" handleOnClick={this.renderFilter}>Dancer</Button>
            <Button value="photographer" handleOnClick={this.renderFilter}>Photographer</Button>
            <Filter results={this.state.results} statement={this.state.statement} handleFilter={this.handleFilter} className={this.state.className} />

            <button className="submitbutton">Submit</button>
          </form>
          <p>{this.state.errorMessage}</p>
          {console.log(this.state.errorMessage)}
        </div>

        {/* <Footer /> */}
      </Fragment>
    )
  }
}
