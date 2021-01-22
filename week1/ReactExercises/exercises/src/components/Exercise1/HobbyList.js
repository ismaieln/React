import React from "react";

function HobbyList() {
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing",
  ];

  return (
    <ul className="hobbies">
      {hobbies.map((hobby) => (
        <li key={hobby}> {hobby}</li>
      ))}
    </ul>
  );
}

export default HobbyList;
