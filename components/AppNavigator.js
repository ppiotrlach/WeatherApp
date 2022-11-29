import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WearPage from "../pages/WearPage";
import HomePage from "../pages/HomePage"

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Stack.Group>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Wear" component={WearPage} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AppNavigator;


