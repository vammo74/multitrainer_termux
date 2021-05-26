import React, { Component, useState } from "react";

import { StyleSheet, View, Button, TouchableOpacity, Text } from "react-native";

class NumpadButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#9377a6",
      textColor: "#000",
    };
    this.changeColor = (color, textColor) => {
      this.setState({ color: color, textColor: textColor });
    };
  }

  render() {
    const { onPress, title, id, buttonFunction } = this.props;
    const buttonStyles = [styles.button];
    const textStyles = [styles.text];
    const containerStyles = [styles.container];

    textStyles.push({ color: this.state.textColor });

    buttonStyles.push({ backgroundColor: this.state.color });

    const setColor = (color) => {
      buttonStyles.push({ backgroundColor: color });
    };

    return (
      <TouchableOpacity
        style={containerStyles}
        onPress={onPress}
        id={id}
        buttonFunction={buttonFunction}
      >
        <View style={buttonStyles}>
          <Text style={textStyles}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "10%",
  },
  button: {
    flex: 1,
    elevation: 4,
    backgroundColor: "#2196F3",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    color: "white",
    fontWeight: "500",
  },
  buttonDisabled: {
    elevation: 0,
    backgroundColor: "#dfdfdf",
  },
  textDisabled: {
    color: "#a1a1a1",
  },
});

export default NumpadButton;
