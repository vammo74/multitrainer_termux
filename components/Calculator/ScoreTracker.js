import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class ScoreTracker extends Component {
  constructor(props) {
    super(props);
    this.state = { trackerHeight: "30%" };
    this.changeHeight = (newHeight) => {
      this.setState({ trackerHeight: newHeight });
    };
  }

  render() {
    console.log("remount");
    const barFillStyles = StyleSheet.create({
      empty: {},
      barFill: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "black",
        height: this.state.trackerHeight,
        width: "100%",
        backgroundColor: "blue",
      },
    });

    console.log(barFillStyles);

    return (
      <View style={styles.scoreTracker}>
        <View style={barFillStyles.barFill}></View>
        <Text>Level:</Text>
        <Text>{this.props.level}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scoreTracker: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "flex-end",
    flexDirection: "column",
    flex: 0.2,
  },
});

export default ScoreTracker;
