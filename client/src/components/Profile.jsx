import React, { Component, Fragment } from "react";
import Nav from "../components/Nav";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
// import axios from "axios";
import Wrapper from "./Wrapper";
import Footer from "./Footer/index";
// import Button from "./Button/Button";
import Portfolio from "../portfolio.jpeg";

class Profile extends Component {
  // State to store images of work
  state = {
    // selectedFile: null,
    bio: "",
    instagram: "",
    linkedin: "",
    other: "",
  }

  // ALL IMAGE UPLOAD HANDLERS /////////////////////////////////////////////////////////////////////
  // Set state to the file uploaded
  // fileSelectedHandler = event => {
  //   this.setState({
  //     selectedFile: event.target.files[0]
  //   })
  // };

  // // Upload image to our own database/api
  // fileUploadHandler = () => {
  //   const fd = new FormData();
  //   fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
  //   axios.post('', fd, {
  //     onUploadProgress: progressEvent => {
  //       console.log("Upload progress " + Math.round((progressEvent.loaded / progressEvent.total) * 100) + "%");
  //     }
  //   })
  //     .then(res => {
  //       console.log(res);
  //     })
  // }

  // ALL BIO HANDLERS ////////////////////////////////////////////////////////////////////
  // constructor(props) {
  //   super(props);
  //   this.state = {value: ''};

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  // THIS HAPPENS AFTER FORM IS SUBMITTED
  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    this.setState({
      bio: "",
      instagram: "",
      linkedin: "",
      other: "",
    });
    this.props.history.push('/search');
  };

  render() {
    return (
      <Fragment>
        <Nav />
        <Wrapper />
        <div>
          <Container style={{ marginTop: 30 }}>
            <Row>
              <Col size="md-12">
                <h1 className="title">Build your Creative Portfolio</h1>
              </Col>
            </Row>

            <Row>
              <Col size="md-8">
                <img src={Portfolio} className="portfolioimg" alt="portfolio" />
              </Col>
              <Col size="md-4">
                <p>Here you can add to your portfolio to showcase your best work, projects, and social media accounts.</p>
              </Col>
            </Row>

            <Row>
              <Col size="md-12">
                <p className="subtitle">Upload images of your work</p>
                {/* <div className="picupload">
                  <input type="file" onChange={this.fileSelectedHandler} />
                  <Button className="button" onClick={this.fileUploadHandler}>Upload</Button>
                </div> */}
              </Col>
            </Row>

            <Row>
              <Col size="md-12">
              <form onSubmit={this.handleSubmit}>
                  <p className="subtitle">Tell us about your self.</p>
                  <div className="bioform"> Bio: 
                    <input
                    value={this.state.bio}
                    name="bio"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Insert bio here"
                  />
                  </div>
                 
                   <p className="subtitle"> Add social media links.</p>
                   <div className="bioform">Instagram:
                   <input
                    value={this.state.instagram}
                    name="instagram"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="IG handle"
                  />
                   </div>
                  
                  <div className="bioform">LinkedIn: 
                  <input
                    value={this.state.twitter}
                    name="linkedin"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Linkedin profile"
                  />
                  </div>

                  <div className="bioform">Other: 
                  <input
                    value={this.state.other}
                    name="other"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Other site"
                  />
                  </div>

                  <br></br>
                  <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
              </Col>
            </Row>

          </Container>
          <Footer />
        </div>
      </Fragment>
    );
  }
};

export default Profile;
