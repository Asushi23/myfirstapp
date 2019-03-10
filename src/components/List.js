import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class List extends Component {
  list = [13, 17, 20];
  render() {
    return (
      <View>
        <Text>{this.list[0]}</Text>
        <Text>{this.list[1]}</Text>
        <Text>{this.list[2]}</Text>
      </View>
    );
  }
}

export default List;
