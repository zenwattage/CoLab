import React, { Component } from 'react';
import "./style.css";

export default class Button extends Component {
  handleFilter=()=>{
    if (this.state.className === "still"){
      this.setState({className:"active"})
    }
    else{
      this.setState({className:"still"})
    }
  }; 

  handleOnClick=()=>{
    this.props.handleOnClick(this.props.value);
    if (this.props.enableChangeState){
      this.handleFilter();
    }
  };

  

  state ={
    className:"still"
  };

  render() {
    return (
      <a href={this.props.link}>
        <button
          type="button"
          value={this.props.value}
          className={this.state.className}
          onClick={this.handleOnClick}>{this.props.children}</button>
      </a>);
  };
}

Button.defaultProps = {
  enableChangeState: false,
  value: "",
  className: "",
  handleOnClick: function () { return; }
};
