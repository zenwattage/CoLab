import React, { Component } from 'react';
import Button from "../Button/Button";

export default class Filter extends Component {
  render() {
    // JSX
    return (
      // props.choices is the array of child buttons that has been clicked on
      // className = {this.props.choices.indexOf(result)>-1 ? "active": "still"}
      <div>
        <h4>{this.props.statement}</h4>
        {this.props.results.map(result => (
          <Button value={result} enableChangeState>{result}</Button>
        ))}
      </div>
    );
  }
}