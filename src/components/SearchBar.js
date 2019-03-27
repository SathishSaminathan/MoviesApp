import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TextInput,
  Keyboard
} from "react-native";
import * as Animatable from "react-native-animatable";
import Icons from "react-native-vector-icons/FontAwesome5";

import { Colors } from "../assets/styles";

const { width, height } = Dimensions.get("window");
const HEADER_HEIGHT = 80;

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    Keyboard.addListener("keyboardDidShow", this.keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", this.keyboardDidHide);
  }

  keyboardDidShow = () => {
    this.setState({
      SearchFieldFocused: true
    });
  };

  handlePress = term => {
    this.props.handlePress(term)
  };

  keyboardDidHide = () => {
    this.setState(
      {
        SearchFieldFocused: false
      },
      () => this.refs.searchField.blur()
    );
  };

  render() {
    const { SearchFieldFocused } = this.state;
    return (
      <View
        style={{
          height: HEADER_HEIGHT,
          backgroundColor: Colors.themeBlue,
          justifyContent: "center",
          paddingHorizontal: 5,
          elevation: 10
        }}
      >
        <Animatable.View
          animation="slideInRight"
          duration={550}
          easing="linear"
          style={{
            height: HEADER_HEIGHT - 30,
            backgroundColor: Colors.white,
            alignItems: "center",
            flexDirection: "row",
            paddingHorizontal: 10
          }}
        >
          <Animatable.View
            animation={SearchFieldFocused ? "fadeInLeft" : "fadeInRight"}
            duration={300}
          >
            <Icons
              name={SearchFieldFocused ? "arrow-left" : "search"}
              style={{ fontSize: 20, color: Colors.black }}
              onPress={SearchFieldFocused ? () => Keyboard.dismiss() : null}
            />
          </Animatable.View>
          <TextInput
            returnKeyType="done"
            ref="searchField"
            placeholder="Search"
            style={{ fontSize: 20, marginLeft: 10, width: width - 60 }}
            onChangeText={term => this.handlePress(term)}
          />
        </Animatable.View>
      </View>
    );
  }
}
