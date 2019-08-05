import React, { Fragment } from 'react';
import "./style.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ResultsCard from "../ResultsCard/index";

// THIS IS THE COMPONENT WHERE THE SEARCH FUNCTION IS RAN

function SearchResults(props) {
  return (
    <Fragment>
      <Row>
        <Col size="md-12">
          <hr />
          <h1 className="title">Here are your creative matches.</h1>
        </Col>
      </Row>

      {/* This will be inserted into axios call forloop */}
      <ResultsCard
        imageUrl={props.imageUrl}
        firstName={props.firstName}
        bio={props.bio}
        email={props.email}
        instagram={props.instagram}
        linkedin={props.linkedin}
        other={props.other}
      />

    </Fragment>
  );
}

export default SearchResults;
