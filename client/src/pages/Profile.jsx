import React, { Component, Fragment } from "react";
import Nav from "../components/Nav";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from "axios";
import Wrapper from "../components/Wrapper/index";
import Footer from "../components/Footer/index";
import Jumbotron from 'react-bootstrap/Jumbotron';
// import logo from "../logo5.png";

class Profile extends Component {
  // State to store images of work
  state = {
    // selectedFile: null,
    bio: "",
    instagram: "",
    linkedin: "",
    other: ""
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

  // THIS HAPPENS AFTER FORM IS SUBMITTED
  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    const { bio, instagram, linkedin, other } = this.state;
    console.log({ bio, instagram, linkedin, other });

    axios({
      url: "/authentication/signup",
      method: "PUT",
      data: {
        bio,
        instagram,
        linkedin,
        other
      }
    })
      .then((response) => {
        this.setState({
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

{/* 
          <Row>
            <Col>
              <img src={logo} className="logo" alt="logo" width="200px" />
            </Col>
            <Col>
              <h1 className="title">Your Profile</h1>
            </Col>
          </Row> */}

          <Row>
            <Col>
              <p className="subtitle">Upload images of your work.</p>
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
                    {/* <input
                    value={this.state.bio}
                    name="bio"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Insert bio here"
                  /> */}
                </div>

                <p className="subtitle"> Add social media links.</p>
                <div className="bioform">Instagram:
                   {/* <input
                    value={this.state.instagram}
                    name="instagram"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="IG handle"
                  /> */}
                </div>

                <div className="bioform">LinkedIn:
                  {/* <input
                    value={this.state.twitter}
                    name="linkedin"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Linkedin profile"
                  /> */}
                </div>

                <div className="bioform">Other:
                  {/* <input
                    value={this.state.other}
                    name="other"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Other site"
                  /> */}
                </div>

                <br></br>
                <button onClick={this.handleFormSubmit}>Submit</button>
              </form>
            </Col>
          </Row>
        </Wrapper>
        <Footer />
      </Fragment>
    );
  }
};

export default Profile;
