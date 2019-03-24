import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  StatusBar,
  ScrollView
} from "react-native";
import Orientation from "react-native-orientation";
import { Colors, CommonStyles } from "../assets/styles";
import CardItems from "../components/CardItems";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  static navigationOptions = {
    title: 'Movies',
  };

  componentDidMount() {
    Orientation.lockToPortrait();
    this.props.navigation.addListener("didFocus", () => {
      // user has navigated to this screen
      Orientation.lockToPortrait();
      // alert('didFocus')
    });

    this.props.navigation.addListener("didBlur", () => {
      // user has navigated away from this screen
      // alert('didBlur')
    });
  }

  // static navigationOptions = {
  //   header: null
  // };

  render() {
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor={Colors.themeRedDark} />
        <View>
          <View style={{ paddingHorizontal: 10 }}>
            <Text
              style={[
                styles.textStyle,
                CommonStyles.textMedium,
                { fontWeight: "bold" }
              ]}
            >
              Ghost Movies
            </Text>
            <ScrollView
              contentContainerStyle={{
                paddingVertical: 10,
                paddingHorizontal: 3
              }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <CardItems />
              <CardItems />
              <CardItems />
              <CardItems />
            </ScrollView>
          </View>

          <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
            <Text
              style={[
                styles.textStyle,
                CommonStyles.textMedium,
                { fontWeight: "bold" }
              ]}
            >
              Action Movies
            </Text>
            <ScrollView
              contentContainerStyle={{
                paddingVertical: 10,
                paddingHorizontal: 3
              }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <CardItems />
              <CardItems />
              <CardItems />
              <CardItems />
            </ScrollView>
          </View>

          <View style={{ paddingHorizontal: 10 }}>
            <Text
              style={[
                styles.textStyle,
                CommonStyles.textMedium,
                { fontWeight: "bold" }
              ]}
            >
              Thriller Movies
            </Text>
            <ScrollView
              contentContainerStyle={{
                paddingVertical: 10,
                paddingHorizontal: 3
              }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <CardItems />
              <CardItems />
              <CardItems />
              <CardItems />
            </ScrollView>
          </View>
          {/* <Button
          title="Go to Details"
          onPress={() =>
            this.props.navigation.navigate("VideoScreen", {
              itemId: 86,
              URL: "http://d3.uptofiles.site//files/Tamil%20Dubbed%20Movies/Ghost%20Ship%20(2002)/Ghost%20Ship%20(640x360)/Ghost%20Ship%20HD.mp4"
            })
          }
        /> */}
        </View>
      </View>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10
  },
  textStyle: {
    fontFamily: "Roboto-Regular"
  }
});
