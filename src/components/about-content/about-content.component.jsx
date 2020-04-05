import React, { Component } from "react";

import "./about-content.styles.scss";

class AboutContent extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="about-content">
          <h1>About Me</h1>
          <i id="arrow-a" className="ion-android-arrow-back"></i>
          <h2>I'm Jericho Fillon</h2>
          <p>
            Enrolled as a Computer Systems Technology major at British Columbia's Institute
            of Technology (BCIT),
            <br />
            I'm an aspiring Front-end developer because of my passion to design and develop ...
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            itaque aliquid repellendus eligendi eum dicta recusandae optio
            quasi! Doloremque, dolores!
          </p>
          <h3>BCIT Computer Systems student</h3>
        </div>
      </div>
    );
  }
}

//I DONT KNOW WHY THE ARROW IS NOT WORKING GRRRRRRR

//https://i.imgur.com/hERQ09O.jpg <-- Photo of myself

export default AboutContent;
