import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default class OrderListOfFood extends Component {
  render() {
    const data = this.props.data;
    console.log(data)
    return (
      <>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text style={{color: '#444', fontSize: 13}}>{data.orderid.name}</Text>
          </View>
          <View
            style={{
              flex: 1,
              paddingLeft: 10,
            }}>
            <Text style={{color: '#444', fontSize: 13}}>{}</Text>
            <Text
              style={{
                color: '#444',
                fontSize: 13,
                position: 'absolute',
                alignSelf: 'flex-end',
                right: 20,
              }}>
              {}
            </Text>
            <Text style={{color: '#444', fontSize: 13}}>{}</Text>
            <Text style={{color: '#444', fontSize: 13}}>{}</Text>
            <Text style={{color: '#444', fontSize: 13}}>{}</Text>
          </View>
        </View>
      </>
    );
  }
}
