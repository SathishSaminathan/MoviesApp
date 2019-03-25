import React, { Component } from "react";
import {
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  View
} from "react-native";
import {
  createDrawerNavigator,
  createAppContainer,
  DrawerItems
} from "react-navigation";
import Icons from "react-native-vector-icons/FontAwesome5";

import Home from "../screens/Home";
import VideoScreen from "../screens/VideoScreen";
import { Colors } from "../assets/styles";
import AppStackContainer from "./AppStackNavigator";
import Collection from "../screens/Collection";
import Images from "../assets/images";
import RateUs from "../screens/RateUs";

const { width, height } = Dimensions.get('window')

const CustomDrawerComponent = props => (
  <SafeAreaView
    style={{
      flex: 1
    }}
  >
    <View
      style={{
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.themeRed
      }}
    >
      <Image
        source={Images.drawerImage}
        resizeMode="cover"
        style={{
          width: 200,
          height: 200
        }}
      />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: Home,
    Collection: Collection,
    RateUs:RateUs,
    VideoScreen:VideoScreen
  },
  {
    unmountInactiveRoutes:true,
    contentComponent: CustomDrawerComponent,
    contentOptions: {
      activeTintColor: Colors.themeRed,
      activeBackgroundColor:Colors.white,
      inactiveBackgroundColor:Colors.white
    },
    drawerType:'slide',
    drawerWidth:width,
  }
);

const AppDrawerContainer = createAppContainer(AppDrawerNavigator);

export default AppDrawerContainer;
