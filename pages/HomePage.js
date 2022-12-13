import React, { useState, useEffect, useContext } from "react";
import {
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Text,
} from "react-native";
import * as Location from "expo-location";
import WEATHER_API_KEY from "../secrets";
import TextBanner from "../components/TextBanner";
import WeatherImage from "../components/WeatherImage";
import Temperature from "../components/Temperature";
import { WeatherContext } from "../WeatherContext";

const HomePage = ({ navigation, route }) => {
  const [locationData, setLocationData] = useState(null);
  const { setWeatherData } = useContext(WeatherContext);

  let city = route.params && route.params.city;

  useEffect(() => {
    getWeatherData(city);
  }, [city]);

  const getWeatherData = async (city) => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.error("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log("Location: ", location);

    const url = city
      ? `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
      : `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${location.coords.latitude},${location.coords.longitude}&days=1&aqi=no&alerts=no`;

    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        setLocationData(data);

        console.log(data);
        setWeatherData({
          temperature: data.forecast.forecastday[0].day.avgtemp_c,
          rainChance: data.forecast.forecastday[0].day.daily_chance_of_rain,
        });
      })
      .catch((err) => console.error(err));
  };

  return (
    <View style={styles.container}>
      {!!locationData && (
        <View>
          <View style={styles.iconBox}>
            <TouchableOpacity
              style={styles.backIcon}
              onPress={() => {
                navigation.setParams({ city: false });
              }}
            >
              <Text style={styles.iconSize}>📌</Text>
            </TouchableOpacity>
          </View>
          <TextBanner text={locationData.location.name} />
          <WeatherImage inputImage={locationData.current.condition.icon} />
          <Temperature
            current={locationData.current.temp_c}
            min={locationData.forecast.forecastday[0].day.mintemp_c}
            max={locationData.forecast.forecastday[0].day.maxtemp_c}
            rainChance={
              locationData.forecast.forecastday[0].day.daily_chance_of_rain
            }
            snowChance={
              locationData.forecast.forecastday[0].day.daily_chance_of_snow
            }
            maxWind={locationData.forecast.forecastday[0].day.maxwind_kph}
            avgHumidity={locationData.forecast.forecastday[0].day.avghumidity}
          />
        </View>
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
  iconBox: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  iconSize: {
    fontSize: 32,
  },
});

export default HomePage;
