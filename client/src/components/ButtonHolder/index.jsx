import React, { Component } from 'react';
import Button from '../Button/Button';

export default class ButtonHolder extends Component {
  state = {
    HideSub: true
  };

  renderSubQuestion = ()=>{
    this.setState({HideSub:!this.state.HideSub})
  }

  render() {
    return (
      <div>
        <Button value={this.props.name} enableChangeState handleOnClick={this.renderSubQuestion} >{this.props.name}</Button>
        <Button isHide = {this.state.HideSub} value={this.props.question} enableChangeState>{this.props.question}</Button>
      </div>
    )

  }
}