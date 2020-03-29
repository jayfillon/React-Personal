import React, { Component } from "react";
import CardList from "../card-list/card-list.component";

import "./body-content.styles.scss";

class BodyContent extends Component {
  constructor() {
    super();

    this.state = {
      bodyContent: [
        {
          cardName: "blogs",
          img: "",
          id: 1
        },
        {
          cardName: "projects",
          img: "",
          id: 2
        },
        {
          cardName: "about",
          img: "",
          id: 3
        }
      ]
    };
  }

  render() {
    const { bodyContent } = this.state;
    return (
      <div className="container">
        <div className="body-content">
          <CardList id={bodyContent.id} content={bodyContent} />

          <a href="#header">
            <i id="arrow" className="ion-android-arrow-up"></i>
          </a>

          <h3> Feel free to contact me for upcoming projects & future collaborations! </h3>
        </div>
      </div>
    );
  }
}

export default BodyContent;

//Media Queries for Responsive-ness
//It looks wonky when i'm in mobile
