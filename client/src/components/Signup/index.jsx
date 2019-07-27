import React, { Fragment, Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Wrapper from "../Wrapper";
import Footer from "../Footer/index";
import Nav from "../Nav/index";
import "./style.css";
import professions from "../profession.json";
import Col from "../Col/index";
import Row from "../Row/index";
import Talent from "../Talent";
<<<<<<< HEAD
=======

>>>>>>> e036fd6393197449c18c221365fb08a4f1199e38

export default class Signup extends Component {
  state = {
    professions,
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    errorMessage: "",
    // talents: [],
    // statement: "",
    // className: "still",
    // profession: "",
    // talentArray: [],
    bio: "",
    instagram: "",
    linkedin: "",
    other: ""
  };

  handleSubmit = event => {
    event.preventDefault();

    const {
      email,
      password,
      firstName,
      lastName,
      bio,
      instagram,
      linkedin,
      other
    } = this.state;
    console.log({
      email,
      password,
      firstName,
      lastName,
      bio,
      instagram,
      linkedin,
      other
    });

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
      .then(response => {
        const isAuthenticated = response.data.isAuthenticated;
<<<<<<< HEAD
        window.localStorage.setItem("isAuthenticated", isAuthenticated);
=======

        window.localStorage.setItem('isAuthenticated', isAuthenticated);
>>>>>>> e036fd6393197449c18c221365fb08a4f1199e38
        this.props.history.push("/search");
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
  //REDIRECT IF AUTHENTICATED
  const isAuthenticated = window.localStorage.getItem("isAuthenticated");
  if (isAuthenticated) {
    return <Redirect to="/search" />;
  }
    // JSX
    return (
      <Fragment>
        <Nav />
        <Wrapper>
        <article className="container">
          <blockquote>
            <strong>Welcome</strong> to{" "}
            <em className="creative">our creative</em>{" "}
            <strong className="community">community</strong>
          </blockquote>
        </article>

        <div className="signuppage">
          <p>Please fill out the registration form to sign-up.</p>

          <form onSubmit={this.handleSubmit}>
            <h2 className="IMA">I am a:</h2>
            <div>
              {this.state.professions.map(x => (
                <Talent
                  profession={x.profession}
                  talents={x.talents}
                  statement={x.statement}
                  className={this.state.className}
                />
              ))}
            </div>
            <hr />
          </form>

<<<<<<< HEAD
            {/* Personal info */}
            <div className="personalinfo">
              <h4>Create your account here.</h4>
              <div className="inputtitle">
                {" "}
                First name:
                <input
                  className="personalinput"
                  type="text"
                  name="firstName"
                  onChange={this.handleChange}
                />
              </div>
              <div className="inputtitle">
                Last name:
                <input
                  className="personalinput"
                  type="text"
                  name="lastName"
                  onChange={this.handleChange}
                />
              </div>
              <div className="inputtitle">
                Email:
                <input
                  className="personalinput"
                  type="text"
                  name="email"
                  onChange={this.handleChange}
                />
              </div>
              <div className="inputtitle">
                Password:
                <input
                  className="personalinput"
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                />
              </div>
            </div>

=======
>>>>>>> e036fd6393197449c18c221365fb08a4f1199e38
          {/* Personal info */}
          <div className="signupinfo">
            <Row className="justify-content-md-center">
              <h4>Create your account here.</h4>
            </Row>

            <Form onSubmit={this.handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>First name</Form.Label>
                  <Form.Control value={this.state.firstName} name="firstName" onChange={this.handleChange} type="name" placeholder="Enter first name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control value={this.state.lastName} name="lastName" onChange={this.handleChange} type="name" placeholder="Enter last name" />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control value={this.state.email} name="email" onChange={this.handleChange} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control value={this.state.password} name="password" onChange={this.handleChange} type="password" placeholder="Create password" />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Bio</Form.Label>
                <Form.Control value={this.state.bio} name="bio" onChange={this.handleChange} type="text" as="textarea" rows="6" placeholder="Tell us something interesting..." />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridAddress2">
                  <Form.Label>Instagram</Form.Label>
                  <Form.Control value={this.state.instagram} name="instagram" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridAddress2">
                  <Form.Label>LinkedIn</Form.Label>
                  <Form.Control value={this.state.linkedin} name="linkedin" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridAddress2">
                  <Form.Label>Other</Form.Label>
                  <Form.Control value={this.state.other} name="other" onChange={this.handleChange} placeholder="Anything else?" />
                </Form.Group>
              </Form.Row>

              <button className="submitbutton">Submit</button>

            </Form>
          </div>

<<<<<<< HEAD
            {/* Portfolio info */}
            <div className="portfolioinfo">
              <h4 className="subtitle">Now, tell us about your self.</h4>
              <Row>
                <Col size="md-7">
                  <div className="bioform">
                    {" "}
                    Bio:
                    <input
                      className="bioinput"
                      value={this.state.bio}
                      name="bio"
                      onChange={this.handleChange}
                      type="text"
                      placeholder="What makes you unique?"
                    />
                  </div>
                </Col>
                <Col size="md-5">
                  <div className="bioform">
                    Instagram @:
                    <input
                      className="personalinput"
                      value={this.state.instagram}
                      name="instagram"
                      onChange={this.handleChange}
                      type="text"
                      // placeholder="IG handle"
                    />
                  </div>
                  <div className="bioform">
                    LinkedIn:
                    <input
                      className="personalinput"
                      value={this.state.twitter}
                      type="text"
                      // placeholder="Linkedin profile"
                    />
                  </div>
                  <div className="bioform">
                    Other:
                    <input
                      className="personalinput"
                      value={this.state.other}
                      name="other"
                      onChange={this.handleChange}
                      type="text"
                      placeholder="Any other info you'd like to share?"
                    />
                  </div>
                </Col>
              </Row>
            </div>
            <button className="submitbutton">Submit</button>
          </form>
=======

>>>>>>> e036fd6393197449c18c221365fb08a4f1199e38
          <p>{this.state.errorMessage}</p>
          {console.log(this.state.errorMessage)}
        </div>
        </Wrapper>
        <Footer />
      </Fragment>
    );
  }
}