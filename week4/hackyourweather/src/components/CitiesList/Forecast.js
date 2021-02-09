import React from "react";
import CityName from "./CityName";
import { useHistory } from "react-router-dom";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function Forecast(props) {
  const history = useHistory();
  const chartData = props.allCities[0].list;
  let data = [];
  chartData.forEach((item) => {
    data.push({ date: `${item.dt_txt}`, temp: `${item.main.temp}` });
  });

  return (
    <div>
      <div className="ps-5">
        <h1 className="ps-2">5 days Forecast</h1>
        <CityName
          cityName={props.allCities[0].city.name}
          countryCode={props.allCities[0].city.country}
        />
      </div>
      <AreaChart
        width={700}
        height={500}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="temp" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
      <p
        className="h5 p-5 btn"
        onClick={() => {
          history.goBack();
        }}
      >
        Go Back
      </p>
    </div>
  );
}
