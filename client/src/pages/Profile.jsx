import React, { Component, Fragment } from "react";
import Nav from "../components/Nav";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from "axios";
import Wrapper from "../components/Wrapper/index";
import Footer from "../components/Footer/index";
import Form from "react-bootstrap/Form";

class Profile extends Component {
  // State to store images of work
  state = {
    // selectedFile: null,
    firstName: "",
    lastName: "",
    bio: "",
    instagram: "",
    linkedin: "",
    other: ""
  }

  // THIS HAPPENS AFTER FORM IS SUBMITTED
  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    const { firstName, lastName, bio, instagram, linkedin, other } = this.state;
    console.log({ firstName, lastName, bio, instagram, linkedin, other });

    axios({
      url: "/authentication/signup",
      method: "PUT",
      data: {
        firstName,
        lastName,
        bio,
        instagram,
        linkedin,
        other
      }
    })
      .then((response) => {
        this.setState({
          firstName: "",
          lastName: "",
          bio: "",
          instagram: "",
          linkedin: "",
          other: "",
        })
        // this.props.history.push('/search');
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.response.data.message
        });
      });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    })
  };

  render() {
    return (
      <Fragment>
        <Nav />
        <Wrapper>
          <Row>
            <Col>
              <h1>Welcome, {this.state.firstName}</h1>
            </Col>
          </Row>

        <div>
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
                <Form.Label>Profile image</Form.Label>    
                  <Form.Control value={this.state.imageUrl} name="imageUrl" onChange={this.handleChange} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridAddress2">
                <Form.Label>LinkedIn</Form.Label>
                <Form.Control value={this.state.linkedin} name="linkedin" onChange={this.handleChange} />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridAddress2">
                <Form.Label>Instagram</Form.Label>
                <Form.Control value={this.state.instagram} name="instagram" onChange={this.handleChange} />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridAddress2">
                <Form.Label>Other</Form.Label>
                <Form.Control value={this.state.other} name="other" onChange={this.handleChange} placeholder="Anything else?" />
              </Form.Group>
            </Form.Row>
            <br />
            <button className="submitbutton">Submit</button>

          </Form>
            </div>



        </Wrapper>
      <Footer />
      </Fragment >
    );
  }
};

export default Profile;
