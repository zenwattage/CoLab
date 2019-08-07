import React, { Fragment, Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Wrapper from "../Wrapper";
import Footer from "../Footer/index";
import "./style.css";
import professions from "../profession.json";
import Talent from "../Talent";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import payload from "../signupPayload.json";
import Opener from "../Opener/Opener";

export default class Signup extends Component {
  state = {
    // payload for handling state of buttons
    payload,
    // user arrays for profession and talent passing
    professions,
    // // prof/talent choices to be passed to DB
    // userProfession: "",
    // userTalent: "",
    // all other user items
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    errorMessage: "",
    imageUrl: "",
    bio: "",
    instagram: "",
    linkedin: "",
    other: "",
    validator: [false, false, false, false],
    hint: "*This field is required.",
    userPortfolio: ""
  }

  // convert function is to convert payload(which has Boolean values) to strings
  convert = (payload, professions) => {
    const proArray = [];
    for (var i = 0; i < payload.length; i++) {
      if (payload[i].pro) {
        const pro = { profession: professions[i].profession, talents: [] };
        for (var j = 0; j < payload[i].talents.length; j++) {
          if (payload[i].talents[j].talent) {
            pro.talents.push(professions[i].talents[j].name);
          }
        }
        proArray.push(pro);
        console.log(professions);
      }
    }
    return proArray;
  };

  handleSubmit = event => {
    // const validateArray = [this.state.firstName, this.state.lastName, this.state.email, this.state.password]; 
    event.preventDefault();

    const {
      email,
      password,
      firstName,
      lastName,
      imageUrl,
      bio,
      instagram,
      linkedin,
      other,
      userPortfolio
    } = this.state;

    const buttons = this.convert(this.state.payload, this.state.professions);

    console.log({
      email,
      password,
      firstName,
      lastName,
      imageUrl,
      bio,
      instagram,
      linkedin,
      other,
      userPortfolio
    });

    console.log(buttons);

    // Gettin' Buttoned Up
    // Empty arrays to store data taken from the button variable.
    // These are sent in the axios POST, to the user schema

    let userProfession = [];
    let userTalent = [];

    // CAUTION: LOGGERS AHEAD
    for (let i = 0; i < buttons.length; i++) {
      const element = buttons[i];
      console.log(element);
      console.log("Profession: " + element.profession);
      console.log("Talents: " + element.talents);
      userProfession.push(element.profession);
      userTalent.push(element.talents);
    }

    (this.validate([this.state.firstName, this.state.lastName, this.state.email, this.state.password]))
      && axios({
        url: "/authentication/signup",
        method: "POST",
        data: {
          email,
          password,
          firstName,
          lastName,
          imageUrl,
          bio,
          instagram,
          linkedin,
          userProfession,
          userTalent,
          userPortfolio,
          other
        }
      })
        .then(response => {
          const isAuthenticated = response.data.isAuthenticated;
          window.localStorage.setItem("isAuthenticated", isAuthenticated);
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

  // clickPro function is to detect if the user has clicked on a profession -- if yes, set isAdded to true; else to false.
  // bc the isAdded is passed in with css state (i.e. "still" OR "active") so clicks on it twice, it will be set to true again.
  clickPro = (proName, isAdded) => {
    for (var i = 0; i < this.state.professions.length; i++) {
      if (this.state.professions[i].profession === proName) {
        const temp = this.state.payload;
        temp[i].pro = isAdded;
        this.setState({ payload: temp });
      }
    }
  };

  // clickTalent function is to detect if the user has clicked on talents -- if yes, set talents' isAdded to true; else to false.
  clickTalent = (proName, talent, isAdded) => {
    for (var i = 0; i < this.state.professions.length; i++) {
      if (this.state.professions[i].profession === proName) {
        for (var j = 0; j < this.state.professions[i].talents.length; j++) {
          if (this.state.professions[i].talents[j].name === talent) {
            const temp = this.state.payload;
            temp[i].talents[j].talent = isAdded;
            this.setState({ payload: temp });
          }
        }
      }
    }
  };

  // validation
  validate = (arr) => {
    var isValid = true;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === "") {
        const temp = this.state.validator;
        temp[i] = true;
        this.setState({ validator: temp });
        isValid = false;
      }
      else {
        const temp = this.state.validator;
        temp[i] = false;
        this.setState({ validator: temp });
      }
    }
    return isValid;
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
        <Wrapper>

          <Opener />

          <div className="signuppage">
            <div className="professionform">
              <form onSubmit={this.handleSubmit}>
                <Row>
                  <Col>
                    {/* <h3 className="IMA">I AM A:</h3> */}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="pp">Tell us about your profession.</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div>
                      {this.state.professions.map(x => (
                        <Talent
                          key={x.profession}
                          profession={x.profession}
                          talents={x.talents}
                          handleOnClick={this.clickPro}
                          handleClickTalent={this.clickTalent}
                          statement={x.statement}
                          className={this.state.className}
                        />
                      ))}
                    </div>
                  </Col>
                </Row>
              </form>
            </div>

            <hr />

            {/* Personal info */}
            <div className="signupinfo">
              <Row className="justify-content-md-center">
                <Col>
                  <h4 className="IntroLine">Create your account here.</h4>
                </Col>
              </Row>

              <Form onSubmit={this.handleSubmit} className="signupForm" noValidate>
                <Form.Row>
                  <Col sm="6">
                    <Form.Group controlId="formGridName">
                      <Form.Label>First name</Form.Label>
                      <Form.Control value={this.state.firstName} size="sm" name="firstName" onChange={this.handleChange} type="name" />
                      {(this.state.validator[0]) && <div className="hint">{this.state.hint}</div>}
                    </Form.Group>
                  </Col>
                  <Col sm="6">
                    <Form.Group as={Col} controlId="formGridLastName">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control value={this.state.lastName} size="sm" name="lastName" onChange={this.handleChange} type="name" />
                      {(this.state.validator[1]) && <div className="hint">{this.state.hint}</div>}
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col sm="6">
                    <Form.Group controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control value={this.state.email} size="sm" name="email" onChange={this.handleChange} type="email" />
                      {(this.state.validator[2]) && <div className="hint">{this.state.hint}</div>}
                    </Form.Group>
                  </Col>
                  <Col sm="6">
                    <Form.Group controlId="formGridPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control value={this.state.password} size="sm" name="password" onChange={this.handleChange} type="password" />
                      {(this.state.validator[3]) && <div className="hint">{this.state.hint}</div>}
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Bio</Form.Label>
                  <Form.Control
                    value={this.state.bio}
                    size="sm"
                    name="bio"
                    onChange={this.handleChange}
                    type="text"
                    as="textarea"
                    rows="6"
                    placeholder="Tell us something interesting..."
                  />
                </Form.Group>
                <Form.Row>
                  <Col sm="6">
                    <Form.Group controlId="formGridAddress2">
                      <Form.Label>Profile image</Form.Label>
                      <OverlayTrigger
                        key="bottom"
                        placement="bottom"
                        overlay={
                          <Tooltip id={`tooltip-${"bottm"}`}>
                            Please include a link to a profile image.
                        </Tooltip>
                        }
                      >
                        <Form.Control
                          size="sm"
                          value={this.state.userPortfolio}
                          name="userPortfolio"
                          onChange={this.handleChange}
                        />
                      </OverlayTrigger>
                    </Form.Group>
                  </Col>
                  <Col sm="6">
                    <Form.Group controlId="formGridAddress5">
                      <Form.Label>Portfolio link</Form.Label>
                      <OverlayTrigger
                        key="bottom"
                        placement="bottom"
                        overlay={
                          <Tooltip id={`tooltip-${"bottom"}`}>
                            Please include a link to your online portfolio if applicable.
                        </Tooltip>
                        }
                      >
                        <Form.Control
                          size="sm"
                          value={this.state.userPortfolio}
                          name="userPortfolio"
                          onChange={this.handleChange}
                        />
                      </OverlayTrigger>
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col sm="4">
                    <Form.Group as={Col} controlId="formGridAddress4">
                      <Form.Label>Instagram</Form.Label>
                      <Form.Control size="sm" value={this.state.instagram}
                        name="instagram" onChange={this.handleChange} />
                    </Form.Group>
                  </Col>
                  <Col sm="4">
                    <Form.Group as={Col} controlId="formGridAddress3">
                      <Form.Label>LinkedIn</Form.Label>
                      <Form.Control size="sm" value={this.state.linkedin} name="linkedin" onChange={this.handleChange} />
                    </Form.Group>
                  </Col>
                  <Col sm="4">
                    <Form.Group as={Col} controlId="formGridAddress6">
                      <Form.Label>Other</Form.Label>
                      <Form.Control
                        value={this.state.other}
                        size="sm"
                        name="other"
                        onChange={this.handleChange}
                        placeholder="Anything else you'd like to share?"
                      />
                    </Form.Group>
                  </Col>
                </Form.Row>
                <br />
                <button className="submitbutton homepagebutton" onClick={this.handleSubmit}>Submit</button>
              </Form>
            </div>
            <p>{this.state.errorMessage}</p>
          </div>
        </Wrapper>
        <Footer />
      </Fragment>
    );
  }
}
