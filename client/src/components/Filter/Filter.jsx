import React, { Component } from 'react';
import "./style.css";
import Button from "../Button/Button";

export default class Filter extends Component {

  render() {
    // JSX
    // const listItems = {this.props.subQuestions.map(subQuestion)=>
    //   <li>{subQuestion}</li>}; 

    return (
      // props.choices is the array of child buttons that has been clicked on
      // className = {this.props.choices.indexOf(result)>-1 ? "active": "still"}
      <div id="talent">
        <p className="statement">{this.props.statement}</p>
        {this.props.results.map(result => (
          <div key={result.name} >
            <Button value={result.name} enableChangeState handleOnClick={this.props.handleClickTalent} >{result.name}</Button>
          </div>
        ))}
      </div>
    );
  }
}