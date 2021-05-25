import React, { Component } from "react";
import { StyleSheet, View, Button, TouchableOpacity, Text } from "react-native";

class MyButton extends Component {
  render() {
    const {
      accessibilityLabel,
      color,
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
      newId,
    } = this.props;
    const buttonStyles = [styles.button];
    const textStyles = [styles.text];
    if (color) {
      if (Platform.OS === "ios") {
        textStyles.push({ color: color });
      } else {
        buttonStyles.push({ backgroundColor: color });
      }
    }

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
        newId={newId}
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
  button: Platform.select({
    ios: {},
    android: {
      elevation: 4,
      // Material design blue from https://material.google.com/style/color.html#color-color-palette
      backgroundColor: "#2196F3",
      borderRadius: 2,
    },
  }),
  text: {
    textAlign: "center",
    margin: 8,
    ...Platform.select({
      ios: {
        // iOS blue from https://developer.apple.com/ios/human-interface-guidelines/visual-design/color/
        color: "#007AFF",
        fontSize: 18,
      },
      android: {
        color: "white",
        fontWeight: "500",
      },
    }),
  },
  buttonDisabled: Platform.select({
    ios: {},
    android: {
      elevation: 0,
      backgroundColor: "#dfdfdf",
    },
  }),
  textDisabled: Platform.select({
    ios: {
      color: "#cdcdcd",
    },
    android: {
      color: "#a1a1a1",
    },
  }),
});

export default MyButton;
