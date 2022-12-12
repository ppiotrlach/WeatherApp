import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Temperature = ({
  current,
  min,
  max,
  rainChance,
  snowChance,
  maxWind,
  avgHumidity,
}) => {
  return (
    <View style={styles.centered_container}>
      <View style={styles.centered_container}>
        <Text>CURRENT</Text>
        <Text>{current} °C</Text>
      </View>
      <View style={styles.min_max_container}>
        <View style={styles.centered_container}>
          <Text style={styles.min_max_text}>MIN</Text>
          <Text>{min} °C</Text>
        </View>
        <View style={styles.centered_container}>
          <Text style={styles.min_max_text}>MAX</Text>
          <Text>{max}°C</Text>
        </View>
      </View>

      <View style={styles.centered_container}>
        <Text>🌧 {rainChance}%</Text>
      </View>
      {snowChance > 0 && (
        <View style={styles.centered_container}>
          <Text>🌨 {snowChance}%</Text>
        </View>
      )}

      <View style={styles.centered_container}>
        <Text>💨 {maxWind}km/h</Text>
      </View>
      <View style={styles.centered_container}>
        <Text>💧 {avgHumidity}%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centered_container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  min_max_container: {
    flexDirection: "row",
  },
  min_max_text: {
    margin: 10,
  },
});

export default Temperature;
