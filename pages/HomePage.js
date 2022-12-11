import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import Device from "expo-device";
import * as Location from "expo-location";
import WEATHER_API_KEY from "../secrets";
import TextBanner from "../components/TextBanner";
import WeatherImage from "../components/WeatherImage";
import Temperature from "../components/Temperature";
import { WeatherContext } from "../WeatherContext";

const HomePage = () => {
  const [locationData, setLocationData] = useState(null);
  const { weatherData, setWeatherData } = useContext(WeatherContext);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log("Location: ", location);

      fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${location.coords.latitude},${location.coords.longitude}&days=1&aqi=no&alerts=no`
      )
        .then((data) => data.json())
        .then((data) => {
          setLocationData(data);

          setWeatherData({
            temperature: data.forecast.forecastday[0].day.avgtemp_c,
            rainChance: data.forecast.forecastday[0].day.daily_chance_of_rain,
          });
        })
        .catch((err) => console.error(err));
    })();
  }, []);

  return (
    <View style={styles.container}>
      {!!locationData && (
        <>
          <TextBanner text={locationData.location.name} />
          <WeatherImage inputImage={locationData.current.condition.icon} />
          <Temperature
            current={locationData.current.temp_c}
            min={locationData.forecast.forecastday[0].day.mintemp_c}
            max={locationData.forecast.forecastday[0].day.maxtemp_c}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});

export default HomePage;
