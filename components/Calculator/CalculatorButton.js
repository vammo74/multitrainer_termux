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
      buttonFunction,
      buttonMargin,
      buttonMarginLeft,
      buttonMarginRight,
      buttonMarginTop,
      buttonMarginBottom,
      buttonBorderFull,
      buttonBorderEnterTop,
      buttonBorderEnterLeft,
      buttonBorderEnterBottom,
      flex,
      width,
      height,
      rotate,
    } = this.props;
    const buttonStyles = [styles.button];
    const textStyles = [styles.text];
    const containerStyles = [styles.container];

    if (this.props.flex) {
      containerStyles.push({
        flex: this.props.flex,
      });
    }
    if (this.props.height) {
      containerStyles.push({
        height: this.props.height,
      });
    }
    if (this.props.width) {
      containerStyles.push({
        width: this.props.width,
      });
    }
    if (this.props.textColor) {
      textStyles.push({
        color: textColor,
      });
    }
    if (this.props.rotate) {
      textStyles.push({
        transform: [{ rotate: this.props.rotate }],
        alignSelf: "stretch",
      });
    }

    if (this.props.color) {
      buttonStyles.push({
        backgroundColor: color,
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
    if (this.props.buttonMarginLeft) {
      buttonStyles.push({
        marginLeft: this.props.buttonMarginLeft,
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
    if (this.props.buttonBorderEnterTop) {
      buttonStyles.push({
        borderStyle: "solid",
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
        borderColor: "black",
      });
    }
    if (this.props.buttonBorderEnterBottom) {
      buttonStyles.push({
        borderStyle: "solid",
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderBottomRightRadius: 2,
        borderColor: "black",
      });
    }
    if (this.props.buttonBorderEnterLeft) {
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
        textColor={textColor}
        color={color}
        flex={flex}
        width={width}
        height={height}
        rotate={rotate}
        buttonFunction={buttonFunction}
        buttonMargin={buttonMargin}
        buttonMarginLeft={buttonMarginLeft}
        buttonMarginRight={buttonMarginRight}
        buttonMarginTop={buttonMarginTop}
        buttonMarginBottom={buttonMarginBottom}
        buttonBorderFull={buttonBorderFull}
        buttonBorderEnterTop={buttonBorderEnterTop}
        buttonBorderEnterBottom={buttonBorderEnterBottom}
        buttonBorderEnterLeft={buttonBorderEnterLeft}
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
    flex: 1,
    elevation: 4,
    backgroundColor: "#2196F3",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
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
