import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Icons from "react-native-vector-icons/FontAwesome5";

import Home from "../screens/Home";
import VideoScreen from "../screens/VideoScreen";
import Colors from "../assets/styles/Colors";

const AppStackNavigator = createStackNavigator(
  {
    Home: Home,
    VideoScreen: VideoScreen
  },
  {
    initialRouteName: "Home",
  }
);

const AppStackContainer = createAppContainer(AppStackNavigator);

export default AppStackContainer;
