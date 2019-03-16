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
    this.randomNumber();
  };

  deleteNumber = i => {
    const newArray = this.state.random.filter((item, index) => {
      return i !== index;
    });
    this.setState({
      random: newArray
    });
  };

  randomNumber = () => {
    const random = Math.floor(Math.random() * 100) + 1;
    this.setState(prevstate => {
      return {
        random: [...prevstate.random, random]
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Nav nameOfApp={this.state.nameOfApp} />
        <Generate add={this.addNumber} />
        <List items={this.state.random} delete={this.deleteNumber} />
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
