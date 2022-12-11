import React, { useContext } from "react";
import { StyleSheet, View, Image } from "react-native";
import TextBanner from "../components/TextBanner";
import WearImage from "../components/WearImage";
import { WeatherContext } from "../WeatherContext";

const WearPage = () => {
  const { weatherData } = useContext(WeatherContext);

  console.log(JSON.stringify(weatherData));

  return (
    <View style={styles.container}>
      {/* <TextBanner text={"Clothing proposal"} /> */}

      <WearImage
        temperature={weatherData.temperature}
        rainChance={weatherData.rainChance}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});

export default WearPage;
