import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

import CalculatorButton from './CalculatorButton';

const NumberPad = (props) => {
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
    <View className="numberPad" style={styles.buttonRows}>
      <View style={styles.buttonRow}>
        <CalculatorButton
          color="#d4b4ca"
          textColor="black"
          buttonMargin={'3%'}
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
          buttonMargin={'3%'}
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
          buttonMargin={'3%'}
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
          buttonMargin={'3%'}
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
          buttonMargin={'3%'}
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
          buttonMargin={'3%'}
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
          buttonMargin={'3%'}
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
          buttonMargin={'3%'}
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
          buttonMargin={'3%'}
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
          buttonMargin={'3%'}
          buttonFunction="del"
          buttonBorderFull="1"
          onPress={deleteHandler}
          title="del"
        />
        <CalculatorButton
          color="#d4b4ca"
          textColor="black"
          buttonMargin={'3%'}
          buttonFunction="digit"
          buttonBorderFull="1"
          onPress={() => {
            pressHandler(0);
          }}
          title="0"
        />
        <CalculatorButton
          buttonBorderEnterLeft="1"
          buttonMarginTop="3%"
          buttonMarginLeft="3%"
          buttonMarginRight="-3%"
          buttonMarginBottom="3%"
          color="#8bbd88"
          textColor="black"
          buttonFunction="enter"
          onPress={enterHandler}
          title="enter"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  numberPad: {
    flex: 1,
    flexDirection: 'column',
  },
  buttonRows: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NumberPad;
