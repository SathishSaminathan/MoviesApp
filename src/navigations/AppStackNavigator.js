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
    defaultNavigationOptions: {
      headerLeft: (
        <Icons
          name="bars"
          style={{
            fontSize: 20,
            color: Colors.white,
            textAlign: "center",
            paddingLeft: 15
          }}
        />
      ),
      headerStyle: {
        backgroundColor: Colors.themeRed
      },
      headerTintColor: Colors.white,
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const AppStackContainer = createAppContainer(AppStackNavigator);

export default AppStackContainer;
