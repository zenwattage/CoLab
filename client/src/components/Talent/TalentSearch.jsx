import React, { Component } from 'react';
import Button from '../Button/Button';
import FilterSearch from "../Filter/FiterSearch";

export default class Talent extends Component {
  state = {
    hideTalents: true
  };

  showTalents = () => {
    this.setState({ hideTalents: !this.state.hideTalents })
  }

  render() {
    return (
      <div className="profession">
        <Button value={this.props.profession} handleOnClick={this.showTalents}>{this.props.profession}</Button>
        {(!this.state.hideTalents) && (<FilterSearch
          results={this.props.talents}
          statement={this.props.statement}
          handleOnClick={this.props.handleOnClick}
          className={this.props.className}
        />)}
      </div>)
  }
}