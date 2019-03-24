import React, { Component } from "react";
import { View, Text, Linking, StyleSheet } from "react-native";
import Icons from "react-native-vector-icons/Ionicons";

class RateUs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icons name="ios-heart" style={{ color: tintColor, fontSize: 18 }} />
    ),
    title: "Rate Us"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text
          onPress={() =>
            Linking.openURL("market://details?id=com.sktech.mychat")
          }
        >
          RateUs
        </Text>
      </View>
    );
  }
}

export default RateUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
