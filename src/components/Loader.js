import React,{Component} from "react";
import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  StatusBar
} from "react-native";
import { Colors } from "../assets/styles";
const { width, height } = Dimensions.get("window");

const colors = [Colors.themeRed, Colors.themeYellow, Colors.themeBlue];

class Loader extends Component {

  state={
    StatusBarColor:Colors.themeRed
  }

  componentDidMount(){
    let i =0;
    setInterval(() => {
      if(i >2){
        i=0;
      }
      this.setState({
        StatusBarColor:colors[i]
      },()=>{i++})
    }, 300);
  }

  render() {
    const {StatusBarColor} = this.state
    return (
      <View
        style={[
          StyleSheet.absoluteFill,
          {
            backgroundColor: Colors.black,
            alignItems: "center",
            justifyContent: "center"
          }
        ]}
      >
        <StatusBar animated={true} backgroundColor={StatusBarColor}/>
        <ActivityIndicator size="large" color={StatusBarColor} />
      </View>
    );
  }
}

export default Loader;

