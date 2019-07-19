import React, { Fragment } from "react";
import Nav from "../components/Nav";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function SearchArtist() {
  return (
    <Fragment>
      <Nav />
      <div>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <h1>Search for an artist</h1>
            </Col>
          </Row>

          <Row>
            <Col size="md-12">
              <div>
                <p>Select admirable traits</p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col size="md-12">
              
            </Col>
          </Row>

          <Row>
            <Col size="md-12">
              
            </Col>
          </Row>

          <Row>
            <Col size="md-12">
              <button>Search Creatives</button>
            </Col>
          </Row>


        </Container>
      </div>
    </Fragment>
  );
}

export default SearchArtist;