import React from "react";
import { Button, View, StyleSheet } from "react-native";

import NumpadButton from "./NumpadButton";

const NumberPad = (props) => {
  const pressHandler = (digit) => {
    console.log(digit);
    props.onEnteredDigit(digit);
  };
  const deleteHandler = () => {
    console.log("delete");
    props.onDelete();
  };
  const enterHandler = () => {
    console.log("np enter");
    props.onEnter();
  };
  return (
    <View className="numberPad" style={styles.buttonRows}>
      <View style={styles.buttonRow}>
        <NumpadButton
          buttonFunction="digit"
          onPress={() => {
            pressHandler(7);
          }}
          title="7"
        />
        <NumpadButton
          buttonFunction="digit"
          onPress={() => {
            pressHandler(8);
          }}
          title="8"
        />
        <NumpadButton
          buttonFunction="digit"
          onPress={() => {
            pressHandler(9);
          }}
          title="9"
        />
      </View>
      <View style={styles.buttonRow}>
        <NumpadButton
          buttonFunction="digit"
          onPress={() => {
            pressHandler(4);
          }}
          title="4"
        />
        <NumpadButton
          buttonFunction="digit"
          onPress={() => {
            pressHandler(5);
          }}
          title="5"
        />
        <NumpadButton
          buttonFunction="digit"
          onPress={() => {
            pressHandler(6);
          }}
          title="6"
        />
      </View>
      <View style={styles.buttonRow}>
        <NumpadButton
          buttonFunction="digit"
          onPress={() => {
            pressHandler(1);
          }}
          title="1"
        />
        <NumpadButton
          buttonFunction="digit"
          onPress={() => {
            pressHandler(2);
          }}
          title="2"
        />
        <NumpadButton
          buttonFunction="digit"
          onPress={() => {
            pressHandler(3);
          }}
          title="3"
        />
      </View>
      <View buttonFunction="lastRow" style={styles.buttonRow}>
        <NumpadButton
          buttonFunction="del"
          onPress={deleteHandler}
          title="del"
        />
        <NumpadButton
          buttonFunction="digit"
          onPress={() => {
            pressHandler(0);
          }}
          title="0"
        />
        <NumpadButton
          buttonFunction="enter"
          onPress={enterHandler}
          title="enter"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonRows: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonRow: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default NumberPad;
