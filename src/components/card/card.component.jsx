import React from "react";

import "./card.styles.scss";

const Card = props => (
  <div className="card-container">
    <h1> {props.name} </h1>
    <h2> Insert sketch here. </h2>
    <p> Explore </p>
  </div>
);

export default Card;

//Explore -->  be a link
