/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  AsyncStorage
} from "react-native";
import SplashScreen from "react-native-splash-screen";

import AppDrawerContainer from "./src/navigations/AppDrawerNavigator";
import WalkThrough from "./src/screens/WalkThrough";
import AppStackContainer from "./src/navigations/AppStackNavigator";
import Loader from "./src/components/Loader";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    FirstLaunch: null
  };

  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1500);
    AsyncStorage.getItem("alreadyLaunched").then(value => {
      if(value === null){           
           this.setState({FirstLaunch: true});
      }
      else{
           this.setState({FirstLaunch: false});
      }})
  }

  onPress = () => {
    AsyncStorage.setItem('alreadyLaunched', 'yes'); // No need to wait for `setItem` to finish, although you might want to handle errors
    this.setState({
      FirstLaunch: false
    });
  };

  render() {
    console.log(this.state.FirstLaunch)
    return (
      // <AppStackContainer/>
      this.state.FirstLaunch ? (
        <WalkThrough onPress={() => this.onPress()} />
      ) : (
        <AppDrawerContainer />
      )
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  video: {
    // width: height,
    // maxHeight: width
  }
});
