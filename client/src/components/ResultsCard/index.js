import React from "react";
import "./style.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ResultsCard(props) {
  return (
    <div className="card" data-aos="fade-right" data-aos-duration="1500">
      <div className="img-container">
        <strong className="cardname">Name: Jordynn</strong> {props.firstName}
        <img
          alt="cat"
          src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
          className="img"
        />
        <img alt={props.firstName} src={props.imageUrl} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong className="bioresult">Bio: {props.bio}
            </strong>
          </li>
          <Row>
            <Col>
              <strong>Portfolio:</strong> {props.Portfolio}
            </Col>
          </Row>
          <Row>
            <Col>
              <strong>Professsion:</strong> {props.Professsion}
            </Col>
          </Row>
          <Row>
            <Col>
              <strong>Talent:</strong> {props.Talent}
            </Col>
          </Row>
          <Row>
            <Col>
              <strong>Email:</strong> {props.email}
            </Col>
            <strong>Instagram:</strong> {props.instagram}
            <Col>
            </Col>
          </Row>
          <Row>
            <Col>
              <strong>Linkedin:</strong> {props.linkedin}
            </Col>
            <strong>Other:</strong> {props.other}
            <Col>
            </Col>
          </Row>
        </ul>
      </div>
      {/* EITHER KEEP REMOVE OR ADD FAVORITE */}
      <span className="heart"><i class="far fa-heart"></i></span>
      {/* WE WILL BE ADDING A "FAVORITE" OPTION HERE SO USERS CAN SAVE OTHER USERS */}
    </div>
  );
}

export default ResultsCard;
