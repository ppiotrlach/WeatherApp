import React from "react";
import { Text, StyleSheet, View } from "react-native";

const TextBanner = ({ text }) => {
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 36,
  },
});

export default TextBanner;
