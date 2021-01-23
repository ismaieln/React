import React from "react";

const Joke = (props) => (
  <div>
    <p>{props.setup}</p>
    <p>{props.punchline}</p>
  </div>
);

export default Joke;
