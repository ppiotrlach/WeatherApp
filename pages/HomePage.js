import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import Device from "expo-device";
import * as Location from "expo-location";
import WEATHER_API_KEY from "../secrets";
import TextBanner from "../components/TextBanner";
import WeatherImage from "../components/WeatherImage";
import Temperature from "../components/Temperature";

const HomePage = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [text, setText] = useState("Waiting...");
  const [locationData, setLocationData] = useState(null);

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
          console.log(data);
        })
        .catch((err) => console.error(err));
    })();
  }, []);

  useEffect(() => {
    if (errorMsg) {
      setText(errorMsg);
    }
  }, [errorMsg, setText]);

  return (
    <View style={styles.container}>
      {!!locationData && (
        <>
          <TextBanner text={locationData.location.name} />
          <WeatherImage input_image={locationData.current.condition.icon} />
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
