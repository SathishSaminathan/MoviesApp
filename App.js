/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions} from 'react-native';
import AppContainer from './src/navigations/AppStackNavigator';
import AppDrawerContainer from './src/navigations/AppDrawerNavigator';

export default class App extends Component {

  constructor (props) {
    super(props)
  }

  render() {
    return (
      // <AppStackContainer/>
      <AppDrawerContainer/>
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
