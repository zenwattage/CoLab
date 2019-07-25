import React, { Component } from 'react';
import "./style.css";
import ButtonHolder from "../ButtonHolder/index";

export default class Filter extends Component {
  state = {
    subHide: false
  };

  handleOnClick = () => {
    this.props.handleOnClick();
  };

  render() {
    // JSX
    // const listItems = {this.props.subQuestions.map(subQuestion)=>
    //   <li>{subQuestion}</li>}; 

    return (
      // props.choices is the array of child buttons that has been clicked on
      // className = {this.props.choices.indexOf(result)>-1 ? "active": "still"}
      <div>
        <h4>{this.props.statement}</h4>
        {this.props.results.map(result => (
          <div>
            <ButtonHolder name = {result.name} question = {result.question}/>
          </div>
        ))}
  
      </div>
    );
  }
}