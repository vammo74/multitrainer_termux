import React, { Component } from "react";
import { StyleSheet, View, Button, TouchableOpacity, Text } from "react-native";

class TableCell extends Component {
  render() {
    const {
      accessibilityLabel,
      color,
      textColor,
      onPress,
      touchSoundDisabled,
      title,
      hasTVPreferredFocus,
      nextFocusDown,
      nextFocusForward,
      nextFocusLeft,
      nextFocusRight,
      nextFocusUp,
      testID,
      id,
    } = this.props;
    const buttonStyles = [styles.button];
    const textStyles = [styles.text];
    const containerStyles = [styles.container];
    if (textColor) {
      textStyles.push({ color: textColor });
    }
    if (color) {
      buttonStyles.push({ backgroundColor: color });
    }

    const setColor = (color) => {
      buttonStyles.push({ backgroundColor: color });
    };

    const disabled =
      this.props.disabled != null
        ? this.props.disabled
        : this.props.accessibilityState?.disabled;

    const accessibilityState =
      disabled !== this.props.accessibilityState?.disabled
        ? { ...this.props.accessibilityState, disabled }
        : this.props.accessibilityState;

    if (disabled) {
      buttonStyles.push(styles.buttonDisabled);
      textStyles.push(styles.textDisabled);
    }

    //    invariant(
    //      typeof title === "string",
    //      "The title prop of a Button must be a string"
    //    );
    //    const formattedTitle =
    //      Platform.OS === "android" ? title.toUpperCase() : title;
    //   const Touchable =
    //     Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

    return (
      <TouchableOpacity
        style={containerStyles}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="button"
        accessibilityState={accessibilityState}
        hasTVPreferredFocus={hasTVPreferredFocus}
        nextFocusDown={nextFocusDown}
        nextFocusForward={nextFocusForward}
        nextFocusLeft={nextFocusLeft}
        nextFocusRight={nextFocusRight}
        nextFocusUp={nextFocusUp}
        testID={testID}
        disabled={disabled}
        onPress={onPress}
        touchSoundDisabled={touchSoundDisabled}
        id={id}
        setColor={(color) => setColor(color)}
      >
        <View style={buttonStyles}>
          <Text style={textStyles} disabled={disabled}>
            {title}
          </Text>
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

export default TableCell;