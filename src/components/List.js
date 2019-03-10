import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class List extends Component {
  list = [13, 17, 20];

  render() {
    // this.list.map((e, i) => console.log(e, i));
    return (
      <View>
        {this.list.map((e, i) => (
          <Text key={i}>{e}</Text>
        ))}
      </View>
    );
  }
}

export default List;
