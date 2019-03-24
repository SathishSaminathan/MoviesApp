import React, { Component } from "react";
import { SafeAreaView, ScrollView, Dimensions } from "react-native";
import { createDrawerNavigator, createAppContainer, DrawerItems } from "react-navigation";
import Icons from "react-native-vector-icons/FontAwesome5";

import Home from "../screens/Home";
import VideoScreen from "../screens/VideoScreen";
import { Colors } from "../assets/styles";
import AppStackContainer from "./AppStackNavigator";

const CustomDrawerComponent =(props)=>(
    <SafeAreaView style={{
        flex:1
    }}>
        <ScrollView>
            <DrawerItems {...props}/>
        </ScrollView>
    </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: AppStackContainer
    },
  },
  {
   contentComponent:CustomDrawerComponent 
  }
);

const AppDrawerContainer = createAppContainer(AppDrawerNavigator);

export default AppDrawerContainer;
