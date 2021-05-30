import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "#ccd4cb" };
    this.changeInputColor = (color) => {
      this.setState({ color: color });
    };
  }

  render() {
    const inputStyles = StyleSheet.create({
      input: {
        backgroundColor: this.state.color,
        flex: 1,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "black",
        margin: "2%",
      },
    });

    return (
      <View style={styles.screenContainer}>
        <View style={styles.productScreen}>
          <Text style={styles.text}>{this.props.product}</Text>
        </View>
        <View style={inputStyles.input}>
          <Text style={styles.text}>{this.props.digits}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flexDirection: "row",
    padding: 5,
    backgroundColor: "#ccc",

    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    margin: "2%",
  },
  productScreen: {
    flex: 1,
    backgroundColor: "#ccd4cb",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    margin: "2%",
  },
  text: {
    textAlign: "center",
    fontSize: 40,
  },
});

export default Screen;
