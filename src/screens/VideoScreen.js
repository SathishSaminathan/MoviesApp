import React, { Component } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import Orientation from "react-native-orientation";
import { WebView } from "react-native-webview";
const { width, height } = Dimensions.get("window");

class VideoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    Orientation.lockToLandscape();
  }

  onLayout = e => {
    // this.setState({
    //   swidth: e.nativeEvent.layout.width,
    //   sheight: e.nativeEvent.layout.height,
    //   x: e.nativeEvent.layout.x,
    //   y: e.nativeEvent.layout.y
    // },()=>alert(this.state.swidth))
  };

  render() {
      console.log(this.props.navigation)
    const {URL}= this.props.navigation.state.params
    return (
      <WebView
        // onLayout={this.onLayout}
        source={{
          uri:
            URL
        }}
        style={[styles.video, { width: height, height: height - 10 }]}
      />
    );
  }
}
export default VideoScreen;
const styles = StyleSheet.create({
  video: {
    // width: height,
    // maxHeight: width
  }
});
