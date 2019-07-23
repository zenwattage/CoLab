import React, { Component } from 'react';
import "./style.css";


export default class Button extends Component {

  handleFilter=()=>{
    if (this.state.className === "still"){
      this.setState({className:"active"});
      this.state.talentArray.push("what"); 
      console.log(this.state.talentArray);
    }
    else{
      this.setState({className:"still"})
    }; 
  }; 

  handleOnClick=()=>{
    this.props.handleOnClick(this.props.value);
    if (this.props.enableChangeState){
      this.handleFilter();
    }
  };

  state ={
    className:"still",
    talentArray:[]
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
