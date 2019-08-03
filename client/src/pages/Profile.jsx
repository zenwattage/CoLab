import React, { Component, Fragment } from "react";
import Nav from "../components/Nav";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from "axios";
import Wrapper from "../components/Wrapper/index";
import Footer from "../components/Footer/index";
import "./style.css";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { serverports: [] };
    // state = {
    //   firstName: "",
    //   lastName: "",
    //   bio: "",
    //   instagram: "",
    //   linkedin: "",
    //   other: ""
    // }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/serverport')
      .then(response => {
        this.setState({ serverports: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  // tabRow() {
  //   return this.state.serverports.map(function (object, i) {
  //     return <TableRow obj={object} key={i} />;
  //   });
  render() {
    return (
      <Fragment>
        <Nav />
        <Wrapper>
          <Row>
            <Col>
              <h1 className="welcome">Hello, {this.state.firstName}</h1>
            </Col>
          </Row>

          <div className="container">
            <div className="personalinfo">
              <h3 className="personalinfotitle">Contact Info</h3>
              <p>Profile image:</p> {this.state.imageUrl}
              <p>Name:</p> {this.state.firstName}
              <p>Email:</p> {this.state.email}
            </div>

            <div className="personalinfo">
              <h3 className="personalinfotitle">Portfolio</h3>

              <p>Bio:</p> {this.state.bio}
              <p>Linkedin:</p> {this.state.linkedin}
              <p>Instagram:</p> {this.state.instagram}
              <p>Other:</p> {this.state.other}

              <br />
              <div className="profilebuttons">
                <button className="profilebutton">Edit</button>
                <button className="profilebutton">Submit</button>
              </div>

            </div>
          </div>
        </Wrapper>
        <Footer />
      </Fragment >
    );
  }
}


// THIS HAPPENS AFTER FORM IS SUBMITTED
// handleFormSubmit = event => {
//   event.preventDefault();

//   const { firstName, lastName, bio, instagram, linkedin, other } = this.state;
//   console.log({ firstName, lastName, bio, instagram, linkedin, other });

//   axios({
//     url: "/authentication/signup",
//     method: "PUT",
//     data: {
//       firstName,
//       lastName,
//       bio,
//       instagram,
//       linkedin,
//       other
//     }
//   })
//     .then((response) => {
//       this.setState({
//         firstName: "",
//         lastName: "",
//         bio: "",
//         instagram: "",
//         linkedin: "",
//         other: "",
//       })
//       // this.props.history.push('/search');
//     })
//     .catch((error) => {
//       this.setState({
//         errorMessage: error.response.data.message
//       });
//     });
// };

// handleInputChange = event => {
//   const { name, value } = event.target;
//   this.setState({
//     [name]: value,
//   })
// };


//logout function
// logout = () => {
//   axios
//     .get("/authentication/logout")
//     .then(
//       data => {
//         console.log(data);
//       }
//     ).catch(error => {
//       console.log(error);
//       //TODO: push user out
//     })
// }

