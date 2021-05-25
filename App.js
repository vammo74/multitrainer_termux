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

  const changeLevelHandler = () => {
    return 0;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Table level={level} />
      <Calculator level={level} onChangeLevel={changeLevelHandler} />
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
    justifyContent: "center",
    width: "90%",
    height: "70%",
  },
});

export default App;
