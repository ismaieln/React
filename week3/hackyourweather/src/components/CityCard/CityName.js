import React from "react";

const CityName = ({ cityName, countryCode }) => {
  return (
    <p className="h3 p-2">
      <a
        href="https://github.com/ismaieln/React"
        target="_blank"
        rel="noreferrer"
        className="text-decoration-none"
      >
        {cityName}, {countryCode}
      </a>
    </p>
  );
};

export default CityName;
