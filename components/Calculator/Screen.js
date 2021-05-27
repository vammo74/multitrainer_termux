import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = { color: '#ccd4cb' };
    this.changeInputColor = (color) => {
      this.setState({ color: color });
    };
  }

  render() {
    const styles = StyleSheet.create({
      input: { backgroundColor: this.state.color },
    });

    return (
      <View className="screen">
        <View>
          <Text className="product">{this.props.product}</Text>
        </View>
        <View style={styles.input}>
          <Text className="inputAnswer">{this.props.digits}</Text>
        </View>
      </View>
    );
  }
}

export default Screen;
