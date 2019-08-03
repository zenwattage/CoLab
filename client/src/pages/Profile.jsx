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
    state = {
      firstName: "",
      lastName: "",
      bio: "",
      instagram: "",
      linkedin: "",
      other: ""
    }
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
            <p>Other: www.youtube.com/jottobot</p> {this.state.imageUrl}

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



// render() {
//   return (
//     <Fragment>
//       <Nav />
//       <Wrapper>
//         <Row>
//           <Col>
//             <h1 className="welcome">Welcome, {this.state.firstName}</h1>
//           </Col>
//         </Row>

//         <div>

//           <button onClick={this.logout}>Logoutplaceholderbutton</button>
//           <Form onSubmit={this.handleSubmit}>
//             <div className="personalinfo">
//               <h3 className="personalinfotitle">Personal Info</h3>
//               <Form.Row>
//                 <Form.Group as={Col} controlId="formGridAddress2">
//                   <p>Profile image:</p>
//                   <img src={logo} alt="Logo" width="100px" />
//                   {/* <Form.Label>Profile image</Form.Label>
//                   <Form.Control value={this.state.imageUrl} name="imageUrl" onChange={this.handleChange} /> */}
//                 </Form.Group>
//                 <Form.Group as={Col} controlId="formGridEmail">
//                   <p>Name: Jordynn Otto</p>
//                   {/* <Form.Label>First name</Form.Label>
//                     <Form.Control value={this.state.firstName} name="firstName" onChange={this.handleChange} type="name" placeholder="Enter first name" /> */}
//                 </Form.Group>
//                 <Form.Group as={Col} controlId="formGridPassword">
//                   {/* <Form.Label>Last name</Form.Label>
//                     <Form.Control value={this.state.lastName} name="lastName" onChange={this.handleChange} type="name" placeholder="Enter last name" /> */}
//                 </Form.Group>
//                 <Form.Group as={Col} controlId="formGridEmail">
//                   <p>Email: j_taylor92@yahoo.com</p>
//                   {/* <Form.Label>Email</Form.Label>
//                     <Form.Control value={this.state.email} name="email" onChange={this.handleChange} type="email" placeholder="Enter email" /> */}
//                 </Form.Group>
//               </Form.Row>
//             </div>

//             <div className="personalinfo">
//               <h3 className="personalinfotitle">Portfolio</h3>
//               {/* <Form.Row>  */}
//               <Form.Group controlId="exampleForm.ControlTextarea1">
//                 <p>Bio: I love to dance, it is the best thing ever.</p>
//                 {/* <Form.Label>Bio</Form.Label>
//                   <Form.Control value={this.state.bio} name="bio" onChange={this.handleChange} type="text" as="textarea" rows="6" placeholder="Tell us something interesting..." /> */}
//               </Form.Group>
//               <Form.Row>
//                 <Form.Group as={Col} controlId="formGridAddress2">
//                   <p>Linkedin: www.linkedin.com/jottobot</p>
//                   {/* <Form.Label>LinkedIn</Form.Label>
//                     <Form.Control value={this.state.linkedin} name="linkedin" onChange={this.handleChange} /> */}
//                 </Form.Group>
//                 <Form.Group as={Col} controlId="formGridAddress2">
//                   <p>Instagram: @jottobot</p>
//                   {/* <Form.Label>Instagram</Form.Label>
//                     <Form.Control value={this.state.instagram} name="instagram" onChange={this.handleChange} /> */}
//                 </Form.Group>
//                 <Form.Group as={Col} controlId="formGridAddress2">
//                   <p>Other: www.youtube.com/jottobot</p>
//                   {/* <Form.Label>Other</Form.Label>
//                     <Form.Control value={this.state.other} name="other" onChange={this.handleChange} placeholder="Anything else?" /> */}
//                 </Form.Group>
//               </Form.Row>
//               <br />
//               <div className="profilebuttons">
//                 <button className="profilebutton">Edit</button>
//                 <button className="profilebutton">Submit</button>
//               </div>
//             </div>
//           </Form>
//         </div>
//       </Wrapper>
//       <Footer />
//     </Fragment >
//   );
// }
// };

// export default Profile;
