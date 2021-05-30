import React, { Component } from "react";

import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

class CalculatorButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      onPress,
      title,
      id,
      color,
      textColor,
      buttonMargin,
      buttonMarginRight,
      buttonMarginTop,
      buttonMarginBottom,
      buttonBorderFull,
      buttonBorderEnter,
      flex,
    } = this.props;
    const buttonStyles = [styles.button];
    const textStyles = [styles.text];
    const containerStyles = [styles.container];

    textStyles.push({ color: textColor });

    buttonStyles.push({ backgroundColor: color });

    if (this.props.height) {
      containerStyles.push({
        flex: this.props.flex,
      });
    }
    if (this.props.buttonMargin) {
      buttonStyles.push({
        margin: this.props.buttonMargin,
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
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
        borderBottomRightRadius: 2,
        borderColor: "black",
      });
    }
    return (
      <TouchableOpacity
        style={containerStyles}
        onPress={onPress}
        id={id}
        textColor={textColor}
        color={color}
        flex={flex}
        buttonMargin={buttonMargin}
        buttonMarginRight={buttonMarginRight}
        buttonMarginTop={buttonMarginTop}
        buttonMarginBottom={buttonMarginBottom}
        buttonBorderFull={buttonBorderFull}
        buttonBorderEnter={buttonBorderEnter}
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
    alignItems: "stretch",
  },
  button: {
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

export default CalculatorButton;
