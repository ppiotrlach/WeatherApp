import React from "react";

export const initialState = {
  temperature: 0,
  rainChance: 0,
};

export const WeatherContext = React.createContext(initialState);
