import React, { useContext } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { WeatherContext } from "../WeatherContext";

const images = {
  winter: [
    require("../assets/images/winter/1.jpg"),
    require("../assets/images/winter/2.jpg"),
    require("../assets/images/winter/3.jpg"),
    require("../assets/images/winter/4.jpg"),
  ],
  autumn: [
    require("../assets/images/autumn/1.png"),
    require("../assets/images/autumn/2.png"),
    require("../assets/images/autumn/3.png"),
  ],
  rain: [
    require("../assets/images/rain/1.png"),
    require("../assets/images/rain/2.png"),
  ],
  summer: [
    require("../assets/images/summer/1.png"),
    require("../assets/images/summer/2.png"),
    require("../assets/images/summer/3.png"),
  ],
  default: require("../assets/images/default.png"),
};

const WearPage = () => {
  const { weatherData } = useContext(WeatherContext);

  console.log(JSON.stringify(weatherData));

  const { text, imgPath } = getImageSource(
    weatherData.temperature,
    weatherData.rainChance
  );

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.wearImage} source={imgPath} />
      </View>
      <Text style={styles.floatingText}>{text}</Text>
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
  floatingText: {
    position: "absolute",
    bottom: 48,
    textAlign: "center",
    width: "100%",
    fontSize: 26,
    zIndex: 3,
    fontWeight: "bold",
    backgroundColor: "white",
  },
  wearImage: {
    flex: 1,
    resizeMode: "contain",
    zIndex: -1,
  },
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getImageSource(temperature, rainChance) {
  if (temperature <= 0) {
    return {
      text: "The weather outside is freeeeezing! Double jacket is a must 🥶",
      imgPath: images.winter[getRandomInt(0, 4)],
    };
  }

  if (rainChance > 40) {
    return {
      text: "There's a good chance it will rain. Don't forget your umbrella ☂",
      imgPath: images.rain[getRandomInt(0, 2)],
    };
  }

  if (temperature >= 20) {
    return {
      text: "The weather outside might be hotter than you today! The less clothes the better 🥵",
      imgPath: images.summer[getRandomInt(0, 3)],
    };
  }

  if (temperature < 20) {
    return {
      text: "The temperature will vary throughout the day. It should be rather warm but bring a jacket 🧥",
      imgPath: images.autumn[getRandomInt(0, 3)],
    };
  }

  return {
    text: "",
    imgPath: images.default,
  };
}

export default WearPage;
