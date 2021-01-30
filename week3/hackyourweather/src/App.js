import React, { useState } from "react";
import CityCard from "./components/CityCard/CityCard";
import Form from "./components/Form";

import "./App.css";

function App() {
  const [cities, setCities] = useState([]);
  const [hasError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [hasValue, setValue] = useState(true);

  const fetchWeather = async (city) => {
    if (city !== "") {
      setValue(true);
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
        );
        if (!res.ok) {
          throw new Error(
            "The city name does not exist. Please enter a correct city name"
          );
        }
        console.log(res.status);
        const weatherData = await res.json();

        const ifExist = cities.filter((el) => el.id !== weatherData.id);

        const newCity = [weatherData, ...ifExist];
        setCities(newCity);
        setLoading(false);
        setError(false);
      } catch (err) {
        setError(true);
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
          <Form onSubmit={(city) => fetchWeather(city)} />
          {!hasValue && (
            <p className="fw-bold text-danger">
              The city name is empty, Please enter a correct city name
            </p>
          )}
          {hasError && (
            <p className="fw-bold text-danger fs-2">Something went wrong</p>
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
