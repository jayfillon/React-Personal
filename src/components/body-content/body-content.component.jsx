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
          img: "https://image.flaticon.com/icons/svg/2762/2762520.svg",
          id: 1,
          desc: "COMING SOON",
        },
        {
          cardName: "projects",
          img: "https://image.flaticon.com/icons/svg/2762/2762575.svg",
          id: 2,
          desc: "APPLICATIONS I'VE BUILT",
        },
        {
          cardName: "about",
          img: "https://image.flaticon.com/icons/svg/2762/2762438.svg",
          id: 3,
          desc: "GET TO KNOW ME",
        },
      ],
    };
  }

  render() {
    const { bodyContent } = this.state;
    return (
      <div className="container">
        <div className="body-content">
          <CardList id={bodyContent.id} content={bodyContent} />

          <a href="/">
            <i id="arrow" className="ion-android-arrow-up"></i>
          </a>

          <h3>Contact Me</h3>
          <p>
            Feel free to contact me for upcoming projects & future
            collaborations!
          </p>
        </div>
      </div>
    );
  }
}

export default BodyContent;

//Media Queries for Responsive-ness
//It looks wonky when i'm in mobile
