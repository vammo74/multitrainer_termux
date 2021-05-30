import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet } from "react-native";
import { useInterval } from "../helpers/useInterval";

const Timer = (props) => {
  const timer = useRef();
  const [timerHeight, setTimerHeight] = useState(0);
  const [timerState, setTimerState] = useState(true);

  console.log("timer");

  useEffect(() => {
    if (props.timerFlag === "start") {
      setTimerState(true);
      setTimerHeight(0);
    } else if (props.timerFlag === "reset-on") {
      setTimerState(true);
      setTimerHeight((t) => t - 10);
    } else if (props.timerFlag === "reset-off") {
      setTimerState(true);
      setTimerHeight((t) => t - 10);
    } else {
      setTimerState(false);
      setTimerHeight(0);
    }
  }, [props.timerFlag]);

  useInterval(() => {
    if (timerState) {
      if (timerHeight <= 100) {
        setTimerHeight(timerHeight + 1);
      } else {
        setTimerHeight(0);
        setTimerState(false);
      }
    }
  }, 500);

  const timerFillStyles = StyleSheet.create({
    timerFill: {
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "#000000",
      backgroundColor: "red",
      height: timerHeight + "%",
    },
  });

  const timerResetStyles = StyleSheet.create({
    timerReset: {
      backgroundColor: "red",
    },
  });

  return (
    <View style={styles.timer}>
      <View
        style={
          timerState !== "stop"
            ? timerFillStyles.timerFill
            : timerResetStyles.timerReset
        }
        ref={timer}
      ></View>
    </View>
  );
};
const styles = StyleSheet.create({
  timer: {
    flex: 0.2,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
});
export default Timer;
