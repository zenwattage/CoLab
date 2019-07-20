import React from "react";
import "./style.css";

function Button(props) {
  return (
    <a href={props.link}>
      <button
      className="button"
        type="button"
        value={props.value}
        onClick={() => props.handleOnClick(props.value)}>{props.children}</button>
    </a>);
};

Button.defaultProps = {
  value: "",
  handleOnClick: function(){return;}
};

export default Button;
