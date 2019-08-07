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
          <h1 className="title">Your creative matches...</h1>
        </Col>
      </Row>

      {/* The code below will be unleashed once we get data back from backend */}
      {/* {props.searchResults.map(x => (
        <ResultsCard
        imageUrl={x.imageUrl}
        firstName={x.firstName}
        portfolio={x.portfolio}
        bio={x.bio}
        profession={x.professsion}
        talent={x.talent}
        email={x.email}
        instagram={x.instagram}
        linkedin={x.linkedin}
        other={x.other}
        />
      ))} */}
      <ResultsCard
        imageUrl={props.imageUrl}
        firstName={props.firstName}
        bio={props.bio}
        email={props.email}
        portfolio={props.portfolio}
        profession={props.professsion}
        talent={props.talent}
        instagram={props.instagram}
        linkedin={props.linkedin}
        other={props.other}
      />

    </Fragment>
  );
}

export default SearchResults;
