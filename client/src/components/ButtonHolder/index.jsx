import React, { Component } from 'react';
import Button from '../Button/Button';
import Question from "../Question/Question";
import "./style.css";

export default class ButtonHolder extends Component {
  state = {
    HideSub: true
  };

  renderSubQuestion = ()=>{
    this.setState({HideSub:!this.state.HideSub})
  }

  render() {
    return (
      <div className = "ButtonHolder">
        <Button value={this.props.name} enableChangeState handleOnClick={this.renderSubQuestion} >{this.props.name}</Button>
        <Question isHide={this.state.HideSub} question = {this.props.question}/>      
      </div>
    )
  }
}
