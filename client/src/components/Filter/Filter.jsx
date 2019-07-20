import React, { Component } from 'react';
import Button from "../Button/Button"; 

export default class Filter extends Component {
   render() {
     // JSX
     return (
         <div>
          <h1>{this.props.statement}</h1>
           {this.props.results.map(result => (
          <Button value = {this.props.value}>{result}</Button>
          ))}
         </div>
     );
}}