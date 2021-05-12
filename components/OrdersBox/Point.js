import React, {Component} from 'react';
import {View} from 'react-native';
export default class Point extends Component {
  render() {
    return (
      <View
        style={{
          width: 5,
          height: 5,
          borderWidth: 2,
          borderRadius: 10,
          borderColor: '#888888',
          backgroundColor: '#888888',
          marginBottom: 2,
        }}
      />
    );
  }
}
