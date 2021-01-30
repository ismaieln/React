import React from "react";
import CityName from "./CityName";
import WeatherDesc from "./WeatherDesc";
import WeatherDetails from "./WeatherDetails";

function CityCard(props) {
  return (
    <div>
      {props.allCities.map((city) => (
        <div key={city.id} className="row py-3 border border-secondary my-3 ">
          <div className="d-grid justify-content-between d-md-flex">
            <CityName cityName={city.name} countryCode={city.sys.country} />

            <button
              type="button"
              className="mt-2 border border-dark rounded-pill btn-close"
              onClick={() => props.onClose(city.id)}
            ></button>
          </div>
          <WeatherDesc
            main={city.weather[0].main}
            description={city.weather[0].description}
          />
          <WeatherDetails
            maxTemp={city.main.temp_max}
            minTemp={city.main.temp_min}
            lat={city.coord.lat}
            lon={city.coord.lon}
          />
        </div>
      ))}
    </div>
  );
}

export default CityCard;
