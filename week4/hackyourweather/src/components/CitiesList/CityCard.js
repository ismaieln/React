import React from "react";
import CityName from "./CityName";
import WeatherDesc from "./WeatherDesc";
import WeatherDetails from "./WeatherDetails";
import Forecast from "./Forecast";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function CityCard(props) {
  const cities = props.allCities;
  const forecast = props.forecast;
  return (
    <Router>
      <Route path="/" exact>
        <div>
          {cities.map((city) => (
            <div
              key={city.city.id}
              className="row py-3 border border-secondary my-3 "
            >
              <div className="d-grid justify-content-between d-md-flex">
                <div onClick={() => props.onClickForecast(city.city.id)}>
                  <Link to="/forecast">
                    <CityName
                      cityName={city.city.name}
                      countryCode={city.city.country}
                    />
                  </Link>
                </div>
                <button
                  type="button"
                  className="mt-2 border border-dark rounded-pill btn-close"
                  onClick={() => props.onRemove(city.city.id)}
                ></button>
              </div>
              <WeatherDesc
                main={city.list[0].weather[0].main}
                description={city.list[0].weather[0].description}
              />
              <WeatherDetails
                maxTemp={city.list[0].main.temp_max}
                minTemp={city.list[0].main.temp_min}
                lat={city.city.coord.lat}
                lon={city.city.coord.lon}
              />
            </div>
          ))}
        </div>
      </Route>
      <Route path="/forecast">
        <Forecast allCities={forecast} />
      </Route>
    </Router>
  );
}

export default CityCard;
