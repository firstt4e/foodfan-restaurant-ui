import React, {Component} from 'react';
import QRCode from 'react-native-qrcode-svg';

import {AppRegistry, StyleSheet, View, Text, Image} from 'react-native';

class TestPromptpay extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.itemImage}
          source={{
            uri:
              'https://www.ceochannels.com/wp-content/uploads/2017/10/PromptPay.jpg',
          }}
        />
        {/* <QRCode
      value={this.state.text}
    /> */}

        <QRCode
          /*value={
            '00020101021129370016A000000677010111011300666271667505802TH530376463048956'
          }*/
          //กรอกเงินเอง
          value={
            '00020101021229370016A000000677010111011300666271667505802TH530376454079000.50630484B5'
          }
          //นำข้อมูลจำนวนเงินใส่ให้
          size={200}
          bgColor="#000000"
          fgColor="#FFFFFF"
        />
        <Text style={styles.Text}>ร้านพี่โอม</Text>
        <Text style={styles.Text}>100 บาท</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    marginTop: '3%',
    fontWeight: 'bold',
    fontSize: 24,
    fontFamily: 'kanitLight',
  },
  itemImage: {
    width: '80%',
    height: '20%',
  },
});

AppRegistry.registerComponent(' TestPromptpay', () => TestPromptpay);

module.exports = TestPromptpay;
