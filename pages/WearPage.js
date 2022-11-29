import React from "react";
import { Text, StyleSheet, View, Button, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const WearPage = ({ route }) => {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      

      <Button onPress={() => navigation.navigate("Home")} title="back" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  BMIScore: {
    paddingTop: 30,
    fontSize: 25,
    fontFamily: "PoppinsBold",
  },
  description: {
    paddingTop: 40,
    paddingBottom: 40,
    fontSize: 14,
  },
  titleText: {
    paddingTop: 30,
    fontSize: 30,
  },
  BMIKidImage: {
    flex: 1,
    margin: 25,
    resizeMode: "contain",
  },
  BMIAdultImage: {
    flex: 1,
    margin: 90,
    resizeMode: "contain",
  },
  BMIequation: {
    resizeMode: "center",
  },
});

export default WearPage;
