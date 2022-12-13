import { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import TextBanner from "../components/TextBanner";

const PlacePage = ({ navigation }) => {
  const [inputCity, setInputCity] = useState("");

  return (
    <View style={styles.container}>
      <TextBanner text="Add a new place" />
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Enter city"
          onChangeText={(text) => {
            setInputCity(text);
          }}
          value={inputCity}
        />
      </View>
      <View style={styles.paddingTop}>
        <TouchableOpacity style={styles.button}>
          <Button
            color="#40a4c4"
            title="add"
            onPress={() => {
              navigation.jumpTo("Home", { city: inputCity });
            }}
          />
        </TouchableOpacity>
      </View>
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
  textInput: {
    fontSize: 32,
    width: 300,
    textAlign: "center",
    fontFamily: "PoppinsRegular",
  },
  paddingTop: {
    padding: 50,
    fontSize: 32,
  },
  button: {
    width: 150,
    paddingVertical: 6,
  },
});

export default PlacePage;
