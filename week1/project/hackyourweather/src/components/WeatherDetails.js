import React from "react";

function WeatherDetails({ minTemp, maxTemp, lat, lon }) {
  return (
    <div>
      <div className="highlighted-info">
        <p key={minTemp.toString(2)}>
          <strong>min temp: </strong> {minTemp} &#8451;
        </p>
        <p key={maxTemp.toString(2)}>
          <strong>max temp: </strong> {maxTemp} &#8451;
        </p>
        <p key={lat + lon.toString(2)}>
          <strong>location: </strong> {lat}, {lon}
        </p>
      </div>
    </div>
  );
}

export default WeatherDetails;
