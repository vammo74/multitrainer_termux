import React, { useRef, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Screen = (props) => {
  const inputRef = useRef(null);
  const inputViewRef = useRef(null);
  const [color, setColor] = useState('#ccd4cb');
  const inputStyle = [styles.input];

  console.log('remount');
  console.log(inputViewRef.props);

  useEffect(() => {
    console.log('check');
    if (props.isCorrect === 'Correct') {
      console.log('is correct');
      console.log(props.isCorrect);
      setColor('#79e36d');
      inputStyle.push({ backgroundColor: color });
      console.log(color);
      //    setTimeout(() => {
      //      setColor('#ccd4cb');
      //      inputStyle.push({ backgroundColor: color });
      //      console.log(color);
      //    }, 250);
    }
    if (props.isCorrect === 'Wrong') {
      setColor('#f75252');
      inputStyle.push({ backgroundColor: color });
      setTimeout(() => {
        setColor('#ccd4cb');
        inputStyle.push({ backgroundColor: color });
      }, 250);
    } else {
      inputStyle.push({ backgroundColor: '#ccd4cb' });
    }
  }, [props.isCorrect]);

  return (
    <View className="screen">
      <View>
        <Text className="product">{props.product}</Text>
      </View>
      <View ref={inputViewRef} style={styles.input}>
        <Text className="inputAnswer" ref={inputRef}>
          {props.digits}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {},
});

export default Screen;
