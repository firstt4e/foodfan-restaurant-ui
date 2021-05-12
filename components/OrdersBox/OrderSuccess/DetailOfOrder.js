import React, {Component} from 'react';
import {Text} from 'react-native';
import styles from '../../../assets/styles';
export default class DetailOfOrder extends Component {
  render() {
    return (
      <>
        <Text
          style={[
            styles.randomMenuCardDetails,
            {paddingTop: 10, fontSize: 10},
          ]}>
          ส่งถึง 01/01/2021 12:55:00 น.
        </Text>
        <Text style={[styles.randomMenuCardDetails, {fontSize: 10}]}>
          หมายเลขใบเสร็จ EBF-B-0123456789
        </Text>
      </>
    );
  }
}
