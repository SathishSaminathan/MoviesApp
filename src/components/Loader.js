import React from "react";
import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  Dimensions
} from "react-native";
import { Colors } from "../assets/styles";
const { width, height } = Dimensions.get("window");

const Loader = ({ params }) => (
  <View
    style={[
      StyleSheet.absoluteFill,
      {
        backgroundColor: Colors.black,
        alignItems: "center",
        justifyContent: "center"
      }
    ]}
  >
    <ActivityIndicator size="large" color={Colors.themeRed} />
  </View>
);

export default Loader;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
  }
});
