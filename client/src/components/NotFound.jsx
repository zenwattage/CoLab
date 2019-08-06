import React, { Component } from 'react';
import Emoji from 'a11y-react-emoji';


var divStyle = {
  "text-align":'center',
  'margin-top': '150px',
}; 

export default class NotFound extends Component {

  render() {
    // JSX
    return (
      <div key="404" className="not-found" style = {divStyle}>
        <h2>404 The page you were looking for doesn't exist. <Emoji symbol="🙄" label="rolling eyes" /></h2>
      </div>
    );
  }
}