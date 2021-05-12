import React, {Component} from 'react';
import {Text} from 'react-native';
import styles from '../../../assets/styles';
export default class DetailOfOrder extends Component {
  render() {
    return (
      <Text style={[styles.randomMenuCardDetails, {paddingTop: 10}]}>
        กำลังทำ..
      </Text>
    );
  }
}
