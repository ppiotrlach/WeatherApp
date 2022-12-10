import React from "react";
import AppNavigator from "./components/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { setCustomText } from "react-native-global-props";

export default function App() {
  const [loaded] = useFonts({
    PoppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const customTextProps = {
    style: {
      fontFamily: "PoppinsRegular",
    },
  };

  setCustomText(customTextProps);

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
