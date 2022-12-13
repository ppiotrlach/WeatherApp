import React from "react";

export const initialState = {
  weatherData: {
    temperature: 0,
    rainChance: 0,
  },
  setWeatherData: null,
};

export const WeatherContext = React.createContext(initialState);
