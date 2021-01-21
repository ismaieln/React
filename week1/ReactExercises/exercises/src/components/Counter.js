import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
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
      <button onClick={() => setCount(count + 1)} className="counter-btn">
        Add 1!
      </button>
      <button onClick={() => setCount(count - 1)} className="counter-btn">
        Sub 1!
      </button>
      <h1 className="counter-count">{count}</h1>
      <div className="counter-feedback">
        <p>{feedback}</p>
      </div>
    </div>
  );
}

export default Counter;
