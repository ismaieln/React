import React from "react";
import "./App.css";
import Hobbies from "./components/Exercise1/Hobbies";
import Guarantee from "./components/Exercise2/Guarantee";
import Counter from "./components/Exercise3/Counter";

function App() {
  // Array of information for the second exercise

  return (
    <div>
      <p>
        <strong>Exercise 1:</strong> Extreme hobbies
      </p>
      <Hobbies />

      <p>
        <strong>Exercise 2:</strong> Perfect customer service!
      </p>

      <div className="guarantee-container">
        <Guarantee />
      </div>

      <p>
        <strong>Exercise 3:</strong> It's higher than 10!
      </p>

      <Counter />
    </div>
  );
}

export default App;
