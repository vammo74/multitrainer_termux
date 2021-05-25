const axios = require("axios");
import React, { useRef, useEffect } from "react";

import { StyleSheet, View, Button, TouchableOpacity, Text } from "react-native";

import TableCell from "../../UI/TableCell";
import NewTableCell from "./NewTableCell";

let horizontalColorMemory = [];
let verticalColorMemory = [];
let crossover = 0;

const generateTableData = () => {
  let tableData = [];
  let rowData;
  let _key;
  let _value;
  let _type;
  let _function;
  let _id = 0;
  let Obj;

  for (let x = 9; x >= 0; x--) {
    rowData = [];
    for (let y = 0; y < 10; y++) {
      _key = x.toString() + y.toString();
      _value = (x + 1) * (y + 1);
      if (x === 0 && y !== 0) {
        _type = "toggle";
        _function = "vertical";
      } else if (y === 0 && x !== 0) {
        _type = "toggle";
        _function = "horizontal";
      } else if (x === 0 && y === 0) {
        _type = "toggle";
        _function = "dummy";
      } else {
        _type = "body";
        _function = "body";
      }
      Obj = {
        key: _key,
        value: _value,
        type: _type,
        function: _function,
        id: _id,
      };
      rowData.push(Obj);
      _id += 1;
    }
    tableData.push(rowData);
  }
  return tableData;
};

let tableData = generateTableData();

const Table = (props) => {
  const cellRefs = useRef([]);

  const horizontalColorHandler = (event) => {
    if (crossover) {
      cellRefs.current[crossover].setAttribute(
        "style",
        "backgroundColor: #7121a6; color: #fff;"
      );
    }
    if (horizontalColorMemory[0]) {
      cellRefs.current[horizontalColorMemory[0]].setAttribute(
        "style",
        "backgroundColor: #9377a6; color: #000;"
      );
    }
    for (let n of horizontalColorMemory.slice(1)) {
      if (!verticalColorMemory.includes(n)) {
        cellRefs.current[n].setAttribute(
          "style",
          "backgroundColor: #d7b7ed; color: #000;"
        );
      }
    }

    horizontalColorMemory = [];
    let index = (10 - parseInt(event.target.innerHTML)) * 10;
    for (let x = index; x < index + 10; x++) {
      cellRefs.current[x].setAttribute(
        "style",
        "backgroundColor: #7121a6; color: #fff;"
      );
      horizontalColorMemory.push(x);
      for (let n of horizontalColorMemory) {
        for (let x of verticalColorMemory) {
          if (x === n) {
            cellRefs.current[x].setAttribute(
              "style",
              "backgroundColor: #580c7a; color: #fff;"
            );
            crossover = n;
          }
        }
      }
    }
  };

  const verticalColorHandler = (value) => {
    console.log("pressed");
    console.log(value);
    if (crossover) {
      cellRefs.current[crossover].changeColor("#7121a6", "#ffffff");
    }
    if (verticalColorMemory[0]) {
      cellRefs.current[verticalColorMemory[0]].changeColor(
        "#9377a6",
        "#000000"
      );
    }
    for (let n of verticalColorMemory.slice(1)) {
      if (!horizontalColorMemory.includes(n)) {
        cellRefs.current[n].changeColor("#d7b7ed", "#000000");
      }
    }
    verticalColorMemory = [];
    let index = 89 + parseInt(value);
    for (let x = index; x > index - 100; x -= 10) {
      cellRefs.current[x].changeColor("#7121a6", "#ffffff");

      console.log(cellRefs.current[x]);
      if (horizontalColorMemory.includes(x)) {
        cellRefs.current[x].changeColor("#580c7a", "#ffffff");
      }
      verticalColorMemory.push(x);
      for (let n of verticalColorMemory) {
        for (let x of horizontalColorMemory) {
          if (x === n) {
            //    cellRefs.current[x].setAttribute(
            //     "style",
            //    "backgroundColor: #580c7a; color: #fff;"
            //   );
            crossover = n;
          }
        }
      }
    }
  };

  //  const tableLevel = (level) => {
  //    const obj = Object.getOwnPropertyNames(cellRefs.current[0]);
  //    console.log(cellRefs.current[0]._nativeTag);
  //    console.log(cellRefs.current[0]._children);
  //    console.log(obj);
  //    axios.post("http://localhost:3000/logs", {
  //      date: new Date(),
  //      msg: obj,
  //    });
  //    for (let cell of cellRefs.current) {
  //      let firstNumber = parseInt(cell.key[0]);
  //      let secondNumber = parseInt(cell.key[1]);
  //      let value = (firstNumber + 1) * (secondNumber + 1);
  //      cell.innerHTML = value.toString();
  //    }
  //    let toChangeCells = [];
  //    for (let x = 1; x < level; x++) {
  //      for (let y = 1; y < level; y++) {
  //        let _id = x.toString() + y.toString();
  //        toChangeCells.push(_id);
  //      }
  //    }
  //    for (let val of toChangeCells) {
  //      for (let x = 0; x < cellRefs.current.length; x++) {
  //        if (val === cellRefs.current[x].id) {
  //          cellRefs.current[x].innerHTML = "&#x2666";
  //        }
  //      }
  //    }
  //  };

  //  useEffect(() => {
  //    tableLevel(props.level);
  //  }, [props.level]);

  useEffect(() => {
    for (let n of cellRefs.current) {
      if (n.props.buttonFunction === "body") {
        n.changeColor("#d7b7ed", "#000000");
      }
    }
  }, []);

  return (
    <View className="tableBody" style={styles.tableBody}>
      {tableData.map((data) => {
        return (
          <View
            className="tableRow"
            style={styles.tableRow}
            key={Math.random()}
          >
            {data.map((obj) => {
              if (obj.function === "vertical") {
                return (
                  <NewTableCell
                    onPress={() => verticalColorHandler(obj.value)}
                    key={obj.key}
                    id={obj.id}
                    ref={(el) => (cellRefs.current[obj.id] = el)}
                    title={obj.value.toString()}
                  />
                );
              } else if (obj.function === "horizontal") {
                return (
                  <NewTableCell
                    onPress={horizontalColorHandler}
                    key={obj.key}
                    id={obj.id}
                    ref={(el) => (cellRefs.current[obj.id] = el)}
                    title={obj.value.toString()}
                  />
                );
              } else if (obj.function === "dummy") {
                return (
                  <NewTableCell
                    key={obj.key}
                    id={obj.id}
                    ref={(el) => (cellRefs.current[obj.id] = el)}
                    title={obj.value.toString()}
                  />
                );
              } else {
                return (
                  <NewTableCell
                    key={obj.key}
                    id={obj.id}
                    buttonFunction={obj.type}
                    ref={(el) => (cellRefs.current[obj.id] = el)}
                    title={obj.value.toString()}
                  />
                );
              }
            })}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tableBody: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    height: "50%",
    width: "100%",
  },
  tableRow: {
    alignSelf: "flex-start",
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "100%",
  },
  buttonBody: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});

export default Table;
