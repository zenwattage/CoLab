import React from "react";
import "./style.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ResultsCard(props) {
  return (
    <div className="card" data-aos="fade-right" data-aos-duration="1500">>
      <div className="img-container">
        <strong className="cardname">Name:</strong> {props.firstName}
        <img alt={props.firstName} src={props.imageUrl} />
      </div>
      <div className="content">
        <ul>
          <li>
            <p>Bio:</p> {props.bio}
          </li>
          <Row>
            <Col>
              <p>Instagram:</p> {props.instagram}
            </Col>
            <p>Other:</p> {props.other}
            <Col>
            </Col>
          </Row>
        </ul>
      </div>
      <span className="remove">𝘅</span>
      {/* WE WILL BE ADDING A "FAVORITE" OPTION HERE SO USERS CAN SAVE OTHER USERS */}
    </div>
  );
}

export default ResultsCard;
