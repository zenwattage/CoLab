import React, { Fragment, Component } from "react";
import Nav from "../components/Nav/index";
import axios from "axios";
import Wrapper from "../components/Wrapper/index";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Footer from "../components/Footer/index";
import SearchResults from "../components/SearchResults/index";
import professions from "../components/search.json";
import Talent from "../components/Talent/index";
import "./style.css";
import payload from "../components/searchPayload.json";
import search from "../components/search.json";
// import AOS from 'aos';
import "aos/dist/aos.css";
import Match from "../components/Match/Opener";

export default class SearchArtist extends Component {
  state = {
    search,
    professions,
    firstName: "",
    imageUrl: "",
    bio: "",
    email: "",
    instagram: "",
    linkedin: "",
    other: "",
    error: "",
    payload,
    searchResults: []
  };

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
      }
    }
    return proArray;
  };

  // taking in value of what user is searching
  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleSubmit = event => {
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
      other
    } = this.state;
    const buttons = this.convert(this.state.payload, this.state.search);
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
      buttons
    });

    axios({
      url: "/authentication/signup",
      method: "GET",
      data: {
        email,
        password,
        firstName,
        lastName,
        imageUrl,
        bio,
        instagram,
        linkedin,
        other
      }
    })
      .then(response => {
        const isAuthenticated = response.data.isAuthenticated;
        window.localStorage.setItem("isAuthenticated", isAuthenticated);
        this.props.history.push("/search");
        // this.setState({searchResults:response.data})
      })
      .catch(error => {
        this.setState({
          errorMessage: error.response.data.message
        });
      });
  };

  // clickPro function is to detect if the user has clicked on a profession -- if yes, set isAdded to true; else to false.
  // bc the isAdded is passed in with css state (i.e. "still" OR "active") so clicks on it twice, it will be set to true again.
  clickPro = (proName, isAdded) => {
    // this.Origin(this.state.payload);
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
    // this.Origin(this.state.payload);
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

  render() {
    return (
      <Fragment>
        <Nav />
        <Wrapper>
          <Row className="search">
            <Col size="md-12">
              <div data-aos="zoom-in">
                {/* <h1 className="title1">Meet Your Match.</h1> */}
                <Match />
              </div>
              <p className="subTitle">
                {" "}
                Any artists matching your criteria will appear after the search
                is complete.
              </p>
              <p className="pp">I'm looking for a:</p>
            </Col>
          </Row>
          <form onSubmit={this.handleSubmit}>
            <div className="searchButtons">
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
          </form>
          <div className="center">
            <button className="submitbutton homepagebutton" onClick={this.handleSubmit}>
              Submit
            </button>
          </div>

          <SearchResults searchResults={this.state.searchResults} />
        </Wrapper>
        <Footer />
      </Fragment>
    );
  }
}
