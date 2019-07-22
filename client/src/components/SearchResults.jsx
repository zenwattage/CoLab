import React, { Fragment, Component } from "react";
import Nav from "../components/Nav";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Footer from "./Footer/index";
import "./SearchResults.css";

class SearchResults extends Component {
  state = {

  }

  render(props) {
    return (
      <Fragment>
        <Nav />
        <div>
          <Container style={{ marginTop: 30 }}>
            <Row>
              <Col size="md-12">
                <h1 className="title">Here are your creative matches</h1>
              </Col>
            </Row>

            <Row>
              <div className="searchresults">
                <div className="img-container">
                  {/* <img alt={props.name} src={props.image} /> */}
                </div>
                <div className="content">
                  <ul>
                    <li>
                      {/* <strong>Name:</strong> {props.firstname} */}
                    </li>
                    <li>
                      {/* <strong>Bio:</strong> {props.bio} */}
                    </li>
                    <li>
                      {/* <strong>Instagram:</strong> {props.instagram} */}
                    </li>
                  </ul>
                </div>
              </div>
            </Row>



          </Container>
          <Footer />
        </div>
      </Fragment>
    );
  }
}


export default SearchResults;