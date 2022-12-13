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
        <Text style={styles.text}>{current} °C</Text>
      </View>
      <View style={styles.min_max_container}>
        <View style={styles.centered_container}>
          <Text style={styles.min_max_text}>MIN</Text>
          <Text style={styles.text}>{min} °C</Text>
        </View>
        <View style={styles.centered_container}>
          <Text style={styles.min_max_text}>MAX</Text>
          <Text style={styles.text}>{max}°C</Text>
        </View>
      </View>
      <View style={styles.marginTop}>
        <View style={styles.centered_container}>
          <Text style={styles.text}>🌧 {rainChance}%</Text>
        </View>
        {snowChance > 0 && (
          <View style={styles.centered_container}>
            <Text style={styles.text}>🌨 {snowChance}%</Text>
          </View>
        )}

        <View style={styles.centered_container}>
          <Text style={styles.text}>💨 {maxWind}km/h</Text>
        </View>
        <View style={styles.centered_container}>
          <Text style={styles.text}>💧 {avgHumidity}%</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centered_container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginHorizontal: 12,
  },
  text: {
    fontSize: 26,
  },
  min_max_container: {
    flexDirection: "row",
  },
  min_max_text: {
    margin: 12,
  },
  marginTop: {
    marginTop: 24,
  },
});

export default Temperature;
