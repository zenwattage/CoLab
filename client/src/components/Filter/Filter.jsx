import React, { Component } from 'react';

export default class Filter extends Component {
   render() {
     // JSX
     return (
         <div>
           <h3>Style</h3>
           {this.props.results.map(result => (
             <p><input type="checkbox" name = "filter" value={result}/>{result}</p>
           ))}
         </div>
     );
   }
}