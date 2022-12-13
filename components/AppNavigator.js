import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import WearPage from "../pages/WearPage";
import HomePage from "../pages/HomePage";
import PlacePage from "../pages/PlacePage";

const Tab = createMaterialTopTabNavigator();

export const AppNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home" tabBarPosition="bottom">
      <Tab.Group>
        <Tab.Screen name="Place" component={PlacePage} />
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen
          name="Wear"
          component={WearPage}
          screenOptions={{ lazy: true }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default AppNavigator;
