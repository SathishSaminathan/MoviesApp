import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icons from "react-native-vector-icons/FontAwesome5";

export default class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
    drawerIcon:({tintColor})=>(
      <Icons name="swatchbook" style={{color:tintColor, fontSize:18}}/>
    ),
    title:'Collections'
  };

  render() {
    return (
      <View>
        <Text> Collections </Text>
      </View>
    );
  }
}
