import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import Calculator from "./components/Calculator/Calculator";
import Table from "./components/Table/Table";

const App = () => {
  const [level, setLevel] = useState(3);

  const changeLevelHandler = (flag) => {
    if (flag === "up" && level <= 10) {
      setLevel((prevLevel) => prevLevel + 1);
    }
    if (flag === "down" && level > 0) {
      setLevel((prevLevel) => prevLevel - 1);
      console.log(flag);
      console.log(level);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Table level={level} />
      <Calculator
        level={level}
        onChangeLevel={(flag) => changeLevelHandler(flag)}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    margin: "5%",
  },
});

export default App;
