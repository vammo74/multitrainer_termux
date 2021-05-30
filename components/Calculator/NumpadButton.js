import React, { Component, useState } from "react";

import { StyleSheet, View, Button, TouchableOpacity, Text } from "react-native";

class NumpadButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      onPress,
      title,
      id,
      buttonFunction,
      buttonMargin,
      buttonMarginLeft,
      buttonMarginRight,
      buttonMarginTop,
      buttonMarginBottom,
      buttonBorderFull,
      buttonBorderEnter,
      color,
      textColor,
    } = this.props;
    const buttonStyles = [styles.button];
    const textStyles = [styles.text];
    const containerStyles = [styles.container];

    textStyles.push({ color: this.props.textColor });

    buttonStyles.push({
      backgroundColor: this.props.color,
    });

    if (this.props.buttonMargin) {
      buttonStyles.push({
        margin: this.props.buttonMargin,
      });
    }
    if (this.props.buttonMarginLeft) {
      buttonStyles.push({
        marginLeft: this.props.buttonMarginLeft,
      });
    }
    if (this.props.buttonMarginRight) {
      buttonStyles.push({
        marginRight: this.props.buttonMarginRight,
      });
    }
    if (this.props.buttonMarginTop) {
      buttonStyles.push({
        marginTop: this.props.buttonMarginTop,
      });
    }
    if (this.props.buttonMarginBottom) {
      buttonStyles.push({
        marginBottom: this.props.buttonMarginBottom,
      });
    }
    if (this.props.buttonBorderFull) {
      buttonStyles.push({
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 2,
      });
    }
    if (this.props.buttonBorderEnter) {
      buttonStyles.push({
        borderStyle: "solid",
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderTopLeftRadius: 2,
        borderBottomLeftRadius: 2,
        borderColor: "black",
      });
    }

    return (
      <TouchableOpacity
        style={containerStyles}
        onPress={onPress}
        id={id}
        buttonMargin={buttonMargin}
        buttonMarginLeft={buttonMarginLeft}
        buttonMarginRight={buttonMarginRight}
        buttonMarginTop={buttonMarginTop}
        buttonMarginBottom={buttonMarginBottom}
        buttonBorderFull={buttonBorderFull}
        buttonBorderEnter={buttonBorderEnter}
        buttonFunction={buttonFunction}
        color={color}
        textColor={textColor}
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