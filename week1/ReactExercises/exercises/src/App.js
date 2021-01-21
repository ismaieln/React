import React from "react";
import "./App.css";
import HobbyList from "./components/HobbyList";
import Guarantee from "./components/Guarantee";
import Counter from "./components/Counter";

import deliveryIcon from "./assets/f-delivery.png";
import moneyIcon from "./assets/coin.png";
import chatIcon from "./assets/chat.png";

function App() {
  // information for the first exercise
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing",
  ];

  // Array of information for the second exercise
  const info = [
    {
      image: deliveryIcon,
      title: "Free shipping",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      image: moneyIcon,
      title: "100% Money back",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      image: chatIcon,
      title: "Online support 24/7",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
  ];

  const guarantees = info.map((ele) => (
    <Guarantee
      image={ele.image}
      title={ele.title}
      description={ele.description}
    />
  ));

  return (
    <div>
      <p>
        <strong>Exercise 1:</strong> Extreme hobbies
      </p>
      <HobbyList hobbies={hobbies} />

      <p>
        <strong>Exercise 2:</strong> Perfect customer service!
      </p>
      <div className="guarantee-container">{guarantees}</div>

      <p>
        <strong>Exercise 3:</strong> It's higher than 10!
      </p>
      <Counter />
    </div>
  );
}

export default App;
