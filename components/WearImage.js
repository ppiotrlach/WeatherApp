import React from "react";
import { View, Image, StyleSheet } from "react-native";

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

function WearImage({ temperature, rainChance }) {
  const imgPath = getImageSource(temperature, rainChance);

  return (
    <View>
      <Image style={styles.wearImage} source={imgPath} />
    </View>
  );
}

const styles = StyleSheet.create({
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
  if (rainChance > 40) {
    return images.rain[getRandomInt(0, 2)];
  }

  if (temperature <= 0) {
    return images.winter[getRandomInt(0, 4)];
  }

  if (temperature >= 24) {
    return images.summer[getRandomInt(0, 3)];
  }

  if (temperature < 24) {
    return images.autumn[getRandomInt(0, 3)];
  }

  return images.default;
  // TODO: dorobić bałwana
}

export default WearImage;
