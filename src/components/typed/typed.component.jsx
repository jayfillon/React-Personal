import React from "react";
import ReactTyped from "react-typed";

const Typed = () => (
  <span>
    <ReactTyped
      strings={[
        "Jericho Fillon",
        "A Developer",
        "A Designer",
        "A Photographer",
        "Jericho Fillon"
      ]}
      typeSpeed={50}
    />
  </span>
);

export default Typed;
