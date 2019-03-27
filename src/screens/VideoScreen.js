import React, { Component } from "react";
import { View, Text, Dimensions, StyleSheet, StatusBar } from "react-native";
import Orientation from "react-native-orientation";
import { WebView } from "react-native-webview";
import Loader from "../components/Loader";
import { Colors } from "../assets/styles";
const { width, height } = Dimensions.get("window");

class VideoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Loading: true
    };
  }

  static navigationOptions = {
    drawerLabel: () => null // hide the item from drawer navigator
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ Loading: false });
    }, 3000);
    this.props.navigation.addListener("didFocus", () => {
      // user has navigated to this screen
      Orientation.lockToLandscape();
      // alert('didFocus')
    });

    // this.props.navigation.addListener("didBlur", () => {
    //   this.setState({
    //     Loading:true
    //   })
    // });
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
    //   console.log(this.props.navigation)
    const { Loading } = this.state;
    const { URL, type, videoURL } = this.props.navigation.state.params;
    console.log(this.props)
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <StatusBar backgroundColor={Colors.themeRedDark} hidden={!Loading}/>
        <WebView
          // onLayout={this.onLayout}
          source={{
            uri:
              type === "youtube"
                ? `https://www.youtube.com/embed/${videoURL}`
                : URL
          }}
          onLoadStart={() => this.setState({ Loading: true })}
          onLoadEnd={() => this.setState({ Loading: false })}
          style={[
            styles.video,
            {
              width: height,
              height: height - 10,
              backgroundColor: Colors.black
            }
          ]}
        />
        {Loading && <Loader />}
      </View>
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
