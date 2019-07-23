import React from "react";
import "./style.css";
import Row from "../Row/index";
import Col from "../Col/index";
import Container from "../Container/index"


function SearchResults(props) {
  return (
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1 className="title">Here are your creative matches</h1>
        </Col>
      </Row>

      <ul className="list-group search-results">
        {props.results.map(result => (
          <li key={result} className="list-group-item">
            <img alt="Dog" src={result} className="img-fluid" />
          </li>
      )
      )}
      </ul>
    </Container>
  );
}

export default SearchResults;
