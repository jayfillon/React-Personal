import React, { Component } from "react";
import SocialMedia from "../social-media/social-media.component";
import Typed from "../typed/typed.component";

import "./header-content.styles.scss";

class HeaderContent extends Component {
  constructor() {
    super();

    this.state = {
      socialMedia: [
        {
          className: "ion-social-linkedin",
          linkUrl: "https://www.linkedin.com/in/jericho-fillon-24a692174/",
          id: 1
        },
        {
          className: "ion-social-instagram",
          linkUrl: "https://instagram.com/codebyjay",
          id: 2
        },
        {
          className: "ion-social-github-outline",
          linkUrl: "https://github.com/jayfillon",
          id: 3
        },
        {
          className: "ion-email",
          linkUrl: "mailto:fillonjericho@gmail.com",
          id: 4
        }
      ]
    };
  }

  render() {
    return (
      <div className="container">
        <div className="header-content">
          <h1>
            I'm <Typed />
          </h1>
          <p>
            I design and develop experiences that makes people's lives{" "}
            <strong>simple.</strong>
          </p>

          <ul className="list-unstyled list-social">
            {this.state.socialMedia.map(({ className, linkUrl, id }) => (
              <SocialMedia key={id} className={className} linkUrl={linkUrl} />
            ))}
          </ul>

          <a href="#body">
            <i id="arrow" className="ion-android-arrow-down"></i>
          </a>
        </div>
      </div>
    );
  }
}
//#body refers to the bodyPage inside the pages folder... 
//Arrow transitions (Google Chrome bookmark for transition ideas?)

export default HeaderContent;

//Implement the about page, and the projects page
//Figure out the React-Router-Dom situation
