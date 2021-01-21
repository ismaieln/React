import React from "react";

const Guarantee = (props) => (
  <div className="guarantee">
    <img src={props.image} className="guarantee-image" alt={props.title} />
    <div className="guarantee-info">
      <h3 className="guarantee-title">{props.title}</h3>
      <p className="guarantee-descriptions">{props.description}</p>
    </div>
  </div>
);

export default Guarantee;
