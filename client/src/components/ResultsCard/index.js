import React, { Component } from "react";
import "./style.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import { STATES } from "mongoose";

export default class ResultsCard extends Component {
  state = {
    heart:"heart-unclicked"
  };

  changeHeart = () =>{
    if (this.state.heart === "heart-unclicked"){
      this.setState({heart:"heart-clicked"})
    }
    else{
      this.setState({heart:"heart-unclicked"})
    }
  }; 

  render(){
    return (
      <div className="card" data-aos="fade-right" data-aos-duration="1500">
        <div className="img-container">
          <strong className="cardname">Name: Jordynn</strong> {this.props.firstName}
          <img
            alt="cat"
            src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            className="img"
          />
          <img alt={this.props.firstName} src={this.props.imageUrl} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong className="bioresult">Bio: {this.props.bio}
              </strong>
            </li>
            <Row>
              <Col>
                <strong>Portfolio:</strong> {this.props.portfolio}
              </Col>
            </Row>
            <Row>
              <Col>
                <strong>Professsion:</strong> {this.props.professsion}
              </Col>
            </Row>
            <Row>
              <Col>
                <strong>Talent:</strong> {this.props.talent}
              </Col>
            </Row>
            <Row>
              <Col>
                <strong>Email:</strong> {this.props.email}
              </Col>
              <strong>Instagram:</strong> {this.props.instagram}
              <Col>
              </Col>
            </Row>
            <Row>
              <Col>
                <strong>Linkedin:</strong> {this.props.linkedin}
              </Col>
              <strong>Other:</strong> {this.props.other}
              <Col>
              </Col>
            </Row>
          </ul>
        </div>
        {/* EITHER KEEP REMOVE OR ADD FAVORITE */}
        <span className={this.state.heart} onClick = {this.changeHeart}><i className="fas fa-heart"></i></span>
        {/* WE WILL BE ADDING A "FAVORITE" OPTION HERE SO USERS CAN SAVE OTHER USERS */}
      </div>
    );
  }
  
}

