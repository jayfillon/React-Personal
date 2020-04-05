import React from "react";

import "./card.styles.scss";

const Card = (props) => (
  <div className={`card card-${props.id}`}>
    <div className="card__name">
      <span className="card-name"> {props.name} </span>
      <span className="card-info">{props.desc}</span>
    </div>

    <div className="card__explore">
      <span>
        <i className="ion-android-more-horizontal"></i>
      </span>
    </div>
    
    <a href="/">.</a>
  </div>
);

export default Card;
