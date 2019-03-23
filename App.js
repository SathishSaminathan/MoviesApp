/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions} from 'react-native';
import { WebView } from "react-native-webview";
import Orientation from 'react-native-orientation';

const { width, height } = Dimensions.get("window");

export default class App extends Component {

  constructor (props) {
    super(props)
  }

  componentDidMount(){
    Orientation.lockToLandscape();
  }

  onLayout = (e) => {
    // this.setState({
    //   swidth: e.nativeEvent.layout.width,
    //   sheight: e.nativeEvent.layout.height,
    //   x: e.nativeEvent.layout.x,
    //   y: e.nativeEvent.layout.y
    // },()=>alert(this.state.swidth))
  }

  render() {
    return (
      <WebView onLayout={this.onLayout}
        source={{ uri: "http://d3.uptofiles.site//files/Tamil%20Dubbed%20Movies/Ghost%20Ship%20(2002)/Ghost%20Ship%20(640x360)/Ghost%20Ship%20HD.mp4" }}
        style={[styles.video,{width:width, height:height-10}]}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  video: {
    // width: height,
    // maxHeight: width
  }
});
