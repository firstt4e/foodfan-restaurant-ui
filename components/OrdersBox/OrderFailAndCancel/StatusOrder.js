import React, {Component} from 'react';
import {Text} from 'react-native';
export default class StatusOrder extends Component {
  ShowText(param) {
    if (param === 'ยกเลิก') {
      return 'ยกเลิกรายการ';
    } else {
      return 'รายการไม่สำเร็จ';
    }
  }
  render() {
    const {status} = this.props;
    return (
      <>
        <Text
          style={{
            color: 'red',
            fontSize: 13,
            fontFamily: 'Kanit-Regular',
          }}>
          {this.ShowText(status)}
        </Text>
        <Text
          style={{
            color: 'red',
            fontSize: 10,
            fontFamily: 'Kanit-Regular',
            paddingTop: 4,
          }}>
          หมายเหตุ...
        </Text>
      </>
    );
  }
}
