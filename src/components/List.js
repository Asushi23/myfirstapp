import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const List = props => {
  return props.items.map((item, i) => (
    <TouchableOpacity
      onPress={() => props.delete(i)}
      //{ alert("delete");}}
      key={i}
    >
      <View>
        <Text>{item}</Text>
      </View>
    </TouchableOpacity>
  ));
};

export default List;
