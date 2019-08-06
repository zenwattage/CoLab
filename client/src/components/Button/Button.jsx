import React, { Component } from 'react';
import "./style.css";

export default class Button extends Component {

  handleFilter = () => {
    if (this.state.className === "still") {
      this.setState({ className: "active" });
    }
    else {
      this.setState({ className: "still" })
      // this.state.talentArray.filter(this.props.value);
    };
  };

  handleOnClick = () => {
    if (this.props.enableChangeState) {
      this.handleFilter();
    }
    this.props.handleOnClick(this.props.value, (this.state.className === "still"));
  };

  state = {
    className: "still",
  };

  render() {

    return (!this.props.isHide) && (
      <div className="Buttons">
        <a href={this.props.link}>
          <button
            type="button"
            value={this.props.value}
            id={this.props.id}
            className={this.state.className}
            class={this.props.className}
            onClick={this.handleOnClick}>{this.props.children}</button>
        </a>
      </div>
    );
  };
}

Button.defaultProps = {
  enableChangeState: false,
  value: "",
  className: "",
  handleOnClick: function () { return; }
};
