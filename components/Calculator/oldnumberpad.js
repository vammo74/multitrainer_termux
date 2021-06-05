import React, { useRef } from "react";
import { Button, View, StyleSheet } from "react-native";

import CalculatorButton from "./CalculatorButton";
import LButtonTop from "./LButtonTop";
import LButtonBottom from "./LButtonBottom";
import LButtonLeft from "./LButtonLeft";

const NumberPad = (props) => {
  const LBBRef = useRef(null);
  const LBTRef = useRef(null);
  const LBLRef = useRef(null);

  const pressInLinkedHandler = (linkedButtons) => {
    for (let button of linkedButtons) {
      button.current.pressInHandler();
    }
  };
  const pressOutLinkedHandler = (linkedButtons) => {
    for (let button of linkedButtons) {
      button.current.pressOutHandler();
    }
  };
  const pressHandler = (digit) => {
    props.onEnteredDigit(digit);
  };
  const deleteHandler = () => {
    props.onDelete();
  };
  const enterHandler = () => {
    props.onEnter();
  };
  return (
    <View style={styles.numberPad}>
      <View style={styles.mainGrid}>
        <View style={styles.buttonRow}>
          <CalculatorButton
            color="#d4b4ca"
            textColor="black"
            buttonMargin={"3%"}
            buttonFunction="digit"
            buttonBorderFull="1"
            onPress={() => {
              pressHandler(7);
            }}
            title="7"
          />
          <CalculatorButton
            color="#d4b4ca"
            textColor="black"
            buttonMargin={"3%"}
            buttonFunction="digit"
            buttonBorderFull="1"
            onPress={() => {
              pressHandler(8);
            }}
            title="8"
          />
          <CalculatorButton
            color="#d4b4ca"
            textColor="black"
            buttonMargin={"3%"}
            buttonFunction="digit"
            buttonBorderFull="1"
            onPress={() => {
              pressHandler(9);
            }}
            title="9"
          />
        </View>
        <View style={styles.buttonRow}>
          <CalculatorButton
            color="#d4b4ca"
            textColor="black"
            buttonMargin={"3%"}
            buttonFunction="digit"
            buttonBorderFull="1"
            onPress={() => {
              pressHandler(4);
            }}
            title="4"
          />
          <CalculatorButton
            color="#d4b4ca"
            textColor="black"
            buttonMargin={"3%"}
            buttonFunction="digit"
            buttonBorderFull="1"
            onPress={() => {
              pressHandler(5);
            }}
            title="5"
          />
          <CalculatorButton
            color="#d4b4ca"
            textColor="black"
            buttonMargin={"3%"}
            buttonFunction="digit"
            buttonBorderFull="1"
            onPress={() => {
              pressHandler(6);
            }}
            title="6"
          />
        </View>
        <View style={styles.buttonRow}>
          <CalculatorButton
            color="#d4b4ca"
            textColor="black"
            buttonMargin={"3%"}
            buttonFunction="digit"
            buttonBorderFull="1"
            onPress={() => {
              pressHandler(1);
            }}
            title="1"
          />
          <CalculatorButton
            color="#d4b4ca"
            textColor="black"
            buttonMargin={"3%"}
            buttonFunction="digit"
            buttonBorderFull="1"
            onPress={() => {
              pressHandler(2);
            }}
            title="2"
          />
          <CalculatorButton
            color="#d4b4ca"
            textColor="black"
            buttonMargin={"3%"}
            buttonFunction="digit"
            buttonBorderFull="1"
            onPress={() => {
              pressHandler(3);
            }}
            title="3"
          />
        </View>
        <View buttonFunction="lastRow" style={styles.buttonRow}>
          <CalculatorButton
            color="red"
            textColor="black"
            buttonMargin={"3%"}
            buttonFunction="del"
            buttonBorderFull="1"
            onPress={deleteHandler}
            title="del"
          />
          <CalculatorButton
            color="#d4b4ca"
            textColor="black"
            buttonMargin={"3%"}
            buttonFunction="digit"
            buttonBorderFull="1"
            onPress={() => {
              pressHandler(0);
            }}
            title="0"
          />
          <LButtonLeft
            ref={LBLRef}
            onPress={enterHandler}
            onPressIn={() => {
              pressInLinkedHandler([LBTRef, LBBRef]);
            }}
            onPressOut={() => {
              pressInLinkedHandler([LBTRef, LBBRef]);
            }}
            title="enter"
          />
        </View>
      </View>
      <View style={styles.leftBand}>
        <CalculatorButton
          flex={2}
          rotate="90deg"
          buttonMargin="3%"
          buttonBorderFull="1"
          color="black"
          textColor="white"
          title={!props.started ? "GO" : "STOP"}
          onPress={props.onStart}
        />

        <LButtonTop
          ref={LBTRef}
          onPress={enterHandler}
          onPressIn={() => {
            pressInLinkedHandler([LBBRef, LBLRef]);
          }}
          onPressOut={() => {
            pressOutLinkedHandler([LBBRef, LBLRef]);
          }}
          title="title"
        />
        <LButtonBottom
          ref={LBBRef}
          onPress={enterHandler}
          onPressIn={() => {
            pressInLinkedHandler([LBTRef, LBLRef]);
          }}
          onPressOut={() => {
            pressOutLinkedHandler([LBTRef, LBLRef]);
          }}
          title="title"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  numberPad: {
    flex: 1.2,
    flexDirection: "row",
  },
  leftBand: {
    flex: 1,
    flexDirection: "column",
  },
  mainGrid: {
    flex: 4,
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
