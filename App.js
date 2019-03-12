import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import Generate from "./src/components/Generate";

import List from "./src/components/List";

import Nav from "./src/components/Nav";

class App extends Component {
  state = {
    nameOfApp: "My first App",
    random: [15, 18]
  };
  addNumber = () => {
    alert("add Number");
  };

  deleteNumber = () => {
    alert("Delete Number");
  };

  render() {
    return (
      <View style={styles.container}>
        <Nav nameOfApp={this.state.nameOfApp} />
        <Generate add={this.addNumber} />
        <List items={this.state.random} />
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
