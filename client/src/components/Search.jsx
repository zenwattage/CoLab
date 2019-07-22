import React, { Fragment } from "react";
import Nav from "../components/Nav";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Footer from "./Footer/index";
import Button from "./Button/Button";

function SearchArtist() {
  return (
    <Fragment>
      <Nav />
      <div>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <h1 className="title">Search for an Artist</h1>
            </Col>
          </Row>

          <Row>
            <Col size="md-12">
              <div>
                <p className="subtitle">Select admirable traits</p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col size="md-12">
              <Button className="button" value="search">Search Creatives</Button>
            </Col>
          </Row>


        </Container>
        <Footer />
      </div>
    </Fragment>
  );
}

export default SearchArtist;