import React, { Fragment, Component } from 'react';
import axios from 'axios';
import Wrapper from "../Wrapper";
import Filter from "../Filter/Filter";
import Footer from "../Footer/index";
import Button from "../Button/Button";
import Nav from "../Nav/index";
import "./style.css";
import professions from "../profession.json";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from "react-bootstrap/Form";

export default class Signup extends Component {

  state = {
    professions,
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    errorMessage: "",
    talents: [],
    statement: "",
    className: "still",
    profession: "",
    talentArray: [],
    bio: "",
    instagram: "",
    linkedin: "",
    other: "",
    subQuestions: [],
    subTalents: "hide"
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

  setTalents = (option) => {
    for (var i = 0; i < this.state.professions.length; i++) {
      if (option === this.state.professions[i].profession) {
        this.setState({ talents: this.state.professions[i].talents });
        // this.state.subQuestions.push(this.state.professions[i].talents[j].question);
        console.log(this.state.talents)
      }

      // this.setState({ subFilter: this.state.professions[i].subQuestions });
      this.setState({ statement: "Here's the dance I'm good at:" });
    }
  }

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
        <article className="container">
          <blockquote>
            <strong>Welcome</strong> to <em className="creative">our creative</em>  <strong className="community">community</strong>
          </blockquote>
        </article>

        <div className="signuppage">
          <p>Please fill out the registration form to sign-up.</p>

          <form onSubmit={this.handleSubmit}>

            <p className="IMA">I am a:</p>
            <div id="profession">
              {this.state.professions.map(x => (
                <Button value={x.profession} handleOnClick={this.setTalents}>{x.profession}</Button>
              ))}
            </div>
            <div id="talent">
              <Filter results={this.state.talents}
                statement={this.state.statement}
                handleOnClick={this.handleOnClick}
                className={this.state.className}
              />
            </div>

            <hr />

            {/* Personal info */}
            <div className="signupinfo">
              <Row className="justify-content-md-center">
                <h4>Create your account here.</h4>
              </Row>

              {/* <Row>
                <Col>
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
                </Col>

                <Col>
                  <div className="portfolioinfo">
                    <div className="bioform"> Bio: <input className="bioinput" value={this.state.bio} name="bio" onChange={this.handleChange} type="text" placeholder="What makes you unique?" />
                    </div>

                    <div className="bioform">Instagram @: <input className="personalinput" value={this.state.instagram} name="instagram" onChange={this.handleChange} type="text" />
                    </div>

                    <div className="bioform">LinkedIn: <input className="personalinput" value={this.state.twitter} type="text" />
                    </div>

                    <div className="bioform">Other:<input className="personalinput" value={this.state.other} name="other" onChange={this.handleChange} type="text" placeholder="Any other info you'd like to share?" />
                    </div>
                  </div>
                </Col>
              // eslint-disable-next-line react/jsx-no-comment-textnodes
              </Row> */}

            // <Form>
            //   <Form.Row>
            //     <Form.Group as={Col} controlId="formGridEmail">
            //       <Form.Label>First name</Form.Label>
            //       <Form.Control name="firstName" onChange={this.handleChange} type="name" placeholder="Enter first name" />
            //     </Form.Group>

              //     <Form.Group as={Col} controlId="formGridPassword">
              //       <Form.Label>Last name</Form.Label>
              //       <Form.Control name="lastName" onChange={this.handleChange} type="name" placeholder="Enter last name" />
              //      </Form.Group>
              //  </Form.Row>

              //   <Form.Row>
              //     <Form.Group as={Col} controlId="formGridEmail">
              //       <Form.Label>Email</Form.Label>
              //       <Form.Control name="email" onChange={this.handleChange} type="email" placeholder="Enter email" />
              //     </Form.Group>

              //     <Form.Group as={Col} controlId="formGridPassword">
              //       <Form.Label>Password</Form.Label>
              //       <Form.Control name="password" onChange={this.handleChange} type="password" placeholder="Create password" />
              //     </Form.Group>
              //   </Form.Row>

                  //   <Form.Group controlId="exampleForm.ControlTextarea1">
                  //     <Form.Label>Bio</Form.Label>
                  //     <Form.Control value={this.state.bio} name="bio" onChange={this.handleChange} as="textarea" rows="6" placeholder="Tell us something interesting..." />
                  //   </Form.Group>

              //   <Form.Row>
              //     <Form.Group as={Col} controlId="formGridAddress2">
              //       <Form.Label>Instagram</Form.Label>
              //       <Form.Control value={this.state.instagram} name="instagram" onChange={this.handleChange}/>
              //     </Form.Group>
              //     <Form.Group as={Col} controlId="formGridAddress2">
              //       <Form.Label>LinkedIn</Form.Label>
              //       <Form.Control value={this.state.linkedin} name="linkedin" onChange={this.handleChange}/>
              //     </Form.Group>
              //     <Form.Group as={Col} controlId="formGridAddress2">
              //       <Form.Label>Other</Form.Label>
              //       <Form.Control value={this.state.other} name="other" onChange={this.handleChange} placeholder="Anything else?"/>
              //     </Form.Group>
              //   </Form.Row>


              //   <Button variant="primary" type="submit">
              //     Submit
              //   </Button>

//              </Form>
            </div>

            {/* <button className="submitbutton">Submit</button> */}
          </form>
          <p>{this.state.errorMessage}</p>
          {console.log(this.state.errorMessage)}
        </div>
        <Footer />
      </Fragment>
    )
  }
}


