import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import Device from "expo-device";
import * as Location from "expo-location";

const HomePage = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [text, setText] = useState("Waiting...");

  // useEffect(() => {
  //   async () => {
  //     console.log("SIEMA");
  //     const { status } = await Permissions.askAsync(Permissions.LOCATION);

  //     if (status !== "granted") {
  //       console.log("PERMISSION NOT GRANTED!");
  //       setErrorMsg("PERMISSION NOT GRANTED!");
  //     }

  //     setLocation(Location.getCurrentPositionAsync());
  //     setText(location);
  //   };
  // }, []);

  // const _getLocation = async () => {
  //   const { status } = await Permissions.askAsync(Permissions.LOCATION);

  //   if (status !== "granted") {
  //     console.log("PERMISSION NOT GRANTED!");
  //     setErrorMsg("PERMISSION NOT GRANTED!");
  //   }

  //   setLocation(Location.getCurrentPositionAsync());
  // };

  useEffect(() => {
    (async () => {
      // if (Platform.OS === "android" && !Device.isDevice) {
      //   setErrorMsg(
      //     "Oops, this will not work on Snack in an Android Emulator. Try it on your device!"
      //   );
      //   return;
      // }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log("Location: ", location);
      setLocation(location);
    })();
  }, []);

  useEffect(() => {
    if (errorMsg) {
      setText(errorMsg);
    } else if (location) {
      setText(JSON.stringify(location));
    }
  }, [errorMsg, location, setText]);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "PoppinsRegular",
  },
});

export default HomePage;
