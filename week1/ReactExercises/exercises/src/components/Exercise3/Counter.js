import React, { useState } from "react";
import Button from "./Button";
import Count from "./Count";

function Counter() {
  const [count, setCount] = useState(0);
  const increaseOne = () => setCount((xCount) => xCount + 1);
  const decreaseOne = () => setCount((xCount) => xCount - 1);

  const feedback =
    count > 10 ? (
      <strong>It's higher than 10!</strong>
    ) : count < 0 ? (
      <strong>Stop!!! you are in minus</strong>
    ) : (
      <em>Keep counting...</em>
    );

  return (
    <div className="counter-container">
      <Button setCount={increaseOne} text={"Increase One"} />
      <Button setCount={decreaseOne} text={"Decrease One"} />

      <Count count={count} />

      <p>{feedback}</p>
    </div>
  );
}

export default Counter;
