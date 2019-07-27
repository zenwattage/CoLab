import React, { Fragment, Component } from "react";
import Nav from "../components/Nav/index";
import Wrapper from "../components/Wrapper/index";
import Row from "../components/Row/index";
import Col from "../components/Col/index";
import Footer from "../components/Footer/index";
// import SearchForm from "../components/SearchForm/index";
import SearchResults from "../components/SearchResults/index";
import professions from "../components/profession.json";
import Talent from '../components/Talent/index';



class SearchArtist extends Component {
  state = {
    search: "",
    professions,
    results: [],
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
        <Wrapper />
        <Row>
          <Col size="md-12">
            <h1 className="title">Search for an artist.</h1>
            <p className="subTitle"> Any artists matching your criteria will appear after the search is complete.</p>
          </Col>
        </Row>

        {/* <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          /> */}
        <div>
          {this.state.professions.map(x => (
            <Talent profession={x.profession} talents={x.talents}
              statement={x.statement} className={this.state.className} />
          ))}
        </div>
        <hr />
        <SearchResults results={this.state.results} />

        <Footer />
      </Fragment>
    );
  }
}


export default SearchArtist;