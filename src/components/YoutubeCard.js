import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import { Colors, CommonStyles } from "../assets/styles";

const { width, height } = Dimensions.get("window");

class YoutubeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { video } = this.props;
    console.log(video.id.videoId)
    return (
      <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('VideoScreen',{
          type:'youtube',
          videoURL:video.id.videoId
      })}>
        <View style={{ width: width, height: 300 }}>
          <View
            style={{
              width: width,
              height: 300
            }}
          >
            <Image
              source={{ uri: video.snippet.thumbnails.high.url }}
              style={{ width: undefined, height: undefined, flex: 1 }}
              resizeMode="cover"
            />
          </View>
          <View
            style={{ height: 50, width: width, position: "absolute", top: 0 }}
          >
            <Text
              numberOfLines={1}
              style={[
                CommonStyles.textMediumBold,
                {
                  color: Colors.white,
                  paddingHorizontal: 3,
                  textAlign: "center"
                }
              ]}
            >
              {video.snippet.title}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
export default YoutubeCard;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
  }
});
