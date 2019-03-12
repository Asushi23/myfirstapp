import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

const List = props => {
  // list = [13, 17, 20];

  // this.list.map((e, i) => console.log(e, i));
  return (
    <View>
      {props.items.map((e, i) => (
        <Text key={i}>{e}</Text>
      ))}
    </View>
  );
};

export default List;
