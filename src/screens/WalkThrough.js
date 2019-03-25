import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ViewPagerAndroid,
  StatusBar,
  TouchableWithoutFeedback,
  Image
} from "react-native";
import Orientation from "react-native-orientation";
import Icon from "react-native-vector-icons/FontAwesome5";

import { Colors, CommonStyles } from "../assets/styles";
import Images from "../assets/images";
const { width, height } = Dimensions.get("window");

const BUTTON_HEIGHT = 50;

class WalkThrough extends Component {
  constructor(props) {
    super(props);
    this.state = {
      InitialPage: 0,
      CurrentPage: 0,
      TotalPages: 3
    };
  }

  static navigationOptions = {
    drawerLabel: () => null
  };

  componentWillMount() {
    Orientation.lockToPortrait();
  }

  getStatusBarColor = currentPage => {
    switch (currentPage) {
      case 0:
        return Colors.themeRedDark;
      case 1:
        return Colors.themeYellowDark;
      case 2:
        return Colors.themeBlueDark;
    }
  };

  getPageIndicators = currentPage => {
    const { TotalPages } = this.state;
    let pageIndicators = [];
    for (let i = 0; i < TotalPages; i++) {
      pageIndicators.push(
        <View
          key={i}
          style={[
            {
              width: 10,
              height: 10,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: Colors.white
            },
            currentPage === i && { backgroundColor: Colors.white }
          ]}
          onPress={() => alert(i)}
        />
      );
    }
    return pageIndicators;
  };

  render() {
    const { InitialPage, CurrentPage, TotalPages } = this.state;
    const statusBarColor = this.getStatusBarColor(CurrentPage);
    return (
      <View style={styles.container}>
        <StatusBar animated={true} backgroundColor={statusBarColor.toString()} />
        <ViewPagerAndroid
          style={{ flex: 1 }}
          initialPage={InitialPage}
          onPageSelected={event =>
            this.setState({
              CurrentPage: event.nativeEvent.position
            })
          }
        >
          <View
            style={{ backgroundColor: Colors.themeRed, alignItems: "center" }}
          >
            <View style={{ width: 100, height: 100, marginVertical: 50 }}>
              <Image
                source={Images.walkthroughIcon}
                style={{ flex: 1, width: undefined }}
                resizeMode="cover"
              />
            </View>
            <Text
              style={[
                CommonStyles.textXLargeBold,
                { color: Colors.white, paddingHorizontal: 50 }
              ]}
            >
              Welcome to
            </Text>
            <Text
              style={{ fontSize: 40, fontWeight: "bold", color: Colors.white }}
            >
              TV Petti...
            </Text>
          </View>
          <View
            style={{
              backgroundColor: Colors.themeYellow,
              alignItems: "center"
            }}
          >
            <View style={{ width: 100, height: 100, marginVertical: 50 }}>
              <Image
                source={Images.walkthroughIcon1}
                style={{ flex: 1, width: undefined }}
                resizeMode="cover"
              />
            </View>
            <Text
              style={[
                CommonStyles.textXLargeBold,
                { color: Colors.white, paddingHorizontal: 50, textAlign:'center' }
              ]}
            >
              Explore Tamil dubbed movies in 
            </Text>
            <Text
              style={{ fontSize: 40, fontWeight: "bold", color: Colors.white }}
            >
              TV Petti...
            </Text>
          </View>
          <View
            style={{ backgroundColor: Colors.themeBlue, alignItems: "center" }}
          >
            <View style={{ width: 100, height: 100, marginVertical: 50 }}>
              <Image
                source={Images.walkthroughIcon2}
                style={{ flex: 1, width: undefined }}
                resizeMode="cover"
              />
            </View>
            <Text
              style={[
                CommonStyles.textXLargeBold,
                { color: Colors.white, paddingHorizontal: 50, textAlign:'center' }
              ]}
            >
              Stream movies without losing your space at anytime and anywhere in
            </Text>
            <Text
              style={{ fontSize: 40, fontWeight: "bold", color: Colors.white }}
            >
              TV Petti...
            </Text>
          </View>
        </ViewPagerAndroid>
        <View
          style={{
            width: width,
            position: "absolute",
            bottom: BUTTON_HEIGHT + 10,
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <View
            style={{
              width: 100,
              alignSelf: "center",
              justifyContent: "space-around",
              flexDirection: "row"
            }}
          >
            {this.getPageIndicators(CurrentPage)}
          </View>
        </View>
        {CurrentPage === TotalPages - 1 && (
          <TouchableWithoutFeedback onPress={() => this.props.onPress()}>
            <View
              style={{
                backgroundColor: Colors.white,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                height: BUTTON_HEIGHT
              }}
            >
              <Icon
                name="film"
                style={{
                  color: Colors.themeBlue,
                  fontSize: 24,
                  paddingHorizontal: 10
                }}
              />
              <Text
                style={[
                  CommonStyles.textMediumBold,
                  { color: Colors.themeBlue }
                ]}
              >
                Let's Move On
              </Text>
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    );
  }
}
export default WalkThrough;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.themeRed
  }
});
