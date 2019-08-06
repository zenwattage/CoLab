import React, { Component } from 'react';
import Button from '../Button/Button';
import Filter from "../Filter/Filter";

export default class Talent extends Component {
  state = {
    hideTalents: true,
    profession: []
  };

  showTalents = (pro, isAdded) => {
    this.setState({ hideTalents: !this.state.hideTalents })
    this.props.handleOnClick(pro, isAdded);
  };

  clickTalent = (talent, isAdded) => {
    this.props.handleClickTalent(this.props.profession, talent, isAdded);
  };


  render() {
    return (
      <div className="profession">
        <Button className = "buttonsGroup" enableChangeState value={this.props.profession} handleOnClick={this.showTalents}>{this.props.profession}</Button>
        {(!this.state.hideTalents) && (<Filter
          handleClickTalent={this.clickTalent}
          results={this.props.talents}
          statement={this.props.statement}
          className={this.props.className}
        />)}
      </div>)
  }
}