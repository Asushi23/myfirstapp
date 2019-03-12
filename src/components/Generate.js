import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";

const Generate = props => (
  <TouchableWithoutFeedback
    onPress={() => {
      props.add();
    }}
  >
    <View>
      <Text>Add Numver</Text>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Generate;
