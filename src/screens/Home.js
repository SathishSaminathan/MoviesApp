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
import Icons from "react-native-vector-icons/FontAwesome5";

import { Colors, CommonStyles } from "../assets/styles";
import CardItems from "../components/CardItems";
import HeaderComponent from "../components/HeaderComponent";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    title: "Movies",
    headerLeft: (
      <Icons
        name="bars"
        style={{
          fontSize: 20,
          color: Colors.white,
          textAlign: "center",
          paddingLeft: 15
        }}
      />
    ),
    headerStyle: {
      backgroundColor: Colors.themeRed
    },
    headerTintColor: Colors.white,
    headerTitleStyle: {
      fontWeight: "bold"
    }
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

  static navigationOptions = {
    drawerIcon:({tintColor})=>(
      <Icons name="film" style={{color:tintColor, fontSize:18}}/>
    ),
    title:'Movies'
  };

  toggleDrawer = () => {
    this.props.navigation.openDrawer();
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={Colors.themeRedDark} />
        <HeaderComponent name="" toggle={this.toggleDrawer} />
        <ScrollView>
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
        </ScrollView>
      </View>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textStyle: {
    fontFamily: "Roboto-Regular"
  }
});
