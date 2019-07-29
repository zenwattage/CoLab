import React, { Fragment } from 'react';
import "./style.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function SearchResults(props) {
  return (
    <Fragment>
      <Row>
        <Col size="md-12">
          <hr />
          <h1 className="title">Here are your creative matches.</h1>
        </Col>
      </Row>
{/* 
      <ul className="list-group search-results">
        {props.results.map(result => (
          <li key={result} className="list-group-item">
            <img alt="Dog" src={result} className="img-fluid" />
          </li>
      )
      )}
      </ul> */}

    </Fragment>
  );
}

export default SearchResults;
