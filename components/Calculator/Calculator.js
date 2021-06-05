import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, AppState } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NumberPad from "./NumberPad";
import Screen from "./Screen";
import ScoreTracker from "./ScoreTracker";
import Timer from "./Timer";

const Calculator = (props) => {
  const [savedStats, setSavedStats] = useState(
    '{"level":4,"product":"","products":["5 ✕ 9","5 ✕ 8","4 ✕ 7","2 ✕ 2","2 ✕ 3","2 ✕ 4","2 ✕ 5","2 ✕ 6","2 ✕ 7","2 ✕ 8","2 ✕ 9","2 ✕ 10","3 ✕ 3","3 ✕ 4","3 ✕ 5","3 ✕ 6","3 ✕ 7","3 ✕ 8","3 ✕ 9","4 ✕ 4","4 ✕ 5","4 ✕ 6","4 ✕ 8","4 ✕ 9","4 ✕ 10","5 ✕ 5","5 ✕ 6","5 ✕ 7","5 ✕ 10","6 ✕ 6","6 ✕ 7","6 ✕ 8","6 ✕ 9","6 ✕ 10","7 ✕ 7","7 ✕ 8","7 ✕ 9","7 ✕ 10","8 ✕ 8","8 ✕ 9","8 ✕ 10","9 ✕ 9","9 ✕ 10","10 ✕ 10"],"timerInitialHeight":0}'
  );
  const [started, setStarted] = useState(false);
  const [product, setProduct] = useState("");
  const [products, setProducts] = useState([]);
  const [digits, setDigits] = useState("");
  const [timerFlag, setTimerFlag] = useState("stop");
  const [timerInitialHeight, setTimerInitialHeight] = useState(0);

  const scoreTrackerRef = useRef();
  const screenRef = useRef();

  const saveStats = async (value) => {
    try {
      await AsyncStorage.setItem("@storage_Key", value);
    } catch (e) {
      // saving error
    }
  };

  const loadStats = async () => {
    try {
      const value = await AsyncStorage.getItem("@storage_Key");
      if (value !== null) {
        console.log(value);
        setSavedStats(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  const _handleAppStateChange = (nextAppState) => {
    if (nextAppState === "background" || nextAppState === "inactive") {
      saveStats(savedStats);
      console.log("unmount");
    }
  };

  useEffect(() => {
    AppState.addEventListener("change", _handleAppStateChange);
    loadStats();
    let statsJson = JSON.parse(savedStats);
    setProduct(statsJson.product);
    setProducts(statsJson.products);
    setTimerInitialHeight(statsJson.timerInitialHeight);
    props.onUpdateLevel(statsJson.level);
    console.log(savedStats);
    console.log("mount");

    return () => {
      AppState.removeEventListener("change", _handleAppStateChange);
    };
  }, []);

  useEffect(() => {
    let statsJson = {
      level: props.level,
      product: product,
      products: products,
      timerInitialHeight: timerInitialHeight,
    };
    let stats = JSON.stringify(statsJson);
    console.log(stats);
    setSavedStats(stats);
  }, [props.level, product, products]);

  const generateProducts = () => {
    const newProducts = [];
    for (let n = 2; n < 11; n++) {
      for (let m = 2; m < 11; m++) {
        if (
          !newProducts.includes(n + " ✕ " + m) &&
          !newProducts.includes(m + " ✕ " + n)
        ) {
          newProducts.push(n + " ✕ " + m);
        }
      }
    }
    return newProducts;
  };

  const generateProduct = () => {
    let productsArray = [...products];
    if (productsArray.length < 1) {
      productsArray = generateProducts();
      props.onChangeLevel("up");
    }
    if (productsArray.length >= 50) {
      productsArray = generateProducts();

      props.onChangeLevel("down");
    }
    const randomIndex = Math.floor(Math.random() * productsArray.length);
    const newProduct = productsArray.splice(randomIndex, 1);
    setProduct(newProduct[0]);
    setProducts([...productsArray]);
  };

  const startHandler = () => {
    if (!started) {
      setStarted(true);
      setTimerFlag("start");
      generateProduct();
    }
  };

  const stopHandler = () => {
    if (started) {
      setDigits("");
      setProducts([product, ...products]);
      setStarted(false);
      setTimerFlag("stop");
    }
  };

  const checkProductHandler = (answer) => {
    const numbers = product.split(" ✕ ");
    const result = parseInt(numbers[0]) * parseInt(numbers[1]);
    if (parseInt(answer) === result) {
      setDigits("");
      screenRef.current.changeInputColor("#79e36d");
      setTimeout(() => {
        screenRef.current.changeInputColor("#ccd4cb");
      }, 250);
      generateProduct();
      if (timerFlag === "reset-on") {
        setTimerFlag("reset-off");
      } else {
        setTimerFlag("reset-on");
      }
    } else {
      screenRef.current.changeInputColor("#f75252");
      setProducts([product, ...products]);
      if (products.length >= 50) {
        generateProduct();
      }
      setTimeout(() => {
        screenRef.current.changeInputColor("#ccd4cb");
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

  const recordTimerHandler = (timerHeight) => {
    setTimerInitialHeight(timerHeight);
  };

  useEffect(() => {
    let barFillHeight = Math.round((products.length / 50) * 85) + "%";
    let warningLevel = products.length;
    if (warningLevel === 44) {
      scoreTrackerRef.current.changeTrackerColor("#4da6ff");
    }
    if (warningLevel === 47) {
      scoreTrackerRef.current.changeTrackerColor("#cc99ff");
    }
    if (warningLevel === 48) {
      scoreTrackerRef.current.changeTrackerColor("#ff9980");
    }
    if (warningLevel === 49) {
      scoreTrackerRef.current.changeTrackerColor("#ff3333");
    }

    scoreTrackerRef.current.changeHeight(barFillHeight.toString());
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
        <Timer
          style={styles.timer}
          timerFlag={timerFlag}
          onRecordTimer={recordTimerHandler}
          timerInitialHeight={timerInitialHeight}
        />
        <NumberPad
          style={styles.numberPad}
          digits={digits}
          onEnteredDigit={enteredDigitsHandler}
          onDelete={deleteHandler}
          onEnter={enterHandler}
          onStart={!started ? startHandler : stopHandler}
          started={started}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  calculator: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "50%",
  },
  calculatorBody: {
    flex: 1,
    flexDirection: "row",
  },
  start: {
    flex: 0.3,
    flexDirection: "column",
  },
});

export default Calculator;
