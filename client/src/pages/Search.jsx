import React, { Fragment, Component } from "react";
import Nav from "../components/Nav/index";
import Wrapper from "../components/Wrapper/index";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Footer from "../components/Footer/index";
import SearchResults from "../components/SearchResults/index";
import professions from "../components/profession.json";
import TalentSearch from '../components/Talent/TalentSearch';
import "./style.css"; 

class SearchArtist extends Component {
  state = {
    search: "",
    professions,
    results: [],
    firstName: [],
    imageUrl: [],
    bio: [],
    instagram: [],
    other: [],
    error: ""
  }

  // taking in value of what user is searching
  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  // when search button is pressed this happens
  handleFormSubmit = event => {
    event.preventDefault();
    // SEARCH FUNCTION GOES HERE
  };
  render() {
    return (
      <Fragment>
        <Nav />
        <Wrapper>

        <Row className = "search"> 
          <Col size="md-12">
            <h1 className="title1">Find your CoLab match.</h1>
            <p className="subTitle"> Any artists matching your criteria will appear after the search is complete.</p>
            <p className = "subLine">I'm looking for a:</p>
          </Col>
        </Row>

        <div className = "searchButtons">
          {this.state.professions.map(x => (
              <TalentSearch profession={x.profession} talents={x.talents}
                statement={x.searchStatement} className={this.state.className} />
          ))}
        </div>

        <div className = "center">
          <button className="submitbutton" onclick={()=>this.handleFormSubmit()}>Submit</button>
        </div>

        <SearchResults results={this.state.results} />
        </Wrapper>
        <Footer />
      </Fragment>
    );
  }
}


export default SearchArtist;