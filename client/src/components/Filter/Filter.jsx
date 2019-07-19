import React, { Component } from 'react';

export default class Filter extends Component {
   render() {
     // JSX
     return (
         <div>
          <h1>{this.props.statement}</h1>
           {this.props.results.map(result => (
             <button className="login" id="dancer">{result}</button>
           ))}
         </div>
     );
}}