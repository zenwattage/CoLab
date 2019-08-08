import React, { Fragment, Component } from "react";
import "./style.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import { STATES } from "mongoose";

export default class ResultsCard extends Component {
  state = {
    heart: "heart-unclicked"
  };

  changeHeart = () => {
    if (this.state.heart === "heart-unclicked") {
      this.setState({ heart: "heart-clicked" })
    }
    else {
      this.setState({ heart: "heart-unclicked" })
    }
  };

  render() {
    return (
      <Fragment>
        <div className="card" data-aos="fade-right" data-aos-duration="1500">
          <div className="img-container">
            <strong className="cardname">Name: Michael Meyers</strong> {this.props.firstName}
            <img
              alt="cat"
              src="https://images.unsplash.com/photo-1519841399418-61cbec46a2f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
              className="img"
            />
            <img alt={this.props.firstName} src={this.props.imageUrl} />
          </div>
          <div className="content">
            <ul>
              <li>
                <strong className="bioresult">Bio: I recently picked up an old camera my Dad gave to me (Nikon D850) and fell in love. Looking to practice shooting movement in lanscape.{this.props.bio}
                </strong>
              </li>
              <Row>
                <Col>
                  <strong>Portfolio: https://www.michaelmeyersphoto.com </strong> {this.props.portfolio}
                </Col>
              </Row>
              <Row>
                <Col>
                  <strong>Professsion: Photography </strong> {this.props.professsion}
                </Col>
              </Row>
              <Row>
                <Col>
                  <strong>Talent: Landscape, motion</strong> {this.props.talent}
                </Col>
              </Row>
              <Row>
                <Col>
                  <strong>Email: michaealmeyers@gmail.com </strong> {this.props.email}
                </Col>
                <strong>Instagram: @michaelmeyersphoto </strong> {this.props.instagram}
                <Col>
                </Col>
              </Row>
              <Row>
                <Col>
                  <strong>Linkedin: https://www.linkedin.com/94039</strong> {this.props.linkedin}
                </Col>
                <strong>Other: n/a</strong> {this.props.other}
                <Col>
                </Col>
              </Row>
            </ul>
          </div>
        </div>

        <div className="card" data-aos="fade-right" data-aos-duration="1500">
          <div className="img-container">
            <strong className="cardname">Name: Jon Forrest</strong> {this.props.firstName}
            <img
              alt="cat"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
              className="img"
            />
            <img alt={this.props.firstName} src={this.props.imageUrl} />
          </div>
          <div className="content">
            <ul>
              <li>
                <strong className="bioresult">Bio: NYC is one of my favorite cities. Whenever I am there find myself constantly distracted with taking pics of the streets and alleys. Looking for someone to help me build a portfolio specifically.{this.props.bio}
                </strong>
              </li>
              <Row>
                <Col>
                  <strong>Portfolio: </strong> {this.props.portfolio}
                </Col>
              </Row>
              <Row>
                <Col>
                  <strong>Professsion: Photography </strong> {this.props.professsion}
                </Col>
              </Row>
              <Row>
                <Col>
                  <strong>Talent: Landscape</strong> {this.props.talent}
                </Col>
              </Row>
              <Row>
                <Col>
                  <strong>Email: forrest.jon@gmail.com </strong> {this.props.email}
                </Col>
                <strong>Instagram: @forrestjon </strong> {this.props.instagram}
                <Col>
                </Col>
              </Row>
              <Row>
                <Col>
                  <strong>Linkedin: https://www.linkedin.com/820209</strong> {this.props.linkedin}
                </Col>
                <strong>Other: n/a</strong> {this.props.other}
                <Col>
                </Col>
              </Row>
            </ul>
          </div>
        </div>

        <div className="card" data-aos="fade-right" data-aos-duration="1500">
          <div className="img-container">
            <strong className="cardname">Name: Michelle Smith</strong> {this.props.firstName}
            <img
              alt="cat"
              src="https://images.unsplash.com/photo-1481882466320-51765fd9fe21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
              className="img"
            />
            <img alt={this.props.firstName} src={this.props.imageUrl} />
          </div>
          <div className="content">
            <ul>
              <li>
                <strong className="bioresult">Bio: Hi CoLab! My husband and I are starting our own ad agency, but before we do I'd like to build my portfolio. Looking to work with models!{this.props.bio}
                </strong>
              </li>
              <Row>
                <Col>
                  <strong>Portfolio: https://www.smithscreative.com</strong> {this.props.portfolio}
                </Col>
              </Row>
              <Row>
                <Col>
                  <strong>Professsion: Photography </strong> {this.props.professsion}
                </Col>
              </Row>
              <Row>
                <Col>
                  <strong>Talent: Landscape</strong> {this.props.talent}
                </Col>
              </Row>
              <Row>
                <Col>
                  <strong>Email: smithcreatives@gmail.com </strong> {this.props.email}
                </Col>
                <strong>Instagram: @creativesmiths </strong> {this.props.instagram}
                <Col>
                </Col>
              </Row>
              <Row>
                <Col>
                  <strong>Linkedin: https://www.linkedin.com/999334</strong> {this.props.linkedin}
                </Col>
                <strong>Other: www.creativesmiths.com</strong> {this.props.other}
                <Col>
                </Col>
              </Row>
            </ul>
          </div>

          {/* EITHER KEEP REMOVE OR ADD FAVORITE */}
          <span className={this.state.heart} onClick={this.changeHeart}><i className="fas fa-heart"></i></span>
          {/* WE WILL BE ADDING A "FAVORITE" OPTION HERE SO USERS CAN SAVE OTHER USERS */}
        </div>
    </Fragment>
    )
  }
  // </Fragment>
}

