import React from "react";
import deliveryIcon from "./assets/f-delivery.png";
import moneyIcon from "./assets/coin.png";
import chatIcon from "./assets/chat.png";

function Guarantee() {
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

  return info.map((ele) => (
    <div className="guarantee" key={ele.title}>
      <img src={ele.image} className="guarantee-image" alt={ele.title} />
      <div className="guarantee-info">
        <h3 className="guarantee-title">{ele.title}</h3>
        <p className="guarantee-descriptions">{ele.description}</p>
      </div>
    </div>
  ));
}

export default Guarantee;
