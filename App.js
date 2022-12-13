import React, { useState } from "react";
import AppNavigator from "./components/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { setCustomText } from "react-native-global-props";
import { initialState, WeatherContext } from "./WeatherContext";

export default function App() {
  const [weatherData, setWeatherData] = useState(initialState);
  const [city, setCity] = useState("");
  const [loaded] = useFonts({
    PoppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const customTextProps = {
    style: {
      fontFamily: "PoppinsRegular",
    },
  };

  setCustomText(customTextProps);

  return (
    <WeatherContext.Provider
      value={{
        weatherData: weatherData,
        setWeatherData: setWeatherData,
        city: city,
        setCity: setCity,
      }}
    >
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </WeatherContext.Provider>
  );
}
