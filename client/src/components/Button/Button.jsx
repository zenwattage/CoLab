import React, { Component } from 'react';
import "./style.css";


export default class Button extends Component {

  handleFilter=()=>{
    if (this.state.className === "still"){
      this.setState({className:"active"});
    }
    else{
      this.setState({className:"still"})
      // this.state.talentArray.filter(this.props.value);
    }; 
  }; 

  handleOnClick=()=>{
    if (this.props.enableChangeState){
      this.handleFilter();
    }
    this.props.handleOnClick(this.props.value, (this.state.className === "still"));
  };

  // pushArr = ()=>{
  //   if (this.state.className ==="active"){
  //     this.state.talentArray.push(this.props.value);
  //     console.log(this.state.talentArray);
  //   }
  //   // else{
  //   //   this.state.talentArray.filter(this.props.value);
  //   // }
  // }
  

  state ={
    className:"still",
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
