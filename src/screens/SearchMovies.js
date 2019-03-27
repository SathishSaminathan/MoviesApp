import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  Dimensions,
  Keyboard,
  ScrollView,
  TouchableOpacity
} from "react-native";
import LottieView from "lottie-react-native";
import YTSearch from "youtube-api-search";
import * as _ from "lodash";
import Icons from "react-native-vector-icons/FontAwesome5";
import Orientation from "react-native-orientation";

import { Colors } from "../assets/styles";
import Images from "../assets/images";
import AppContants from "../constants/AppConstants";
import SearchBar from "../components/SearchBar";
import YoutubeCard from "../components/YoutubeCard";

const { width, height } = Dimensions.get("window");

class SearchMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchFieldFocused: false,
      term: "sathish",
      Videos: []
    };
  }

  componentDidMount() {
    this.props.navigation.addListener("didFocus", () => {
      // user has navigated to this screen
      Orientation.lockToPortrait();
      // alert('didFocus')
    });
    const { term } = this.state;
    // YTSearch({ key: AppContants.API_KEY, term }, Videos => {
    //   console.log(Videos);
    //   this.setState(
    //     {
    //       Videos
    //     },
    //     () => this.renderCard()
    //   );
    // });
  }

  static navigationOptions = {
    drawerIcon: ({ tintColor }) => <Icons color={tintColor} name="search" />,
    title: "Search Videos"
  };

  handlePress = _.debounce(term => {
    YTSearch({ key: AppContants.API_KEY1, term }, Videos => {
      this.setState(
        {
          Videos
        },
        () => this.renderCard()
      );
    });
  }, 500);

  renderCard = () => {
    const VideoCardTemplate = [];
    this.state.Videos.map((video, i) => {
      VideoCardTemplate.push(
        <YoutubeCard {...this.props} key={i} video={video} />
      );
    });
    return VideoCardTemplate;
  };

  render() {
    return (
      <View
        style={[
          styles.container
          // SearchFieldFocused && { backgroundColor: "#00000094" }
        ]}
      >
        <StatusBar backgroundColor={Colors.themeBlueDark} />
        <SearchBar handlePress={this.handlePress} />
        <ScrollView>
          {/* <LottieView source={Images.lottieHeartAnimation} autoPlay loop /> */}

          {/* <YoutubeCard /> */}
          {this.renderCard()}
        </ScrollView>
      </View>
    );
  }
}
export default SearchMovies;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  }
});
