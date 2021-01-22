import React from "react";

const Button = ({ setCount, text }) => (
  <button onClick={setCount} className="counter-btn">
    {text}
  </button>
);

export default Button;
