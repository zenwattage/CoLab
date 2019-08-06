import React, { Component } from 'react';
import "./style.css";
import Button from "../Button/Button";

export default class Filter extends Component {

  render() {
    return (
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