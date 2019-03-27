import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  Dimensions,
  Keyboard
} from "react-native";
import * as Animatable from "react-native-animatable";
import LottieView from 'lottie-react-native';

import Icons from "react-native-vector-icons/FontAwesome5";
import { Colors } from "../assets/styles";
import Images from "../assets/images";

const { width, height } = Dimensions.get("window");
const HEADER_HEIGHT = 80;

class SearchMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchFieldFocused: false
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

  keyboardDidHide = () => {
    this.setState(
      {
        SearchFieldFocused: false
      },
      () => this.refs.searchField.blur()
    );
  };

  static navigationOptions = {
    drawerIcon: ({ tintColor }) => <Icons color={tintColor} name="search" />,
    title: "Search Movies"
  };

  render() {
    const { SearchFieldFocused } = this.state;
    return (
      <View
        style={[
          styles.container,
          SearchFieldFocused && { backgroundColor: "#00000094" }
        ]}
      >
        <StatusBar backgroundColor={Colors.themeBlueDark} />
        <View
          style={{
            height: HEADER_HEIGHT,
            backgroundColor: Colors.themeBlue,
            justifyContent: "center",
            paddingHorizontal: 5,
            elevation:10
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
              />
            </Animatable.View>
            <TextInput
              returnKeyType="done"
              ref="searchField"
              placeholder="Search"
              style={{ fontSize: 20, marginLeft: 10, width: width - 60 }}
            />
          </Animatable.View>
        </View>
        <View style={{flex:1}}>
        <LottieView source={Images.lottieHeartAnimation} autoPlay loop />
        </View>
      </View>
    );
  }
}
export default SearchMovies;
const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: Colors.white
  }
});
