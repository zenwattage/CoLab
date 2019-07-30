import React from "react";
import "./style.css";

function ResultsCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
            {/* {results.state.firstName} */}
          </li>
          <li>
            <strong>Bio:</strong> {props.occupation}
            {/* {results.state.bio} */}
          </li>
          <li>
            <strong>Instagram:</strong> {props.location}
            {/* {results.state.instagram} */}

          </li>
          <li>
            <strong>Other:</strong> {props.name}
            {/* {results.state.other} */}
          </li>
        </ul>
      </div>
      <span className="remove">𝘅</span>
      {/* WE WILL BE ADDING A "FAVORITE" OPTION HERE SO USERS CAN SAVE OTHER USERS */}
    </div>
  );
}

export default ResultsCard;
