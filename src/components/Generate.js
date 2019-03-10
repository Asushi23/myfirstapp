import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class Generate extends Component {
  render() {
    return (
      <View>
        <Button title="Add Number" onPress={() => {}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Generate;
