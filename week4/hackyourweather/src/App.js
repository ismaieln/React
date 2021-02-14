import React, { useState } from "react";
import CityCard from "./components/CitiesList/CityCard";
import Search from "./components/Search";

import "./App.css";

function App() {
  const [cities, setCities] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasValue, setValue] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const [showForm, setShowForm] = useState(true);

  const fetchWeather = async (city) => {
    const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
    const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${API_KEY}`;
    if (city !== "") {
      setValue(true);
      setLoading(true);
      setErrorMessage();
      try {
        const res = await fetch(URL);

        if (!res.ok) {
          throw res.statusText;
        }
        const newCity = await res.json();

        const currentCities = cities.filter(
          (el) => el.city.id !== newCity.city.id
        );
        setCities([newCity, ...currentCities]);
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
    setCities(cities.filter((city) => city.city.id !== id));
  }
  function showForecast(id) {
    setForecast(cities.filter((city) => city.city.id === id));
    setShowForm(false);
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <h1 className="py-3 text-center">Wether</h1>
        <div className="card-size">
          {showForm && <Search onSubmit={(city) => fetchWeather(city)} />}
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
            <CityCard
              allCities={cities}
              onRemove={removeCity}
              onClickForecast={showForecast}
              forecast={forecast}
              formState={setShowForm}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
