import React, { Component, useState } from "react";

import { StyleSheet, View, Button, TouchableOpacity, Text } from "react-native";

class NewTableCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#d7b7ed",
      textColor: "#000",
    };
    this.changeColor = (color, textColor) => {
      this.setState({ color: color, textColor: textColor });
    };
  }

  render() {
    const { onPress, title, id, buttonFunction, buttonType } = this.props;
    const buttonStyles = StyleSheet.create({
      buttonForm: {
        flex: 1,
        elevation: 4,
        backgroundColor: this.state.color,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 2,
        alignItems: "center",
        justifyContent: "center",
      },
    });
    const textStyles = StyleSheet.create({
      buttonText: {
        textAlign: "center",
        color: this.state.textColor,
        fontWeight: "500",
      },
    });
    const containerStyles = [styles.container];

    return (
      <TouchableOpacity
        style={containerStyles}
        onPress={onPress}
        id={id}
        buttonFunction={buttonFunction}
        buttonType={buttonType}
      >
        <View style={buttonStyles.buttonForm}>
          <Text style={textStyles.buttonText}>{title}</Text>
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
  buttonDisabled: {
    elevation: 0,
    backgroundColor: "#dfdfdf",
  },
  textDisabled: {
    color: "#a1a1a1",
  },
});

export default NewTableCell;
