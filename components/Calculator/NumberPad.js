import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const NumberPad = (props) => {
  const pressHandler = (digit) => {
    console.log(digit);
    props.onEnteredDigit(digit);
  };
  const deleteHandler = () => {
    console.log('delete');
    props.onDelete();
  };
  const enterHandler = () => {
    console.log('enter');
    props.onEnter();
  };
  return (
    <View className="numberPad" style={styles.buttonRows}>
      <View style={styles.buttonRow}>
        <Button
          className="digit"
          onPress={() => {
            pressHandler(7);
          }}
          title="7"
        />
        <Button
          className="digit"
          onPress={() => {
            pressHandler(8);
          }}
          title="8"
        />
        <Button
          className="digit"
          onPress={() => {
            pressHandler(9);
          }}
          title="9"
        />
      </View>
      <View style={styles.buttonRow}>
        <Button
          className="digit"
          onPress={() => {
            pressHandler(4);
          }}
          title="4"
        />
        <Button
          className="digit"
          onPress={() => {
            pressHandler(5);
          }}
          title="5"
        />
        <Button
          className="digit"
          onPress={() => {
            pressHandler(6);
          }}
          title="6"
        />
      </View>
      <View style={styles.buttonRow}>
        <Button
          className="digit"
          onPress={() => {
            pressHandler(1);
          }}
          title="1"
        />
        <Button
          className="digit"
          onPress={() => {
            pressHandler(2);
          }}
          title="2"
        />
        <Button
          className="digit"
          onPress={() => {
            pressHandler(3);
          }}
          title="3"
        />
      </View>
      <View className="lastRow" style={styles.buttonRow}>
        <Button className="del" onPress={deleteHandler} title="del" />
        <Button
          className="digit"
          onPress={() => {
            pressHandler(0);
          }}
          title="0"
        />
        <Button className="enter" onClick={enterHandler} title="enter" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonRows: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default NumberPad;
