import React from "react";
import "./style.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ResultsCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <ul>
          {/* <li> */}
            <strong className="cardname">Name:</strong>
            {/* PASS IN RESULTS FROM SEARCH HERE */}
          {/* </li> */}
        </ul>
        <img alt={props.firstName} src={props.imageUrl} />
        {/* PASS IN RESULTS FROM SEARCH HERE */}
      </div>
      <div className="content">
        <ul>
          <li>
            <p className="cardtitle">Bio:</p>
            {/* PASS IN RESULTS FROM SEARCH HERE */}
          </li>
          <Row>
            <Col>
              <li>
                <p className="cardtitle">IG:</p>
                {/* PASS IN RESULTS FROM SEARCH HERE */}
              </li>
            </Col>
            <Col>
              <li>
                <p className="cardtitle">LI:</p>
                {/* PASS IN RESULTS FROM SEARCH HERE */}
              </li>
            </Col>
            <Col>
              <li>
                <p className="cardtitle">Other:</p>
                {/* PASS IN RESULTS FROM SEARCH HERE */}
              </li>
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
