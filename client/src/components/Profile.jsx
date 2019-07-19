import React, { Component, Fragment } from "react";
import Nav from "../components/Nav";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import axios from "axios";
import Wrapper from "./Wrapper";

class Profile extends Component {
  // State to store images of work
  state = {
    selectedFile: null
  }

  // ALL IMAGE UPLOAD HANDLERS /////////////////////////////////////////////////////////////////////
  // Set state to the file uploaded
  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  };

  // Upload image to our own database/api
  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
    axios.post('', fd, {
      onUploadProgress: progressEvent => {
        console.log("Upload progress " + Math.round((progressEvent.loaded / progressEvent.total) * 100) + "%");
      }
    })
      .then(res => {
        console.log(res);
      })
  }

  // ALL BIO HANDLERS ////////////////////////////////////////////////////////////////////
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Fragment>
        <Nav />
        <Wrapper />
        <div>
          <Container style={{ marginTop: 30 }}>
            <Row>
              <Col size="md-12">
                <h1>Build your Creative Portfolio</h1>
              </Col>
            </Row>

            <Row>
              <Col size="md-12">
              </Col>
            </Row>

            <Row>
              <Col size="md-12">
                <p>Upload images of your work</p>
                <div className="picupload">
                  <input type="file" onChange={this.fileSelectedHandler} />
                  <button onClick={this.fileUploadHandler}>Upload</button>
                </div>
              </Col>
            </Row>

            <Row>
              <Col size="md-12">
                <form onSubmit={this.handleSubmit}>
                  <label>
                    Tell us about yourself:
                    <br></br>
                  <input type="text" value={this.state.value} onChange={this.handleChange} className="bio"/>
                  </label>
                  <br></br>
                  <input type="submit" value="Submit" />
                </form>
              </Col>
            </Row>

            <Row>
              <Col size="md-12">
                <p>Add social media links.</p>
              </Col>
            </Row>

            <Row>
              <Col size="md-12">
                <button>Find your creatives</button>
              </Col>
            </Row>


          </Container>
        </div>
      </Fragment>
    );
  }
};

export default Profile;
