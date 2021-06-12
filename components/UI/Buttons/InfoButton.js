import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const InfoButton = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.button}
        onPress={props.onPress}
      >
        <Text style={styles.text}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: "rgba(20,174,255,0.51)",
    justifyContent: "center",
    alignContent: "center",
    borderWidth: 3,
    borderRadius: 20,

    width: 30,
    height: 30,
  },
  text: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default InfoButton;
