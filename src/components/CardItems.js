import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Colors from "../assets/styles/Colors";
import { CommonStyles } from "../assets/styles";

class CardItems extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props)
    const{movie}=this.props
    return (
      <TouchableOpacity
        style={{
          width: 150,
          height: 180,
          backgroundColor: Colors.white,
          marginRight: 10,
          borderRadius: 6,
          overflow: "hidden",
          elevation: 5
        }}
        onPress={()=>this.props.navigation.navigate('VideoScreen', {
          itemId: 86,
          URL: movie.movieURL
        })}
      >
        <View
          style={{
            width: 150,
            height: 130
          }}
        >
          <Image
            style={{ width: undefined, height: undefined, flex: 1 }}
            resizeMode="cover"
            source={{
              uri:
              movie.movieImage
            }}
          />
        </View>
        <View style={{
            justifyContent:'space-evenly',
            flex:1
        }}>
          <Text
            numberOfLines={2}
            style={[
              CommonStyles.textStyle,
              CommonStyles.textMedium,
              { paddingLeft: 5, textAlign: "left" }
            ]}
          >
           {movie.movieName}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
export default CardItems;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
  }
});
