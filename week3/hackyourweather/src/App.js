import React, { useState } from "react";
import CityCard from "./components/CityCard/CityCard";
import Search from "./components/Search";

import "./App.css";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasValue, setValue] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  const fetchWeather = async (city) => {
    if (city !== "") {
      setValue(true);
      setLoading(true);
      setErrorMessage();
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
        );

        if (!res.ok) {
          throw res.statusText;
        }
        const weatherData = await res.json();

        const ifExist = cities.filter((el) => el.id !== weatherData.id);

        const newCity = [weatherData, ...ifExist];
        setCities(newCity);
        setLoading(false);
      } catch (err) {
        setErrorMessage(`There is an Error:  ${err}`);
        setLoading(false);
      }
    } else {
      setValue(false);
    }
  };

  function removeCity(id) {
    setCities(cities.filter((city) => city.id !== id));
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <h1 className="py-3 text-center">Wether</h1>
        <div className="card-size">
          <Search onSubmit={(city) => fetchWeather(city)} />
          {!hasValue && (
            <p className="fw-bold text-danger">
              The city name is empty, Please enter a correct city name
            </p>
          )}
          {errorMessage && (
            <p className="fw-bold text-danger">{errorMessage}</p>
          )}
          {isLoading && <p className="fw-bold">Loading......</p>}
          {cities.length !== 0 && (
            <CityCard allCities={cities} onClose={removeCity} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
