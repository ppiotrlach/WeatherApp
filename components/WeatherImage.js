import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const WeatherImage = ({ inputImage }) => {
  return (
    <View style={styles.centered_container}>
      <Image
        style={styles.image}
        source={{ uri: `https:${inputImage}`.replace("64x64", "128x128") }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centered_container: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 200,
    width: 200,
  },
});

export default WeatherImage;
