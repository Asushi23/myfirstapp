import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import Generate from "./src/components/Generate";

import List from "./src/components/List";

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Generate />
        </View>

        <View>
          <List />
        </View>
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

export default App;
