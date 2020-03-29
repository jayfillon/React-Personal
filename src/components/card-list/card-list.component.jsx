import React from "react";

import Card from "../card/card.component";

import "./card-list.styles.scss";

const CardList = props => (
  <div className="card-list">
    {props.content.map(content => (
      <Card key={content.id} name={content.cardName} />
    ))}
  </div>
);

export default CardList;
