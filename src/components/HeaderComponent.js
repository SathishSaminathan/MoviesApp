import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icons from "react-native-vector-icons/FontAwesome5";
import { CommonStyles, Colors } from "../assets/styles";

const HEADER_HEIGHT = 50;

class HeaderComponent extends Component {
  render() {
    return (
      <View
        style={{
          height: HEADER_HEIGHT,
          backgroundColor: Colors.themeRed,
          alignItems: "center",
          flexDirection: "row",
          elevation:10
        }}
      >
        <Icons
          style={{ fontSize: 20, color: Colors.white, paddingHorizontal: 15 }}
          name="bars"
          onPress={() => this.props.toggle()}
        />
        <Text style={[CommonStyles.textMediumBold, { color: Colors.white }]}>
          Movies
        </Text>
      </View>
    );
  }
}

export default HeaderComponent;
