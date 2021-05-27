import React, { useRef, useEffect } from 'react';

import { StyleSheet, View } from 'react-native';

import NewTableCell from './NewTableCell';

let horizontalColorMemory = [];
let verticalColorMemory = [];
let excluded = [];
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
        _type = 'toggle';
        _function = 'vertical';
      } else if (y === 0 && x !== 0) {
        _type = 'toggle';
        _function = 'horizontal';
      } else if (x === 0 && y === 0) {
        _type = 'toggle';
        _function = 'dummy';
      } else {
        _type = 'body';
        _function = 'body';
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

  const horizontalColorHandler = (value) => {
    if (crossover) {
      if (!excluded.includes(cellRefs.current[crossover].props.title)) {
        cellRefs.current[crossover].changeColor('#7121a6', '#ffffff');
      }
    }
    if (horizontalColorMemory[0] >= 0) {
      cellRefs.current[horizontalColorMemory[0]].changeColor(
        '#9377a6',
        '#000000'
      );
    }
    for (let n of horizontalColorMemory.slice(1)) {
      if (!verticalColorMemory.includes(n)) {
        if (!excluded.includes(cellRefs.current[n].props.title)) {
          cellRefs.current[n].changeColor('#d7b7ed', '#000000');
        }
      }
    }

    horizontalColorMemory = [];
    let index = (10 - parseInt(value)) * 10;
    for (let x = index; x < index + 10; x++) {
      if (!excluded.includes(cellRefs.current[x].props.title)) {
        cellRefs.current[x].changeColor('#7121a6', '#ffffff');
      }
      horizontalColorMemory.push(x);
      for (let n of horizontalColorMemory) {
        for (let x of verticalColorMemory) {
          if (x === n) {
            if (!excluded.includes(cellRefs.current[x].props.title)) {
              cellRefs.current[x].changeColor('#580c7a', '#ffffff');
            }
            crossover = x;
          }
        }
      }
    }
    cellRefs.current[index].changeColor('#7121a6', '#ffffff');
  };

  const verticalColorHandler = (value) => {
    if (crossover) {
      if (!excluded.includes(cellRefs.current[crossover].props.title)) {
        cellRefs.current[crossover].changeColor('#7121a6', '#ffffff');
      }
    }
    if (verticalColorMemory[0]) {
      cellRefs.current[verticalColorMemory[0]].changeColor(
        '#9377a6',
        '#000000'
      );
    }
    for (let n of verticalColorMemory.slice(1)) {
      if (!horizontalColorMemory.includes(n)) {
        if (!excluded.includes(cellRefs.current[n].props.title)) {
          cellRefs.current[n].changeColor('#d7b7ed', '#000000');
        }
      }
    }
    verticalColorMemory = [];
    let index = 89 + parseInt(value);
    for (let x = index; x > index - 100; x -= 10) {
      if (!excluded.includes(cellRefs.current[x].props.title)) {
        cellRefs.current[x].changeColor('#7121a6', '#ffffff');
      }
      verticalColorMemory.push(x);
      for (let n of verticalColorMemory) {
        for (let x of horizontalColorMemory) {
          if (x === n) {
            if (!excluded.includes(cellRefs.current[x].props.title)) {
              cellRefs.current[x].changeColor('#580c7a', '#ffffff');
            }
            crossover = x;
          }
        }
      }
    }
    cellRefs.current[index].changeColor('#7121a6', '#ffffff');
  };

  const tableLevel = (level) => {
    let _id = 0;
    excluded = [];
    for (let x = 100 - level * 10; x < 100; x + 10) {
      for (let y = 0; y < level; y + 1) {
        _id = x + y;
        if (!excluded.includes(_id)) {
          excluded.push(_id);
        }
      }
    }
    console.log(excluded);
    //    for (let cell of cellRefs.current) {
    //      console.log(cell.props.id);
    //      if (
    //        excluded.includes(cell.props.id) &&
    //        cell.props.buttonFunction === 'body'
    //      ) {
    //        cell.changeColor('#4d0066', 'transparent');
    //      }
    //    }
  };

  useEffect(() => {
    console.log(cellRefs.current[2].props);
    console.log('change color');
    for (let cell of cellRefs.current) {
      if (cell.props.buttonFunction === 'body') {
        cell.changeColor('#d7b7ed', '#000000');
      }
    }
  }, [props.level]);

  useEffect(() => {
    console.log('level');
    tableLevel(props.level);
  }, [props.level]);

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
              if (obj.function === 'vertical') {
                return (
                  <NewTableCell
                    onPress={() => verticalColorHandler(obj.value)}
                    key={obj.key}
                    id={obj.id}
                    ref={(el) => (cellRefs.current[obj.id] = el)}
                    title={obj.value.toString()}
                  />
                );
              } else if (obj.function === 'horizontal') {
                return (
                  <NewTableCell
                    onPress={() => horizontalColorHandler(obj.value)}
                    key={obj.key}
                    id={obj.id}
                    ref={(el) => (cellRefs.current[obj.id] = el)}
                    title={obj.value.toString()}
                  />
                );
              } else if (obj.function === 'dummy') {
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
    flexDirection: 'column',
    backgroundColor: '#fff',
    height: '50%',
    width: '100%',
  },
  tableRow: {
    alignSelf: 'flex-start',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '100%',
  },
  buttonBody: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

export default Table;
