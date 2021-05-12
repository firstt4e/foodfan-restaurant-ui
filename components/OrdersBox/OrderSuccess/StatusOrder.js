import React, {Component} from 'react';
import {Text} from 'react-native';
export default class StatusOrder extends Component {
  render() {
    return (
      <Text
        style={{
          color: 'green',
          alignSelf: 'center',
          fontSize: 13,
          fontFamily: 'Kanit-Regular',
        }}>
        รายการสำเร็จ
      </Text>
    );
  }
}