// <Form>
//   <Form.Row>
//     <Form.Group as={Col} controlId="formGridEmail">
//       <Form.Label>First name</Form.Label>
//       <Form.Control name="firstName" onChange={this.handleChange} type="name" placeholder="Enter first name" />
//     </Form.Group>

//     <Form.Group as={Col} controlId="formGridPassword">
//       <Form.Label>Last name</Form.Label>
//       <Form.Control name="lastName" onChange={this.handleChange} type="name" placeholder="Enter last name" />
//     </Form.Group>
//    </Form.Row>

//   <Form.Row>
//     <Form.Group as={Col} controlId="formGridEmail">
//       <Form.Label>Email</Form.Label>
//       <Form.Control name="email" onChange={this.handleChange} type="email" placeholder="Enter email" />
//     </Form.Group>

//     <Form.Group as={Col} controlId="formGridPassword">
//       <Form.Label>Password</Form.Label>
//       <Form.Control name="password" onChange={this.handleChange} type="password" placeholder="Create password" />
//     </Form.Group>
//   </Form.Row>

//   <Form.Group controlId="exampleForm.ControlTextarea1">
//     <Form.Label>Bio</Form.Label>
//     <Form.Control value={this.state.bio} name="bio" onChange={this.handleChange} as="textarea" rows="6" placeholder="Tell us something interesting..." />
//   </Form.Group>

//   <Form.Row>
//     <Form.Group as={Col} controlId="formGridAddress2">
//       <Form.Label>Instagram</Form.Label>
//       <Form.Control value={this.state.instagram} name="instagram" onChange={this.handleChange}/>
//     </Form.Group>
//     <Form.Group as={Col} controlId="formGridAddress2">
//       <Form.Label>LinkedIn</Form.Label>
//       <Form.Control value={this.state.linkedin} name="linkedin" onChange={this.handleChange}/>
//     </Form.Group>
//     <Form.Group as={Col} controlId="formGridAddress2">
//       <Form.Label>Other</Form.Label>
//       <Form.Control value={this.state.other} name="other" onChange={this.handleChange} placeholder="Anything else?"/>
//     </Form.Group>
//   </Form.Row>


//   <Button variant="primary" type="submit">
//     Submit
//   </Button>

// </Form>