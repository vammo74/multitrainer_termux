import React, { useState, useEffect, useRef } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import NumberPad from './NumberPad';
import Screen from './Screen';
import ScoreTracker from './ScoreTracker';
import Timer from './Timer';
import CalculatorButton from './CalculatorButton';

const Calculator = (props) => {
  const [started, setStarted] = useState(false);
  const [product, setProduct] = useState('');
  const [products, setProducts] = useState([]);
  const [isCorrect, setIsCorrect] = useState('');
  const [digits, setDigits] = useState('');
  const [timerFlag, setTimerFlag] = useState('stop');

  const scoreTrackerRef = useRef();
  const screenRef = useRef();

  const generateProducts = () => {
    const newProducts = [];
    for (let n = 2; n < 11; n++) {
      for (let m = 2; m < 11; m++) {
        if (
          !newProducts.includes(n + ' ✕ ' + m) &&
          !newProducts.includes(m + ' ✕ ' + n)
        ) {
          newProducts.push(n + ' ✕ ' + m);
        }
      }
    }
    return newProducts;
  };

  const generateProduct = () => {
    let productsArray = [...products];
    if (productsArray.length < 1) {
      productsArray = generateProducts();
      props.onChangeLevel('up');
    }
    if (productsArray.length >= 50) {
      productsArray = generateProducts();

      props.onChangeLevel('down');
    }
    const randomIndex = Math.floor(Math.random() * productsArray.length);
    const newProduct = productsArray.splice(randomIndex, 1);
    setProduct(newProduct[0]);
    setProducts([...productsArray]);
  };

  const startHandler = () => {
    if (!started) {
      setStarted(true);
      setTimerFlag('start');
      generateProduct();
    }
  };

  const stopHandler = () => {
    if (started) {
      setDigits('');
      setProducts([product, ...products]);
      setStarted(false);
      setTimerFlag('stop');
    }
  };

  const checkProductHandler = (answer) => {
    const numbers = product.split(' ✕ ');
    const result = parseInt(numbers[0]) * parseInt(numbers[1]);
    if (parseInt(answer) === result) {
      setDigits('');
      //      setIsCorrect('Correct');
      screenRef.current.changeInputColor('#79e36d');
      setTimeout(() => {
        screenRef.current.changeInputColor('#ccd4cb');
        //        setIsCorrect('');
      }, 250);
      generateProduct();
      console.log(products.length);
      if (timerFlag === 'reset-on') {
        setTimerFlag('reset-off');
      } else {
        setTimerFlag('reset-on');
      }
    } else {
      screenRef.current.changeInputColor('#f75252');
      //      setIsCorrect('Wrong');
      setProducts([product, ...products]);
      if (products.length >= 50) {
        generateProduct();
      }
      setTimeout(() => {
        screenRef.current.changeInputColor('#ccd4cb');
        //        setIsCorrect('');
      }, 250);
    }
  };

  const deleteHandler = () => {
    if (digits.length > 0 && started) {
      setDigits((prevDigits) => prevDigits.slice(0, -1));
    }
  };

  const enterHandler = () => {
    if (digits.length > 0 && started) {
      checkProductHandler(digits);
      setStarted(true);
    }
  };

  const enteredDigitsHandler = (newDigit) => {
    if (digits.length < 3 && started) {
      setDigits((prevDigits) => prevDigits + newDigit);
    }
  };

  useEffect(() => {
    let barFillHeight = Math.round((products.length / 50) * 100) + '%';
    scoreTrackerRef.current.changeHeight(barFillHeight.toString());
    console.log(scoreTrackerRef.current);
  }, [products, product]);

  return (
    <View className="calculator" style={styles.calculator}>
      <Screen ref={screenRef} product={product} digits={digits} key="screen" />
      <View style={styles.calculatorBody}>
        <ScoreTracker
          style={styles.scoreTracker}
          ref={scoreTrackerRef}
          level={props.level}
        />
        <Timer style={styles.timer} timerFlag={timerFlag} />
        <NumberPad
          style={styles.numberPad}
          digits={digits}
          onEnteredDigit={enteredDigitsHandler}
          onDelete={deleteHandler}
          onEnter={enterHandler}
        />
        <View style={styles.start}>
          <CalculatorButton
            flex={2}
            buttonMargin="3%"
            buttonBorderFull="1"
            color="black"
            textColor="white"
            onPress={!started ? startHandler : stopHandler}
            title={!started ? 'START' : 'STOP'}
          />

          <CalculatorButton
            flex={1}
            color="#8bbd88"
            onPress={enterHandler}
            buttonMarginTop="3%"
            buttonMarginBottom="-3%"
            buttonMarginRight="3%"
            buttonMarginLeft="3%"
            buttonBorderEnterTop="1"
            title=""
          />
          <CalculatorButton
            flex={1}
            color="#8bbd88"
            onPress={enterHandler}
            buttonMarginTop="3%"
            buttonMarginBottom="3%"
            buttonMarginRight="3%"
            buttonMarginLeft="3%"
            buttonBorderEnterBottom="1"
            title=""
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  calculator: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
  },
  calculatorBody: {
    flex: 1,
    flexDirection: 'row',
  },
  start: {
    flex: 0.3,
    flexDirection: 'column',
  },
});

export default Calculator;
