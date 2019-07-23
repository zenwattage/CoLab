import React, { Fragment, Component } from "react";
import Nav from "../components/Nav";
import Wrapper from "./Wrapper";import Row from "../components/Row";
import Col from "../components/Col";
import Footer from "./Footer/index";
// import Button from "./Button/Button";
import SearchForm from "./SearchForm/index";
import SearchResults from "./SearchResults/index";
import "./Search.css";

class SearchArtist extends Component {
    state = {
      search: "",
      profession: "",
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
  // API.getDogsOfBreed(this.state.search)
  //   .then(res => {
  //     if (res.data.status === "error") {
  //       throw new Error(res.data.message);
  //     }
  //     this.setState({ results: res.data.message, error: "" });
  //   })
  //   .catch(err => this.setState({ error: err.message }));
};
render () {
  return (
    <Fragment>
      <Nav />
        <Wrapper />
          <Row>
            <Col size="md-12">
              <h1 className="title">Search for an Artist.</h1>
              <p className="subTitle"> Any artists matching your criteria will appear after the search is complete.</p>
            </Col>
          </Row>

          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            // breeds={this.state.breeds}
          />
          
          <SearchResults results={this.state.results} />

        <Footer />
    </Fragment>
  );
}
}


export default SearchArtist;