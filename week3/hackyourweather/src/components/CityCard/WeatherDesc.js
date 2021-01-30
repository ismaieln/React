import React from "react";

function WeatherDesc({ main, description }) {
  return (
    <div className="p-3">
      <p className="h4 ps-1">{main}</p>
      <p className="ps-1">{description}</p>
    </div>
  );
}

export default WeatherDesc;
