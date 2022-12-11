import { StyleSheet, View } from "react-native";
import TextBanner from "../components/TextBanner";

const PlacePage = () => {
  return (
    <View style={styles.container}>
      <TextBanner text="Add a new place" />
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
});

export default PlacePage;
