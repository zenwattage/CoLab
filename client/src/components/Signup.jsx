import React, { Fragment, Component } from 'react';
import axios from 'axios';
import Wrapper from "./Wrapper";
import Filter from "./Filter/Filter";
import Footer from "./Footer/index";
import Button from "./Button/Button.jsx";
import Nav from "./Nav/index";
import "./Signup.css";
import Col from "./Col/index";
import Row from "./Row/index";

export default class Signup extends Component {

  state = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    errorMessage: "",
    results: [],
    statement: "",
    className: "still",
    profession: "",
    talentArray: [],
    bio: "",
    instagram: "",
    linkedin: "",
    other: ""
  }

  handleSubmit = event => {
    event.preventDefault();

    const { email, password, firstName, lastName, bio, instagram, linkedin, other } = this.state;
    console.log({ email, password, firstName, lastName, bio, instagram, linkedin, other });

    axios({
      url: "/authentication/signup",
      method: "POST",
      data: {
        email,
        password,
        firstName,
        lastName,
        bio,
        instagram,
        linkedin,
        other
      }
    })
      .then((response) => {
        this.props.history.push('/search');
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
    });
  };

  renderFilter = (option) => {
    if (option === "dancer") {
      this.setState({ results: ["Hip-hop", "Ballet", "Contemporary", "Latin"] });
      this.setState({ statement: "My dance style(s) is: " });
      // if (option === "ballet") {
      //   this.setState({ results: ["Yes", "No"] });
      //  this.setState({ statement: "Can you dance en pointe?" });
      // } else if (option === "hip-hop") {
      //   this.setState({ results: ["Yes", "No"] });
      //   this.setState({ statement: "Can you freestyle?" });
      // } else if (option === "latin") {
      //   this.setState({ results: ["Yes", "No"] });
      //   this.setState({ statement: "Can you freestyle?" });
      // } else if (option === "contemporary") {
      //   this.setState({ results: ["Yes", "No"] });
      //   this.setState({ statement: "Can you freestyle?" });
      // }
    }
    else if (option === "photographer") {
      this.setState({ results: ["Landscape", "Portrait", "Street", "Motion"] });
      this.setState({ statement: "My photography style is: " })
    }
  };

  // this is a function that adds all the buttons' value to the talentArray
  handleOnClick = (value, addOrRemove) => {
    if (addOrRemove) {
      this.state.talentArray.push(value);
      console.log(this.state.talentArray);
    }
    else {
      const index = this.state.talentArray.indexOf(value);
      this.state.talentArray.splice(index, 1);
      console.log(this.state.talentArray);
    }
  }

  render() {
    // JSX
    return (
      <Fragment>
        <Nav />
        <Wrapper />
        <div className="signuppage">
          <h1 className="title">Welcome to CoLab!</h1>
          <p>Please fill out the registration form to sign-up.</p>
          {/* FORM SUBMIT LOGIC */}
          <form onSubmit={this.handleSubmit}>
            {/* Profession info */}
            <h2 className="IMA">My profession is:</h2>
            <Button value="dancer" handleOnClick={this.renderFilter}>Dancer</Button>
            <Button value="photographer" handleOnClick={this.renderFilter}>Photographer</Button>
            <Filter results={this.state.results} statement={this.state.statement} handleOnClick={this.handleOnClick} className={this.state.className} />

            <hr />

            {/* Personal info */}
            <div className="personalinfo">
              <h4>Create your account here.</h4>
              <div className="inputtitle"> First name:
                <input className="personalinput" type="text" name="firstName" onChange={this.handleChange} />
              </div>
              <div className="inputtitle">Last name:
                <input className="personalinput" type="text" name="lastName" onChange={this.handleChange} />
              </div>
              <div className="inputtitle">Email:
                <input className="personalinput" type="text" name="email" onChange={this.handleChange} />
              </div>
              <div className="inputtitle">Password:
                <input className="personalinput" type="password" name="password" onChange={this.handleChange} />
              </div>
            </div>

            <hr />

            {/* Portfolio info */}
            <div className ="portfolioinfo">
              <h4 className="subtitle">Now, tell us about your self.
              </h4>
              <Row>
                <Col size="md-7">
                  <div className="bioform"> Bio:
                    <input className="bioinput" value={this.state.bio} name="bio" onChange={this.handleChange} type="text" placeholder="What makes you unique?"
                    />
                  </div>
                </Col>
                <Col size="md-5">
                  <div className="bioform">Instagram @:
                  <input className="personalinput" value={this.state.instagram} name="instagram" onChange={this.handleChange} type="text"
                    // placeholder="IG handle"
                    />
                  </div>
                  <div className="bioform">LinkedIn:
                  <input className="personalinput" value={this.state.twitter} type="text"
                    // placeholder="Linkedin profile"
                    />
                  </div>
                  <div className="bioform">Other:
                  <input className="personalinput" value={this.state.other} name="other" onChange={this.handleChange} type="text" placeholder="Any other info you'd like to share?"
                    />
                  </div>
               </Col>
              </Row>
            </div>
            <button className="submitbutton">Submit</button>
          </form>
          <p>{this.state.errorMessage}</p>
          {console.log(this.state.errorMessage)}
        </div>

        <Footer />
      </Fragment>
    )
  }
}

