import React from "react";
import { Text, StyleSheet, View } from "react-native";

const TextBanner = ({ text }) => {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 36,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TextBanner;
