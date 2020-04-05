import React from "react";

import Card from "../card/card.component";

import "./card-list.styles.scss";
import "../card/card.styles.scss";

const CardList = (props) => (
  <div className="container">
    <div className="card-list">
      {props.content.map((content) => (
        <Card
          key={content.id}
          name={content.cardName}
          img={content.img}
          desc={content.desc}
          id={content.id}
        />
      ))}
    </div>
  </div>
);

export default CardList;
